export const personal = {
  name: 'Mostak Shahriar',
  shortName: 'Mostak',
  role: 'Frontend Developer & Aspiring MERN Stack Developer',
  location: 'Dhaka, Bangladesh',
  email: 'mostakshahriar6446@gmail.com',
  bio: 'A third-year computer science student focused on building clean, responsive, and user-friendly products with React and JavaScript.',
  availability: 'Open to internships, collaborative projects, and junior frontend opportunities.',
}

export const projects = [
  {
    id: 'student-management',
    title: 'Student Management System',
    category: 'Academic',
    summary: 'A focused dashboard for student records, attendance, results, and administrative workflows.',
    description: 'Designed to turn scattered academic records into a clear, searchable workspace for educators and administrators.',
    stack: ['React', 'JavaScript', 'CSS'],
    accent: 'emerald',
    number: '01',
    status: 'Concept project',
  },
  {
    id: 'learning-platform',
    title: 'Online Learning Platform',
    category: 'Frontend',
    summary: 'A responsive course experience with lessons, progress tracking, and an accessible learning flow.',
    description: 'A student-first interface that makes course discovery, lesson navigation, and progress easy to understand.',
    stack: ['React', 'REST API', 'Responsive UI'],
    accent: 'blue',
    number: '02',
    status: 'Concept project',
  },
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    category: 'Personal',
    summary: 'A calm finance dashboard for daily expenses, categories, and useful monthly summaries.',
    description: 'Built around a simple goal: make personal spending patterns visible without making finance feel complicated.',
    stack: ['JavaScript', 'Charts', 'Local Storage'],
    accent: 'amber',
    number: '03',
    status: 'Concept project',
  },
  {
    id: 'event-portal',
    title: 'University Event Portal',
    category: 'Academic',
    summary: 'One place for university events, schedules, registration, and important announcements.',
    description: 'A structured event hub that helps students discover opportunities and organizers communicate clearly.',
    stack: ['React', 'Vite', 'CSS'],
    accent: 'violet',
    number: '04',
    status: 'Concept project',
  },
  {
    id: 'commerce',
    title: 'Modern Commerce',
    category: 'Frontend',
    summary: 'A product browsing and cart experience built for speed, clarity, and mobile shopping.',
    description: 'Explores responsive product discovery, filtering, cart state, and a frictionless checkout interface.',
    stack: ['React', 'State Management', 'API'],
    accent: 'rose',
    number: '05',
    status: 'Concept project',
  },
  {
    id: 'task-dashboard',
    title: 'Task Management Dashboard',
    category: 'Personal',
    summary: 'A practical workspace for priorities, deadlines, and visible project momentum.',
    description: 'A productivity UI that keeps responsibilities clear and gives teams a shared view of progress.',
    stack: ['React', 'Drag & Drop', 'CSS'],
    accent: 'cyan',
    number: '06',
    status: 'Concept project',
  },
]

export const projectDetails = {
  'student-management': {
    year: '2026', role: 'Frontend developer', duration: '4 weeks', type: 'Individual concept', liveUrl: null, githubUrl: null,
    problem: 'Academic records, attendance, and results are often spread across disconnected files, making routine administration slow and error-prone.',
    solution: 'A single dashboard that organizes student information into clear workflows, searchable records, and useful academic summaries.',
    features: ['Student record management', 'Attendance overview', 'Result and grade tracking', 'Search and filtering', 'Role-focused dashboard', 'Responsive data tables'],
    challenges: 'Presenting dense academic data without overwhelming the user, especially on smaller screens.',
    learning: 'How to structure dashboard interfaces, prioritize information, and design reusable data-display components.',
    future: 'Connect a secure backend, add role-based access, exportable reports, notifications, and real-time analytics.',
  },
  'learning-platform': {
    year: '2026', role: 'UI & frontend developer', duration: '5 weeks', type: 'Individual concept', liveUrl: null, githubUrl: null,
    problem: 'Students can lose momentum when course navigation, lesson progress, and learning resources are fragmented or difficult to understand.',
    solution: 'A calm, accessible learning interface that keeps courses, lessons, and progress visible within one consistent experience.',
    features: ['Course discovery', 'Lesson player layout', 'Progress tracking', 'Saved courses', 'Responsive navigation', 'Accessible learning flow'],
    challenges: 'Balancing rich course information with a focused lesson experience across desktop and mobile devices.',
    learning: 'Component composition, content hierarchy, progress visualization, and accessible navigation patterns.',
    future: 'Add authentication, instructor tools, assessments, certificates, comments, and a real course API.',
  },
  'expense-tracker': {
    year: '2026', role: 'Frontend developer', duration: '3 weeks', type: 'Personal concept', liveUrl: null, githubUrl: null,
    problem: 'Daily spending is easy to forget, while many finance tools make simple personal tracking feel unnecessarily complicated.',
    solution: 'A friendly finance dashboard that makes expenses quick to record and monthly spending patterns easy to recognize.',
    features: ['Quick expense entry', 'Category management', 'Monthly summaries', 'Spending charts', 'Budget indicators', 'Local data persistence'],
    challenges: 'Transforming raw transaction data into visuals that are useful without becoming visually noisy.',
    learning: 'Form state, data aggregation, chart presentation, local persistence, and empty-state design.',
    future: 'Add cloud sync, recurring transactions, CSV export, shared budgets, and intelligent spending insights.',
  },
  'event-portal': {
    year: '2026', role: 'Frontend developer', duration: '4 weeks', type: 'Academic concept', liveUrl: null, githubUrl: null,
    problem: 'University events and announcements are frequently scattered across groups and notice boards, so students miss useful opportunities.',
    solution: 'A structured event hub for discovering activities, viewing schedules, registering, and following important updates.',
    features: ['Event discovery', 'Category filtering', 'Registration flow', 'Calendar view', 'Announcements', 'Organizer profiles'],
    challenges: 'Keeping a large event catalogue discoverable while making urgent announcements immediately visible.',
    learning: 'Filtering patterns, date-based interfaces, event cards, registration forms, and information architecture.',
    future: 'Add organizer accounts, QR attendance, reminders, approval workflows, and university calendar integration.',
  },
  commerce: {
    year: '2026', role: 'Frontend developer', duration: '6 weeks', type: 'Individual concept', liveUrl: null, githubUrl: null,
    problem: 'Busy product pages and confusing checkout steps create friction, particularly for shoppers using mobile devices.',
    solution: 'A fast commerce interface focused on confident product discovery, clear cart feedback, and a short checkout journey.',
    features: ['Product catalogue', 'Search and filters', 'Product details', 'Persistent cart', 'Checkout flow', 'Mobile-first layout'],
    challenges: 'Maintaining predictable state between catalogue, product, cart, and checkout views.',
    learning: 'Application state, product filtering, reusable commerce components, and conversion-focused interface decisions.',
    future: 'Integrate payments, inventory, customer accounts, recommendations, order history, and a commerce API.',
  },
  'task-dashboard': {
    year: '2026', role: 'Product & frontend developer', duration: '4 weeks', type: 'Personal concept', liveUrl: null, githubUrl: null,
    problem: 'Tasks become difficult to prioritize when deadlines, ownership, and project progress live in separate tools or informal messages.',
    solution: 'A flexible workspace that brings tasks, priorities, deadlines, and progress into one shared visual system.',
    features: ['Kanban workflow', 'Priority labels', 'Due dates', 'Project progress', 'Task filtering', 'Responsive workspace'],
    challenges: 'Making drag-and-drop interactions usable while preserving clear keyboard and mobile alternatives.',
    learning: 'Complex state updates, interaction feedback, responsive workspaces, and productivity-focused UX.',
    future: 'Add team workspaces, comments, file attachments, activity history, notifications, and real-time collaboration.',
  },
}

export const skillGroups = [
  { title: 'Frontend', note: 'Comfortable', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Component Architecture'] },
  { title: 'Backend foundations', note: 'Learning', skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication Concepts'] },
  { title: 'Data & programming', note: 'Familiar', skills: ['MongoDB', 'CRUD', 'C', 'C++', 'Java', 'Python'] },
  { title: 'Tools', note: 'Daily workflow', skills: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code', 'Postman', 'Figma'] },
]

export const education = [
  { period: '2022 — Present', institution: 'IUBAT, Dhaka', degree: 'Computer Science & Engineering', result: 'CGPA 3.90 / 4.00', current: true },
  { period: '2019 — 2021', institution: 'Shahid Buddhijibi Government College', degree: 'Higher Secondary Certificate', result: 'GPA 5.00 / 5.00' },
  { period: '2017 — 2019', institution: 'Damnash Pardamnash High School', degree: 'Secondary School Certificate', result: 'GPA 5.00 / 5.00' },
]

export const strengths = ['Fast learner', 'Problem solver', 'Reliable teammate', 'Detail-oriented', 'Consistent practice', 'Clear communicator']

export const navItems = [
  ['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Resume', '/resume'], ['Skills', '/skills'], ['Contact', '/contact'],
]
