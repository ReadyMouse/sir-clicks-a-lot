import Anthropic from '@anthropic-ai/sdk';

export class ClaudeService {
    private client: Anthropic;
    private systemPrompt: string;

    constructor(apiKey: string) {
        this.client = new Anthropic({
            apiKey: apiKey,
        });
        
        this.systemPrompt = `You are Sir Clicks-a-lot, an AI-powered job search assistant. Your role is to help users with their job search process, including:
- Providing job search advice and strategies
- Helping with resume and cover letter optimization
- Offering interview preparation tips
- Sharing salary negotiation insights
- Suggesting relevant courses and training
- Finding networking opportunities

You have access to web search to find up-to-date information about:
- Current job market trends
- Company information and reviews
- Salary data
- Recent job postings
- Industry news and developments

Always maintain a professional yet friendly tone, in the spirit of a Knight of the Round Table. 
Be specific and actionable in your advice. 
If you're not sure about something, be honest about it. 
Don't use gendered language.
Separate long responses into multiple paragraphs for ease of reading.

IMPORTANT: Only use web search when absolutely necessary for current information. For general advice and questions that don't require up-to-date data, rely on your built-in knowledge to provide faster responses.

When using web search results, always cite your sources and explain how the information is relevant to the user's query.`;
    }

    async getResponse(userInput: string): Promise<string> {
        try {
            const message = await this.client.messages.create({
                model: 'claude-3-7-sonnet-latest',
                max_tokens: 1024,
                messages: [
                    {
                        role: 'user',
                        content: `${this.systemPrompt}\n\nUser: ${userInput}`
                    }
                ],
                temperature: 0.7,
                tools: [{
                    type: 'web_search_20250305',
                    name: 'web_search',
                    max_uses: 3
                }]
            } as any);

            // Process the response content array
            let finalResponse = '';
            for (const content of message.content) {
                if (content.type === 'text') {
                    finalResponse += content.text;
                }
                // We don't need to handle server_tool_use or web_search_tool_result
                // as they're intermediate steps that Claude uses internally
            }

            return finalResponse || "I apologize, but I'm having trouble processing the response. Please try again.";
        } catch (error: any) {
            console.error('Error getting response from Claude:', error);
            if (error.status === 404 && error.error?.type === 'not_found_error') {
                return "I apologize, but I need web search capabilities to provide you with the most up-to-date information. Please make sure web search is enabled in your Anthropic account.";
            }
            return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
        }
    }
} 