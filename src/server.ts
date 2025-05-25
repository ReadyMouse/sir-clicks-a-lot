import express from 'express';
import path from 'path';
import { SirCALAgent } from './agent/SirCALAgent';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Check for required API key
const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Error: ANTHROPIC_API_KEY is not set in .env file');
  process.exit(1);
}

// Initialize the agent with Claude API key
const agent = new SirCALAgent(apiKey);
agent.initialize();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await agent.processInput(message);
    res.json({ response });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

app.get('/api/history', (req, res) => {
  try {
    const history = agent.getConversationHistory();
    res.json({ history });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get conversation history' });
  }
});

// Serve the main HTML file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 