"""
Tests for the agent module
"""

import pytest
from src.agent import BaseAgent, JobAgent

def test_base_agent_initialization():
    """Test basic agent initialization"""
    agent = BaseAgent()
    assert not agent.is_initialized()
    agent.initialize()
    assert agent.is_initialized()
    agent.cleanup()
    assert not agent.is_initialized()

def test_job_agent_preferences():
    """Test job agent preference setting"""
    agent = JobAgent()
    preferences = {
        "location": "San Francisco",
        "job_type": "Software Engineer",
        "experience_level": "Mid-Senior"
    }
    agent.set_job_preferences(preferences)
    assert agent.job_preferences == preferences

def test_job_agent_search_requires_initialization():
    """Test that job search requires initialization"""
    agent = JobAgent()
    with pytest.raises(RuntimeError):
        agent.search_jobs() 