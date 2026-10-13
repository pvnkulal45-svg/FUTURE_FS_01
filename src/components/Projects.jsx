import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const revealRef = useScrollReveal();

  const projects = [
    {
      title: 'Artisan Connect AI',
      category: 'AI / Full Stack',
      description: 'AI-powered marketplace designed to help local and marginalized artisans sell their handmade products online with less technical effort.',
      tech: ['React', 'Vite', 'JavaScript/JSX', 'Supabase', 'Google Gemini'],
      features: [
        'AI-powered product image analysis',
        'AI-assisted product title and description generation',
        'Voice transcription',
        'Pricing assistance',
        'Supabase Authentication and Storage',
        'Supabase Edge Functions',
        'Row Level Security'
      ],
      github: '[YOUR GITHUB LINK]',
      live: '[LIVE DEMO LINK]'
    },
    {
      title: 'EventPulse',
      category: 'Full Stack Web Application',
      description: 'College event management and participation tracking platform for students, organizers, and administrators.',
      tech: ['React', 'Vite', 'JavaScript/JSX', 'Supabase', 'Tailwind CSS', 'Vercel'],
      features: [
        'Role-based Access Control (Admin, Student, Coordinator)',
        'Event Dashboard & Real-Time Statistics',
        'Automated QR Code Generation & Scanning for Attendance',
        'Centralized Event Creation and Reporting',
        'Google & Magic Link Authentication'
      ],
      github: '[YOUR GITHUB LINK]',
      live: '[LIVE DEMO LINK]'
    },
    {
      title: 'LearnFlow',
      category: 'AI-Powered Study Assistant',
      description: 'An AI-powered study assistant that helps students prepare for exams by transforming uploaded study materials into concise summaries, practice quizzes, answers, and explanations. It uses React.js for the frontend and Python with Flask for backend processing, including PDF text extraction and AI-assisted content generation. Students can practice questions, review concepts, and monitor their learning progress through performance statistics and graphs, making exam preparation more organized and efficient.',
      tech: ['React.js', 'JavaScript', 'Python', 'Flask', 'SQLite'],
      github: '[YOUR GITHUB LINK]',
      live: '[LIVE DEMO LINK]'
    }
  ];

  return (
    <section id="projects" className="projects section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card reveal-item" style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="project-content">
              <div className="project-top">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              <h4 className="project-category">{project.category}</h4>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
                {project.features && (
                  <ul className="project-feature-list">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
