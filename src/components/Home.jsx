import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <p className="greeting stagger-1">Hi, my name is</p>
          <h1 className="name stagger-2">Pavan Kumar P</h1>
          <h2 className="headline stagger-3">Aspiring Software Developer | AIML Student</h2>
          <p className="bio-short stagger-4">
            I’m a third-year B.E. student specializing in Artificial Intelligence and Machine Learning, passionate about building practical software solutions and continuously improving my development skills.
          </p>
          <p className="personal-quote stagger-5">
            <span className="quote-mark">"</span>I turn what I learn into what I build.<span className="quote-mark">"</span>
          </p>
          <div className="home-cta stagger-6">
            <a href="#projects" className="btn home-btn">View My Work</a>
          </div>
        </div>
        <div className="home-profile stagger-2">
          <div className="profile-img-wrapper">
            <img src="/profile/pavan-kumar.jpeg" alt="Pavan Kumar P" className="profile-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <span>PKP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
