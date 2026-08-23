import ProfileCard from '../components/ProfileCard';
import ContactForm from '../components/ContactForm';

const skills = [
  ['01', '.NET / C# services'],
  ['02', 'Confluent Kafka & event streaming'],
  ['03', 'SQL database design'],
  ['04', 'System architecture & reliability'],
];

const tools = ['Visual Studio / VS Code', 'GitHub', 'Docker', 'Postman / SQL Server'];

const projects = [
  {
    number: '01',
    title: 'Distributed Event Pipeline',
    description: 'A Kafka-based messaging system using Confluent tools for reliable event delivery and service orchestration.',
    tags: ['Kafka', 'Event-driven', 'Reliability'],
  },
  {
    number: '02',
    title: '.NET Microservice API',
    description: 'A scalable backend service built with .NET, secure authentication, and SQL-backed persistence.',
    tags: ['.NET', 'API', 'SQL'],
  },
  {
    number: '03',
    title: 'System Design Blueprint',
    description: 'An architecture proposal for high-availability systems with fault tolerance and efficient data flow.',
    tags: ['Architecture', 'Scale', 'Systems'],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Zen home">Z<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-availability" href="mailto:leezexuan4@gmail.com"><span /> Available for work</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Full stack developer / remote</p>
            <h1>Systems that<br /><em>stay curious.</em></h1>
            <p className="hero-lede">I design resilient systems with .NET, Kafka, SQL, and strong architecture.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-visual"><ProfileCard /></div>
          <div className="hero-index" aria-hidden="true"><span>SCROLL TO DISCOVER</span><i /></div>
        </section>

        <section className="section intro" id="about">
          <div className="section-label"><span>01</span><span>About / Approach</span></div>
          <div className="intro-content">
            <h2>Good software is<br /><em>quietly dependable.</em></h2>
            <p>I am a fullstack developer who builds robust APIs, distributed messaging pipelines, and data-driven applications. My focus is on scalable architecture, reliable integrations, and clean system design.</p>
          </div>
          <div className="about-grid">
            <div className="list-block"><h3>Core skills</h3>{skills.map(([number, skill]) => <div className="list-row" key={skill}><span>{number}</span><strong>{skill}</strong></div>)}</div>
            <div className="list-block"><h3>Tools I reach for</h3>{tools.map((tool, index) => <div className="list-row" key={tool}><span>{String(index + 1).padStart(2, '0')}</span><strong>{tool}</strong></div>)}</div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="section-heading"><h2>Built for the<br /><em>interesting problems.</em></h2><p>Selected backend systems and integrations that demonstrate reliability and scale.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><span className="project-arrow" aria-hidden="true">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-label"><span>03</span><span>Get in touch</span></div>
          <div className="contact-grid"><div className="contact-copy"><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Interested in working together? Send a message and let&apos;s build something great.</p><div className="contact-details"><a href="mailto:leezexuan4@gmail.com">leezexuan4@gmail.com <span>↗</span></a><span>Remote / worldwide</span></div></div><ContactForm /></div>
        </section>
      </main>

      <footer className="footer"><a className="wordmark" href="#home">Z<span>.</span></a><p>© 2026 Zen Developer</p><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
