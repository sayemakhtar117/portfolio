export const skills = [
  { key: 'languages', value: 'Java, SQL' },
  { key: 'frameworks', value: 'Spring Boot, Microservices, REST APIs, Serverless Applications' },
  { key: 'databases', value: 'MongoDB, MySQL' },
  { key: 'tools', value: 'Git, GitLab, GitHub, Jenkins, Jira' },
  { key: 'methodologies', value: 'Agile, Scrum, SDLC' },
  { key: 'ai_automation', value: 'Custom AI agents, workflow automation' },
]

export const experience = [
  {
    role: 'Senior Software Developer',
    company: 'Infosys Limited',
    location: 'Chandigarh',
    period: '2024 — 2026',
    status: 'current',
    points: [
      'Developed and maintained enterprise-grade applications using Java, Spring Boot, and Microservices architecture.',
      'Designed and implemented scalable RESTful APIs for high-traffic business applications.',
      'Contributed to the migration of Tractor Supply cart and checkout systems from WCS to the Equinox platform.',
      'Prepared technical design documentation for wishlists, user lookup, and messaging queue modules.',
      'Built AI-driven automation solutions tailored to client business requirements.',
      'Provided production support, issue troubleshooting, and performance optimisation for enterprise systems.',
      'Collaborated with cross-functional teams in Agile environments to ensure timely delivery of high-quality software.',
    ],
  },
  {
    role: 'System Engineer',
    company: 'Infosys Limited',
    location: 'Chandigarh',
    period: '2022 — 2024',
    status: 'complete',
    points: [
      'Developed and supported internal business applications using Java and backend technologies.',
      'Optimised SQL queries, improving application response time and database performance.',
      'Worked on serverless applications to improve scalability and reduce operational overhead.',
      'Assisted in application migration, maintenance, deployment, and production support activities.',
      'Collaborated with development and QA teams for smooth feature delivery and issue resolution.',
      'Contributed to debugging, performance tuning, and enhancement of existing applications.',
    ],
  },
]

export const certifications = [
  { title: 'MongoDB SI Associate Certification', sub: 'MongoDB' },
  { title: 'Infosys Certified Spring Associate', sub: 'Infosys' },
  { title: 'Infosys Certified Spring Microservices Developer', sub: 'Infosys' },
]

export const strengths = [
  'Problem Solving',
  'Team Collaboration',
  'Effective Communication',
  'Adaptability',
  'Analytical Thinking',
  'Quick Learning',
]

export const profileJsonLines = [
  { type: 'brace', value: '{', indent: 0 },
  { key: 'status', type: 'raw', value: '200 OK', indent: 1, comma: true },
  { key: 'name', type: 'string', value: 'Sayem Akhtar', indent: 1, comma: true },
  { key: 'title', type: 'string', value: 'Senior Software Developer', indent: 1, comma: true },
  { key: 'experience_years', type: 'number', value: 4, indent: 1, comma: true },
  { key: 'stack', type: 'array', value: ['Java', 'Spring Boot', 'Microservices'], indent: 1, comma: true },
  { key: 'location', type: 'string', value: 'Chandigarh, India', indent: 1, comma: false },
  { type: 'brace', value: '}', indent: 0 },
]
