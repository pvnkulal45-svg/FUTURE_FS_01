import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-name">Pavan Kumar P</h3>
        <p className="footer-headline">Aspiring Software Developer | AIML Student</p>
        
        <div className="footer-links">
          <a href="mailto:pvnkulal45@gmail.com" aria-label="Email">Email</a>
          <a href="https://www.linkedin.com/in/pvnkumarp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/pvnkulal45-svg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </div>

        <p className="copyright">
          &copy; 2026 Pavan Kumar P. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
