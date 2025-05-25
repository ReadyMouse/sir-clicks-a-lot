# Project Planning Document

## Technical Stack
- Base: TypeScript/Node.js
- Framework: Express
- Frontend: HTML/CSS (Tailwind CSS)
- Database: SQLite (for storing user data, job applications, and tracking)
- AI: Claude 3 Opus (Anthropic)
- External APIs needed:
  - Job search APIs (LinkedIn, Indeed, etc.)
  - Resume parsing
  - Company information
  - Salary data
  - Event discovery (for networking/courses)

## Project Structure
```
sir-clicks-a-lot/
├── src/
│   ├── agent/                 # Agent core
│   │   ├── BaseAgent.ts      # Base agent class
│   │   └── SirCALAgent.ts    # Job-specific agent implementation
│   ├── eliza/                # Eliza pattern matching
│   │   └── index.ts          # Eliza implementation
│   ├── services/             # External service integrations
│   │   ├── claude.ts         # Claude AI integration
│   │   ├── job_search.ts     # [Planned]
│   │   ├── resume_parser.ts  # [Planned]
│   │   ├── company_research.ts # [Planned]
│   │   └── event_finder.ts   # [Planned]
│   ├── models/               # Data models
│   │   ├── user.ts          # [Planned]
│   │   ├── job.ts           # [Planned]
│   │   ├── application.ts   # [Planned]
│   │   └── interview.ts     # [Planned]
│   └── utils/                # Helper functions
│       ├── file_handlers.ts  # [Planned]
│       └── data_processors.ts # [Planned]
├── public/                   # Web interface
│   ├── index.html           # Main interface
│   ├── styles.css           # Styling
│   └── app.js              # Frontend logic
├── data/                     # Data storage
│   ├── resumes/             # [Planned]
│   ├── cover_letters/       # [Planned]
│   └── db/                  # [Planned]
├── tests/                    # Test suite
├── config/                   # Configuration files
└── docs/                     # Documentation
```

## Implementation Phases

### Phase 1: Core Setup ✅
- [X] Set up project structure
- [X] Implement basic Eliza agent integration
- [X] Set up configuration management
- [X] Create web interface
- [X] Integrate Claude AI
- [ ] Create database schema

### Phase 2: Basic Features
- [ ] Resume/Cover letter upload and storage
- [ ] Job preferences management
- [ ] Basic job search integration
- [ ] Application tracking
- [ ] Interview scheduling

### Phase 3: Advanced Features
- [ ] Automated job applications
- [ ] Resume customization
- [ ] Company research
- [ ] Salary analysis
- [ ] Networking integration

### Phase 4: Enhancement
- [ ] Machine learning for job matching
- [ ] Advanced analytics
- [ ] Mobile optimization
- [ ] API documentation
- [ ] User guides

## Next Steps
1. Design and implement database schema
2. Create resume upload functionality
3. Implement job preferences storage
4. Add basic job search integration
5. Set up application tracking system

## Future Considerations
- Web search integration
- Real-time notifications
- Mobile app development
- API rate limiting
- User authentication
- Data encryption
- Backup systems

## Data Models

### User
- Profile information
- Job preferences
- Resume/Cover letter templates
- Application history

### Job
- Job details
- Company information
- Requirements
- Salary range
- Application status

### Application
- Application date
- Status tracking
- Customized documents
- Communication history

### Interview
- Interview details
- Company research
- Preparation materials
- Feedback

## Questions to Address
- Which job search APIs to integrate first?
- How to handle resume parsing and customization?
- What's the best approach for cover letter generation?
- How to structure the notification system?
- What metrics should we track for success? 