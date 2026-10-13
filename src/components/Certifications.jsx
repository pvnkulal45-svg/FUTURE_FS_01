import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Certifications.css';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const revealRef = useScrollReveal();

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Matches the CSS animation duration
  };

  const certifications = [
    {
      name: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      date: 'September 4, 2026',
      image: '/cert/ethical-hacker.png'
    },
    {
      name: 'Database and SQL',
      issuer: 'Infosys Springboard',
      image: '/cert/database-sql.png'
    },
    {
      name: 'Java Essentials',
      issuer: 'Infosys Springboard',
      image: '/cert/java-essentials.png'
    }
  ];

  return (
    <section id="certifications" className="certifications section reveal-wrapper" ref={revealRef}>
      <h2 className="section-title reveal-item">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card reveal-item" style={{ transitionDelay: `${index * 0.15}s` }}>
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            {cert.date && <p className="cert-date">{cert.date}</p>}
            <button 
              className="btn btn-outline cert-view-btn"
              onClick={() => setSelectedImage(cert.image)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={`cert-modal ${isClosing ? 'closing' : ''}`} onClick={handleCloseModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Certificate Preview" className="cert-modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
