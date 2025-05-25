export abstract class BaseAgent {
  protected initialized: boolean = false;
  protected patterns: Record<string, string[]> = {};

  constructor() {
    this.initialized = false;
  }

  public initialize(): void {
    this.initialized = true;
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  public cleanup(): void {
    this.initialized = false;
  }
} 