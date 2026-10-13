import useScrollReveal from '../hooks/useScrollReveal';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaBrain, FaRobot, FaFigma, FaGitAlt, FaGithub, FaChartBar } from 'react-icons/fa';
import { SiC, SiCplusplus, SiSupabase, SiApachespark } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const revealRef = useScrollReveal();

  const skills = [
    { 
      category: 'Programming', 
      items: [
        { name: 'Python', icon: <FaPython aria-label="Python icon" /> },
        { name: 'C', icon: <SiC aria-label="C icon" /> },
        { name: 'C++ (Currently Learning)', icon: <SiCplusplus aria-label="C++ icon" /> }
      ] 
    },
    { 
      category: 'Web', 
      items: [
        { name: 'HTML', icon: <FaHtml5 aria-label="HTML icon" /> },
        { name: 'CSS', icon: <FaCss3Alt aria-label="CSS icon" /> },
        { name: 'JavaScript', icon: <FaJs aria-label="JavaScript icon" /> },
        { name: 'React', icon: <FaReact aria-label="React icon" /> }
      ] 
    },
    { 
      category: 'Database', 
      items: [
        { name: 'SQL', icon: <FaDatabase aria-label="SQL icon" /> },
        { name: 'Supabase', icon: <SiSupabase aria-label="Supabase icon" /> }
      ] 
    },
    { 
      category: 'AI/Data', 
      items: [
        { name: 'Machine Learning', icon: <FaBrain aria-label="Machine Learning icon" /> },
        { name: 'AI/ML', icon: <FaRobot aria-label="AI/ML icon" /> },
        { name: 'PySpark', icon: <SiApachespark aria-label="PySpark icon" /> }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Figma', icon: <FaFigma aria-label="Figma icon" /> },
        { name: 'Power BI', icon: <FaChartBar aria-label="Power BI icon" /> },
        { name: 'Git', icon: <FaGitAlt aria-label="Git icon" /> },
        { name: 'GitHub', icon: <FaGithub aria-label="GitHub icon" /> }
      ] 
    }
  ];

  return (
    <section id="skills" className="skills section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card reveal-item" style={{ transitionDelay: `${index * 0.1}s` }}>
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-grid">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-badge">
                  <div className="skill-icon">{item.icon}</div>
                  <span className="skill-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
