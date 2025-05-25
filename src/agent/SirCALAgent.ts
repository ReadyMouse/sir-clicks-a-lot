import { Eliza } from 'eliza';
import { BaseAgent } from './BaseAgent';

interface ConversationEntry {
  user: string;
  timestamp: string;
}

interface JobPreferences {
  location?: string;
  jobType?: string;
  experienceLevel?: string;
}

export class SirCALAgent extends BaseAgent {
  private conversationHistory: ConversationEntry[] = [];
  private userProfile: Record<string, any> = {};
  private jobPreferences: JobPreferences = {};
  private eliza: Eliza;

  constructor() {
    super();
    this.eliza = new Eliza();
  }

  public initialize(): void {
    super.initialize();
    // Initialize conversation patterns
    this.patterns = {
      greeting: [
        "Hello! I'm your job search assistant. How can I help you today?",
        "Hi there! Ready to help you find your next opportunity. What are you looking for?",
        "Welcome! I'm here to help with your job search. What can I do for you?"
      ],
      jobSearch: [
        "I can help you search for {jobType} positions in {location}. Would you like to start?",
        "Looking for {jobType} jobs in {location}? I can help with that.",
        "Let's find some {jobType} opportunities in {location} for you."
      ],
      resumeHelp: [
        "I can help you optimize your resume for {jobType} positions. Would you like to upload it?",
        "Let's make your resume stand out for {jobType} roles. Ready to get started?",
        "I can review and suggest improvements for your resume. Shall we begin?"
      ]
    };
  }

  public processInput(userInput: string): string {
    if (!this.isInitialized()) {
      throw new Error("Agent must be initialized before processing input");
    }

    // Store the conversation
    this.conversationHistory.push({
      user: userInput,
      timestamp: new Date().toISOString()
    });

    // Process with Eliza first
    const elizaResponse = this.eliza.transform(userInput);
    if (elizaResponse) {
      return elizaResponse;
    }

    // Basic response logic
    const input = userInput.toLowerCase();
    if (input.includes('hello') || input.includes('hi')) {
      return this.getRandomResponse('greeting');
    } else if (input.includes('job') || input.includes('position')) {
      return this.getRandomResponse('jobSearch');
    } else if (input.includes('resume')) {
      return this.getRandomResponse('resumeHelp');
    }

    return "I understand. How else can I help you with your job search?";
  }

  public getConversationHistory(): ConversationEntry[] {
    return this.conversationHistory;
  }

  public setJobPreferences(preferences: JobPreferences): void {
    this.jobPreferences = { ...this.jobPreferences, ...preferences };
  }

  private getRandomResponse(type: keyof typeof this.patterns): string {
    const responses = this.patterns[type];
    return responses[Math.floor(Math.random() * responses.length)];
  }
} 