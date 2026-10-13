import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const Education = () => {
  const revealRef = useScrollReveal();

  const educationList = [
    {
      degree: 'B.E. in Artificial Intelligence and Machine Learning (AIML)',
      institution: 'Sahyadri College of Engineering and Management, Adyar, Mangalore',
      date: '3rd Year | Expected Graduation: 2028',
      details: 'Current CGPA: 8.37',
      image: '/education/college.png',
      alt: 'Sahyadri College of Engineering and Management'
    },
    {
      degree: '10th / SSLC',
      institution: 'Shree Gurudeva Vidhyapeeta, Odiyoor',
      date: 'Passed Out: 2022',
      details: 'Score: 590 / 600',
      image: '/education/school.png',
      alt: 'Shree Gurudeva Vidhyapeeta School'
    }
  ];

  return (
    <section id="education" className="education section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">Education</h2>
      <div className="education-timeline">
        {educationList.map((edu, index) => (
          <div key={index} className="education-item reveal-item" style={{ transitionDelay: `${index * 0.2}s` }}>
            <div className="education-marker"></div>
            <div className="education-card">
              <div className="education-image-container">
                <img src={edu.image} alt={edu.alt} className="education-image" />
              </div>
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <span className="date">{edu.date}</span>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
