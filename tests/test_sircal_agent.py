"""
Tests for the Sir Clicks-a-lot Agent module
"""

import pytest
from src.agent import SirCALAgent

def test_sircal_agent_initialization():
    """Test basic Sir Clicks-a-lot agent initialization"""
    agent = SirCALAgent()
    assert not agent.is_initialized()
    agent.initialize()
    assert agent.is_initialized()
    assert hasattr(agent, 'patterns')
    assert 'greeting' in agent.patterns
    assert 'job_search' in agent.patterns
    assert 'resume_help' in agent.patterns

def test_sircal_agent_conversation():
    """Test basic conversation functionality"""
    agent = SirCALAgent()
    agent.initialize()
    
    # Test greeting
    response = agent.process_input("Hello")
    assert any(greeting in response for greeting in [
        "Hello! I'm your job search assistant",
        "Hi there! Ready to help you find",
        "Welcome! I'm here to help"
    ])
    
    # Test job search
    response = agent.process_input("I'm looking for a job")
    assert "help you search for" in response or "Looking for" in response
    
    # Test resume help
    response = agent.process_input("Can you help with my resume?")
    assert "resume" in response.lower()

def test_sircal_agent_conversation_history():
    """Test conversation history tracking"""
    agent = SirCALAgent()
    agent.initialize()
    
    agent.process_input("Hello")
    agent.process_input("I need a job")
    
    history = agent.get_conversation_history()
    assert len(history) == 2
    assert history[0]["user"] == "Hello"
    assert history[1]["user"] == "I need a job" 