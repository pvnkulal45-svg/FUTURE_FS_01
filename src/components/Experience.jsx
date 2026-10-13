import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

const Experience = () => {
  const revealRef = useScrollReveal();

  const experiences = [
    {
      role: 'Hackathon Participant',
      organization: 'Smart India Hackathon 2026 (SIH 2K26)',
      type: 'Hackathon',
      description:
        'Participated in Smart India Hackathon 2026, gaining valuable experience in collaborative problem-solving, innovative thinking, and project development. The experience helped me explore real-world challenges, investigate AI-based solutions, and work toward practical technology-driven applications. Through this journey, I developed my teamwork, communication, analytical thinking, technical research, and project-planning skills while learning the importance of innovation and time management.',
      skills: [
        'Problem-solving and innovative thinking',
        'AI-based solution exploration',
        'Teamwork and collaboration',
        'Technical research and project planning',
        'Communication and presentation',
        'Applying technology to real-world challenges'
      ]
    },
    {
      role: 'Hackathon Participant',
      organization: 'Versathon',
      type: 'Hackathon',
      description:
        'Participated in Versathon, gaining practical experience in innovation, teamwork, and technology-driven problem-solving. The event provided an opportunity to explore ideas, collaborate with team members, and develop practical approaches to real-world challenges. Through this experience, I strengthened my technical thinking, research, communication, and project-development skills while learning to plan and work effectively under time constraints.',
      skills: [
        'Innovative thinking and problem-solving',
        'Teamwork and collaboration',
        'Technical research and development',
        'Project planning and execution',
        'Communication and presentation',
        'Developing technology-driven solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">Experience</h2>
      <p className="experience-subtitle reveal-item">
        Building practical skills through hackathons, teamwork, and innovation.
      </p>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item reveal-item"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="experience-marker"></div>
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="role">{exp.role}</h3>
                  <h4 className="organization">
                    <span className="org-at">@ </span>
                    <span className="org-name">{exp.organization}</span>
                  </h4>
                </div>
                <span className="experience-badge">{exp.type}</span>
              </div>
              <p className="experience-desc">{exp.description}</p>
              <div className="experience-skills-section">
                <h5 className="skills-heading">Key Skills & Learnings</h5>
                <ul className="skills-tags">
                  {exp.skills.map((skill, i) => (
                    <li key={i} className="skill-tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
