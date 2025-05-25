"""
Command Line Interface for Sir Clicks-a-lot
Simple interface to test the agent's conversation capabilities
"""

from src.agent import SirCALAgent

def main():
    # Initialize the agent
    agent = SirCALAgent()
    agent.initialize()
    
    print("\n=== Sir Clicks-a-lot Job Search Assistant ===")
    print("Type 'quit' or 'exit' to end the conversation")
    print("Type 'history' to see the conversation history")
    print("===========================================\n")
    
    # Get initial greeting
    print(agent.process_input("hello"))
    
    while True:
        # Get user input
        user_input = input("\nYou: ").strip()
        
        # Check for exit commands
        if user_input.lower() in ['quit', 'exit']:
            print("\nGoodbye! Good luck with your job search!")
            break
            
        # Check for history command
        if user_input.lower() == 'history':
            history = agent.get_conversation_history()
            print("\n=== Conversation History ===")
            for entry in history:
                print(f"You: {entry['user']}")
            continue
        
        # Process input and get response
        response = agent.process_input(user_input)
        print(f"\nSirCAL: {response}")

if __name__ == "__main__":
    main() 