# sir-clicks-a-lot

An AI-powered job search assistant that helps streamline your job hunting process from application to interview.

## Overview

Sir Clicks-a-lot is your personal job search companion that handles everything from finding opportunities to preparing for interviews. Think of it as your dedicated job search agent that does everything to get you in the front door - except pack your lunch!

## Planned Features

### Application Management
- Upload and store your resume and cover letter
- Input your job preferences and requirements
- Automated job search across multiple platforms
- Smart resume and cover letter customization for each application
- Application tracking and spreadsheet management

### Interview Support
- Real-time interview request notifications
- Company research and summary generation
- Personalized interview preparation tips
- Salary comparison tools for negotiation support

### Career Development
- Local networking opportunity finder
- Relevant course and training recommendations
- Hackathon and workshop discovery
- Continuous learning suggestions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm
- Anthropic API key for Claude AI

### Environment Setup

1. Clone the repository:
```bash
git clone git@github.com:ReadyMouse/sir-clicks-a-lot.git
cd sir-clicks-a-lot
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the project root:
```
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

### Build the Project

To compile the TypeScript source code:

```bash
pnpm run build
```

### Run the Web Interface

#### For Development (auto-reloads on changes):
```bash
pnpm run dev
```
This uses `ts-node-dev` and is best while you're actively developing.

#### For Production (runs the compiled JavaScript):
```bash
pnpm start
```
This uses `ts-node` to run your server.

After running either command, your web interface will be available at:
**http://localhost:3000**

## Features

### AI-Powered Job Search Assistant
- Intelligent conversation using Claude AI
- Context-aware responses for job search queries
- Resume and cover letter optimization suggestions
- Interview preparation guidance
- Salary negotiation insights
- Course and training recommendations

### Modern Web Interface
- Real-time chat interface
- Dark mode support
- Responsive design
- Conversation history tracking
- Feature-rich sidebar navigation

## Requirements

[Coming soon]

## Installation

[Coming soon]

## Usage

[Coming soon]

## Contributing

[Coming soon]

## License

[Coming soon]
