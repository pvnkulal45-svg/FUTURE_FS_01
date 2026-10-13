import { useMemo } from 'react';
import './Background.css';

const Background = () => {
  // Generate deterministic particles based on index to keep the component pure
  const particles = useMemo(() => {
    const random = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 30 }).map((_, i) => {
      const left = `${random(i + 1) * 100}%`;
      const animationDuration = `${random(i + 2) * 20 + 20}s`;
      const animationDelay = `-${random(i + 3) * 20}s`;
      const opacity = random(i + 4) * 0.5 + 0.1;
      
      return (
        <div 
          key={i} 
          className="particle" 
          style={{
            left,
            animationDuration,
            animationDelay,
            opacity
          }}
        />
      );
    });
  }, []);

  const streaks = useMemo(() => {
    const random = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 6 }).map((_, i) => {
      const top = `${random(i + 10) * 100}%`;
      const width = `${random(i + 11) * 200 + 100}px`;
      const animationDuration = `${random(i + 12) * 15 + 10}s`;
      const animationDelay = `-${random(i + 13) * 10}s`;
      
      return (
        <div 
          key={`streak-${i}`} 
          className="streak" 
          style={{
            top,
            width,
            animationDuration,
            animationDelay
          }}
        />
      );
    });
  }, []);

  return (
    <div className="bg-container">
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>
      
      <div className="bg-streaks">
        {streaks}
      </div>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      
      <div className="bg-hero-glow"></div>
      
      <div className="bg-particles">
        {particles}
      </div>
    </div>
  );
};

export default Background;
