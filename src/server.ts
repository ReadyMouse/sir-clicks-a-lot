import express from 'express';
import path from 'path';
import { SirCALAgent } from './agent/SirCALAgent';

const app = express();
const port = process.env.PORT || 3000;

// Initialize the agent
const agent = new SirCALAgent();
agent.initialize();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = agent.processInput(message);
    res.json({ response });
  } catch (error) {
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