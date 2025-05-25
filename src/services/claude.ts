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

Always maintain a professional yet friendly tone. Be specific and actionable in your advice. If you're not sure about something, be honest about it.`;
    }

    async getResponse(userInput: string): Promise<string> {
        try {
            const message = await this.client.messages.create({
                model: 'claude-3-opus-20240229',
                max_tokens: 1000,
                messages: [
                    {
                        role: 'user',
                        content: `${this.systemPrompt}\n\nUser: ${userInput}`
                    }
                ],
                temperature: 0.7,
            });

            return message.content[0].text;
        } catch (error) {
            console.error('Error getting response from Claude:', error);
            return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
        }
    }
} 