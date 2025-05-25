"""
Streamlit Web Interface for Sir Clicks-a-lot
Interactive web interface for the job search assistant
"""

import streamlit as st
from src.agent import SirCALAgent

def initialize_session_state():
    """Initialize session state variables"""
    if 'agent' not in st.session_state:
        st.session_state.agent = SirCALAgent()
        st.session_state.agent.initialize()
    if 'messages' not in st.session_state:
        st.session_state.messages = []

def main():
    st.title("Sir Clicks-a-lot Job Search Assistant")
    st.markdown("Your AI-powered job search companion")
    
    # Initialize session state
    initialize_session_state()
    
    # Display chat messages
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    
    # Chat input
    if prompt := st.chat_input("What can I help you with?"):
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
        
        # Get agent response
        response = st.session_state.agent.process_input(prompt)
        
        # Add assistant response to chat history
        st.session_state.messages.append({"role": "assistant", "content": response})
        with st.chat_message("assistant"):
            st.markdown(response)
    
    # Sidebar with additional features
    with st.sidebar:
        st.header("Features")
        if st.button("View Conversation History"):
            history = st.session_state.agent.get_conversation_history()
            st.write("### Conversation History")
            for entry in history:
                st.write(f"**You:** {entry['user']}")
        
        st.markdown("---")
        st.markdown("### About")
        st.markdown("""
        Sir Clicks-a-lot helps you:
        - Search for jobs
        - Optimize your resume
        - Track applications
        - Prepare for interviews
        """)

if __name__ == "__main__":
    main() 