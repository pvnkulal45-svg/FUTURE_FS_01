import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="about section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="reveal-item" style={{ transitionDelay: '0.1s' }}>
            I’m Pavan Kumar P, a third-year B.E. student specializing in Artificial Intelligence and Machine Learning at Sahyadri College of Engineering and Management, Mangalore.
          </p>
          <p className="reveal-item" style={{ transitionDelay: '0.2s' }}>
            I’m interested in software development and enjoy building practical projects that help me understand and apply what I learn. I have worked on projects involving web development, databases, AI/ML, and event management.
          </p>
          <p className="reveal-item" style={{ transitionDelay: '0.3s' }}>
            My current technical interests include Python, C++, web development, React, SQL, Supabase, machine learning, PySpark, Power BI, Git, and GitHub. I’m continuously improving my problem-solving and development skills through projects and hands-on learning.
          </p>
          <p className="reveal-item" style={{ transitionDelay: '0.4s' }}>
            I believe in learning by building, experimenting with new technologies, and turning ideas into useful solutions.
          </p>
        </div>
        <div className="about-visual-wrapper reveal-item" style={{ transitionDelay: '0.5s' }}>
          <div className="aiml-visual">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="aiml-svg">
              {/* Central node / Brain */}
              <circle cx="100" cy="100" r="25" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
              <circle cx="100" cy="100" r="10" fill="var(--accent-color)" />
              
              {/* Outer nodes */}
              <circle cx="100" cy="30" r="8" fill="var(--nav-text)" />
              <circle cx="170" cy="100" r="8" fill="var(--nav-text)" />
              <circle cx="100" cy="170" r="8" fill="var(--nav-text)" />
              <circle cx="30" cy="100" r="8" fill="var(--nav-text)" />
              
              {/* Connecting lines */}
              <line x1="100" y1="40" x2="100" y2="75" stroke="var(--card-border-hover)" strokeWidth="2" strokeDasharray="4 4" className="anim-line"/>
              <line x1="100" y1="160" x2="100" y2="125" stroke="var(--card-border-hover)" strokeWidth="2" strokeDasharray="4 4" className="anim-line"/>
              <line x1="40" y1="100" x2="75" y2="100" stroke="var(--card-border-hover)" strokeWidth="2" strokeDasharray="4 4" className="anim-line"/>
              <line x1="160" y1="100" x2="125" y2="100" stroke="var(--card-border-hover)" strokeWidth="2" strokeDasharray="4 4" className="anim-line"/>

              {/* Additional diagonal nodes and lines */}
              <circle cx="50" cy="50" r="5" fill="var(--accent-color)" />
              <line x1="55" y1="55" x2="80" y2="80" stroke="var(--card-border)" strokeWidth="1.5" />
              
              <circle cx="150" cy="150" r="5" fill="var(--accent-color)" />
              <line x1="145" y1="145" x2="120" y2="120" stroke="var(--card-border)" strokeWidth="1.5" />
              
              <circle cx="150" cy="50" r="5" fill="var(--accent-color)" />
              <line x1="145" y1="55" x2="120" y2="80" stroke="var(--card-border)" strokeWidth="1.5" />
              
              <circle cx="50" cy="150" r="5" fill="var(--accent-color)" />
              <line x1="55" y1="145" x2="80" y2="120" stroke="var(--card-border)" strokeWidth="1.5" />
              
              {/* Data orbits */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.4" className="anim-orbit" />
              <circle cx="100" cy="100" r="85" fill="none" stroke="var(--nav-text)" strokeWidth="1" strokeOpacity="0.2" className="anim-orbit-reverse" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
