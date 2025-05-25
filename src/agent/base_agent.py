"""
Base Agent Class
Provides core functionality for all agents in the system
"""

from typing import Any, Dict, Optional

class BaseAgent:
    """Base class for all agents in the system"""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize the base agent with optional configuration"""
        self.config = config or {}
        self.initialized = False
    
    def initialize(self) -> None:
        """Initialize the agent with required resources"""
        self.initialized = True
    
    def is_initialized(self) -> bool:
        """Check if the agent has been initialized"""
        return self.initialized
    
    def cleanup(self) -> None:
        """Clean up any resources used by the agent"""
        self.initialized = False 