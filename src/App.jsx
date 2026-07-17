import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { education, navItems, personal, projectDetails, projects, skillGroups, strengths } from './data'

const Arrow = () => <span aria-hidden="true">↗</span>

function ButtonLink({ to, children, secondary = false, className = '' }) {
  return <Link className={`button ${secondary ? 'button-secondary' : ''} ${className}`} to={to}>{children}<Arrow /></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])
  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')
  return (
    <header className="site-header">
      <div className="nav-wrap shell">
        <Link className="logo" to="/" aria-label="Mostak Shahriar home"><span>MS</span><b>Mostak.</b></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
          <span className="sr-only">Toggle navigation</span><i></i><i></i>
        </button>
        <nav id="main-navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === 'dark'} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-label">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <Link className="nav-cta" to="/resume">View résumé <Arrow /></Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><Link className="logo footer-logo" to="/"><span>MS</span><b>Mostak.</b></Link><p>Building thoughtful digital experiences with modern web technologies.</p></div>
        <div><h3>Explore</h3>{navItems.slice(0, 5).map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div>
        <div><h3>Say hello</h3><a href={`mailto:${personal.email}`}>{personal.email}</a><p>{personal.location}</p></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Mostak Shahriar</span><a href="#top">Back to top ↑</a></div>
    </footer>
  )
}

function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const name = navItems.find(([, path]) => path === pathname)?.[0]
    const projectSlug = pathname.startsWith('/projects/') ? pathname.split('/projects/')[1] : null
    const projectName = projectSlug ? projects.find(project => project.id === projectSlug)?.title : null
    document.title = projectName ? `${projectName} | Mostak Shahriar` : `${name && name !== 'Home' ? `${name} | ` : ''}Mostak Shahriar${pathname === '/' ? ' | Frontend Developer' : ''}`
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined
    const elements = [...document.querySelectorAll('main section, .project-card')]
    elements.forEach(element => element.classList.add('reveal-on-scroll'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px' })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])
  return <><Header /><main id="top"><div className="page-stage" key={pathname}>{children}</div></main><Footer /></>
}

function SectionHead({ eyebrow, title, copy, action }) {
  return <div className="section-head"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>{action}</div>
}

function ProjectVisual({ project }) {
  return <div className={`project-visual ${project.accent}`}><span className="project-no">{project.number}</span><div className="mock-window"><i></i><i></i><i></i><div className="mock-sidebar"></div><div className="mock-chart"><b></b><b></b><b></b><b></b></div></div></div>
}

function ProjectCard({ project }) {
  return <article className="project-card" id={project.id}><ProjectVisual project={project}/><div className="project-body"><div className="card-meta"><span>{project.category}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><Link to={`/projects/${project.id}`} className="text-link" aria-label={`Read about ${project.title}`}>View case study <Arrow /></Link></div></article>
}

function Hero() {
  return <section className="hero shell"><div className="hero-copy"><div className="hero-kicker"><p className="availability"><i></i> Available for opportunities</p><span>Portfolio · 2026</span></div><h1>I design & build <em>thoughtful</em> digital experiences.</h1><p className="hero-lead">I’m <strong>Mostak Shahriar</strong>, a computer science student and frontend developer creating responsive, practical products with modern web technology.</p><div className="hero-actions"><ButtonLink to="/projects">Explore my work</ButtonLink><ButtonLink to="/contact" secondary>Let's talk</ButtonLink></div><div className="hero-social"><span>Find me online</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div><div className="hero-art" aria-label="Portrait of Mostak Shahriar"><div className="hero-spark spark-one">✦</div><div className="hero-spark spark-two">✦</div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="portrait"><img className="profile-photo hero-photo" src="/picture.png" alt="Mostak Shahriar in professional attire" fetchPriority="high" decoding="async"/><small>Dhaka<br/>Bangladesh</small></div><div className="floating-card code-card"><span>Currently building</span><b>with React.js</b></div><div className="floating-card cgpa-card"><b>3.90</b><span>Current CGPA</span></div><div className="tech-chip chip-one">JS</div><div className="tech-chip chip-two" aria-hidden="true">{'{ }'}</div></div></section>
}

function Stats() {
  return <section className="stats shell" aria-label="Portfolio statistics">{[['3.90', 'Academic CGPA'], ['6', 'Projects explored'], ['10+', 'Technologies'], ['2+', 'Years learning']].map(([value,label], i) => <div key={label}><span>0{i+1}</span><strong>{value}</strong><p>{label}</p></div>)}</section>
}

function Marquee() {
  const words = ['React', 'Responsive design', 'JavaScript', 'Creative development', 'MERN learning']
  return <div className="marquee" aria-label="Core capabilities"><div>{[...words, ...words].map((word, i) => <span key={`${word}-${i}`}>{word}<b>✦</b></span>)}</div></div>
}

function Home() {
  return <><Hero/><Stats/><Marquee/><section className="section shell"><SectionHead eyebrow="Selected work" title="Projects built around real problems." copy="A growing collection of product ideas where I explore interface design, frontend architecture, and practical problem-solving." action={<ButtonLink to="/projects" secondary>All projects</ButtonLink>}/><div className="projects-grid home-projects">{projects.slice(0,3).map(p => <ProjectCard project={p} key={p.id}/>)}</div></section><section className="section dark-section"><div className="shell"><SectionHead eyebrow="How I work" title="Solid foundations. Curious mindset."/><div className="skill-intro-grid"><div><p className="big-copy">I turn ideas into clear, responsive interfaces—then keep refining until every interaction earns its place.</p><ButtonLink to="/skills">Explore skills</ButtonLink></div><div className="skill-list">{skillGroups.slice(0,3).map((g,i) => <div key={g.title}><span>0{i+1}</span><h3>{g.title}</h3><p>{g.skills.slice(0,4).join(' · ')}</p><small>{g.note}</small></div>)}</div></div></div></section><section className="section shell"><SectionHead eyebrow="Academic journey" title="Learning in the classroom—and beyond."/><EducationTimeline compact/></section><CTA/></>
}

function PageHero({ eyebrow, title, copy }) {
  return <section className="page-hero shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></section>
}

function EducationTimeline({ compact = false }) {
  const list = compact ? education.slice(0,2) : education
  return <div className="timeline">{list.map((item,i) => <article key={item.institution}><span className="timeline-index">0{i+1}</span><div><p>{item.period}</p><h3>{item.institution}</h3><span>{item.degree}</span></div><strong>{item.result}</strong></article>)}</div>
}

function CTA() {
  return <section className="cta shell"><div><p className="eyebrow">Start a conversation</p><h2>Have an opportunity<br/>or idea in mind?</h2></div><div><p>I’m always interested in internships, practical projects, and conversations with people who care about thoughtful products.</p><ButtonLink to="/contact">Let’s work together</ButtonLink></div></section>
}

function About() {
  return <><PageHero eyebrow="About me" title={<>Curious by nature.<br/><em>Driven</em> by progress.</>} copy="I’m a computer science student who enjoys making complex ideas feel simple, useful, and human."/><section className="section shell about-grid"><div className="about-portrait"><img className="profile-photo about-photo" src="/picture.png" alt="Mostak Shahriar" loading="lazy" decoding="async"/><div className="photo-badge"><b>Mostak Shahriar</b><span>Frontend developer</span></div><span>Based in Dhaka<br/>Working worldwide</span></div><div className="about-copy"><p className="lead-quote">I believe good software begins with understanding people—not just technology.</p><p>I am Mostak Shahriar, a third-year university student based in Dhaka. My focus is frontend development and the modern JavaScript ecosystem, with a long-term goal of becoming a skilled full-stack software engineer.</p><p>I enjoy creating structured, responsive, and user-focused interfaces. Every project is a chance to sharpen my programming, collaborate better, and turn practical problems into clear digital experiences.</p><div className="personal-facts"><div><span>Location</span><b>{personal.location}</b></div><div><span>Preferred role</span><b>Junior Frontend Developer</b></div><div><span>Languages</span><b>Bangla · English</b></div><div><span>Availability</span><b>Open to opportunities</b></div></div></div></section><section className="section tinted-section"><div className="shell"><SectionHead eyebrow="Education" title="A strong academic foundation."/><EducationTimeline/></div></section><section className="section shell"><SectionHead eyebrow="What I bring" title="The person behind the code."/><div className="strength-grid">{strengths.map((item,i)=><div key={item}><span>0{i+1}</span><h3>{item}</h3></div>)}</div></section><CTA/></>
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  return <><PageHero eyebrow="Project archive" title={<>Ideas, interfaces &<br/><em>learning</em> in motion.</>} copy="Concepts and builds that document my growth in responsive design, React, and product thinking."/><section className="section shell"><div className="filters" aria-label="Filter projects">{categories.map(category => <button className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div><div className="projects-grid all-projects">{visible.map(p => <ProjectCard project={p} key={p.id}/>)}</div><p className="disclosure">These are portfolio concept projects. Live demos and source repositories will be linked as each implementation is completed.</p></section><CTA/></>
}

function ProjectAction({ href, children, secondary = false }) {
  if (!href) return <span className={`button project-action unavailable ${secondary ? 'button-secondary' : ''}`} aria-disabled="true">{children}<small>Coming soon</small></span>
  return <a className={`button project-action ${secondary ? 'button-secondary' : ''}`} href={href} target="_blank" rel="noreferrer">{children}<Arrow /></a>
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)
  if (!project) return <NotFound />
  const details = projectDetails[id]
  const projectIndex = projects.findIndex(item => item.id === id)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  return <>
    <section className={`case-hero shell ${project.accent}`}>
      <div className="case-hero-copy">
        <Link className="case-back" to="/projects">← All projects</Link>
        <div className="case-kicker"><span>{project.category}</span><span>{details.year}</span><span>{project.status}</span></div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="case-actions"><ProjectAction href={details.liveUrl}>Live preview</ProjectAction><ProjectAction href={details.githubUrl} secondary>GitHub repository</ProjectAction></div>
      </div>
      <div className="case-hero-art"><ProjectVisual project={project}/></div>
    </section>

    <section className="section shell case-layout">
      <article className="case-content">
        <div className="case-intro"><p className="eyebrow">Project overview</p><h2>{project.description}</h2></div>
        <div className="case-duo"><CaseBlock number="01" title="The problem" text={details.problem}/><CaseBlock number="02" title="The solution" text={details.solution}/></div>
        <div className="case-section"><p className="eyebrow">Core experience</p><h2>Key features</h2><div className="feature-grid">{details.features.map((feature,index) => <div key={feature}><span>0{index + 1}</span><h3>{feature}</h3></div>)}</div></div>
        <div className="case-learning"><CaseBlock number="03" title="Main challenge" text={details.challenges}/><CaseBlock number="04" title="What I learned" text={details.learning}/><CaseBlock number="05" title="Future improvements" text={details.future}/></div>
      </article>
      <aside className="case-sidebar">
        <h3>Project details</h3>
        <dl><dt>Year</dt><dd>{details.year}</dd><dt>Role</dt><dd>{details.role}</dd><dt>Duration</dt><dd>{details.duration}</dd><dt>Project type</dt><dd>{details.type}</dd><dt>Status</dt><dd>{project.status}</dd></dl>
        <h3>Technologies</h3><div className="case-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <p className="case-link-note">Add the real live and GitHub URLs in <code>src/data.js</code> to activate the buttons.</p>
      </aside>
    </section>

    <Link className="next-project shell" to={`/projects/${nextProject.id}`}><span>Next case study</span><h2>{nextProject.title}</h2><b><Arrow /></b></Link>
  </>
}

function CaseBlock({ number, title, text }) {
  return <section className="case-block"><span>{number}</span><h3>{title}</h3><p>{text}</p></section>
}

function Skills() {
  return <><PageHero eyebrow="Capabilities" title={<>Skills I’m building,<br/><em>honestly</em> presented.</>} copy="A practical view of the technologies I use, the foundations I understand, and the areas I’m actively learning."/><section className="section shell skills-page">{skillGroups.map((group,i)=><article key={group.title}><div className="skill-group-head"><span>0{i+1}</span><div><h2>{group.title}</h2><p>{group.note}</p></div></div><div className="skill-pills">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</section><section className="section dark-section"><div className="shell learning-grid"><div><p className="eyebrow">Learning now</p><h2>Progress is the project.</h2></div><div className="learning-steps"><div><span>Now</span><h3>React state & application architecture</h3></div><div><span>Recently</span><h3>Responsive design fundamentals</h3></div><div><span>Next</span><h3>A complete MERN application</h3></div></div></div></section><CTA/></>
}

function Resume() {
  return <><PageHero eyebrow="Résumé" title={<>The short version<br/>of my <em>journey.</em></>} copy="A recruiter-friendly overview of my education, capabilities, and current professional direction."/><section className="section shell resume-layout"><aside className="resume-aside"><div className="resume-photo-wrap"><img className="profile-photo resume-photo" src="/picture.png" alt="Mostak Shahriar" loading="lazy" decoding="async"/></div><h2>{personal.name}</h2><p>{personal.role}</p><dl><dt>Location</dt><dd>{personal.location}</dd><dt>Email</dt><dd>{personal.email}</dd><dt>Availability</dt><dd>Internships & junior roles</dd></dl><button className="button" onClick={() => window.print()}>Print / save PDF <Arrow /></button><small>Contact details are placeholders until publishing.</small></aside><div className="resume-content"><ResumeSection no="01" title="Profile"><p>Motivated computer science student and aspiring MERN Stack Developer with a strong academic background and practical experience creating responsive web interfaces. Interested in frontend development, software engineering, and continuous technical learning.</p></ResumeSection><ResumeSection no="02" title="Education"><EducationTimeline/></ResumeSection><ResumeSection no="03" title="Technical skills">{skillGroups.map(g=><div className="resume-skill" key={g.title}><b>{g.title}</b><span>{g.skills.join(' · ')}</span></div>)}</ResumeSection><ResumeSection no="04" title="Selected projects">{projects.slice(0,3).map(p=><div className="resume-project" key={p.id}><h3>{p.title}</h3><p>{p.summary}</p><span>{p.stack.join(' · ')}</span></div>)}</ResumeSection></div></section></>
}

function ResumeSection({ no, title, children }) { return <section className="resume-section"><header><span>{no}</span><h2>{title}</h2></header><div>{children}</div></section> }

function Contact() {
  const [sent, setSent] = useState(false)
  function submit(e) { e.preventDefault(); setSent(true); e.currentTarget.reset() }
  return <><PageHero eyebrow="Contact" title={<>Let’s make something<br/><em>worthwhile.</em></>} copy="Have an internship, collaboration, or frontend project in mind? I’d be glad to hear about it."/><section className="section shell contact-grid"><div className="contact-info"><h2>Start a conversation.</h2><p>{personal.availability}</p><div className="contact-lines"><div><span>Email</span><a href={`mailto:${personal.email}`}>{personal.email}</a></div><div><span>Location</span><b>{personal.location}</b></div><div><span>Online</span><p><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a> <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></p></div></div><div className="availability-card"><i></i><div><b>Available for opportunities</b><span>Usually replies within 1–2 working days</span></div></div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Full name<input name="name" required placeholder="Your name"/></label><label>Email address<input name="email" required type="email" placeholder="you@example.com"/></label></div><label>Subject<input name="subject" required placeholder="What would you like to discuss?"/></label><label>Message<textarea name="message" required rows="6" placeholder="Tell me a little about the opportunity or idea…"></textarea></label><button className="button" type="submit">Send message <Arrow /></button>{sent && <p className="form-success" role="status">Thanks — this demo form works on the frontend only. Please email me directly to send the message.</p>}<small>This form is a frontend demo and does not store or transmit your message.</small></form></section></>
}

function NotFound() { return <section className="not-found shell"><p className="eyebrow">404</p><h1>That page wandered off.</h1><ButtonLink to="/">Return home</ButtonLink></section> }

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:id" element={<ProjectDetail/>}/><Route path="/resume" element={<Resume/>}/><Route path="/skills" element={<Skills/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>
}
