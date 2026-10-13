import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      setStatusMessage('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-text">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Hello..." required></textarea>
          </div>
          
          {statusMessage && (
            <div 
              className={`form-status ${status}`} 
              aria-live="polite"
              style={{
                marginBottom: '15px', 
                color: status === 'success' ? '#10b981' : '#ef4444',
                fontWeight: '500'
              }}
            >
              {statusMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="btn submit-btn" 
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Say Hello'}
          </button>
        </form>

        <div className="contact-direct">
          <a href="mailto:pvnkulal45@gmail.com" className="primary-email" aria-label="Primary Email">pvnkulal45@gmail.com</a>
        </div>
        <div className="social-links">
          <a href="mailto:divakara11k@gmail.com" aria-label="Alternate Email">divakara11k@gmail.com</a>
          <a href="tel:7510774811" aria-label="Phone">7510774811</a>
          <a href="https://www.linkedin.com/in/pvnkumarp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/pvnkulal45-svg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
