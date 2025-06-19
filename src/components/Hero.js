import React, { useEffect, useState, forwardRef } from 'react';
import './Hero.css';

const Hero = forwardRef(({ heroOutOfView }, ref) => {
  const [scale, setScale] = useState(1);
  const prevScrollY = React.useRef(window.scrollY);

  useEffect(() => {
    const maxScale = 2.2;
    const minScale = 1;
    const scaleStep = 0.02; // How much to change per scroll event

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        setScale(1);
      } else if (scrollY > prevScrollY.current) {
        // Scrolling down
        setScale(prev => Math.min(prev + scaleStep, maxScale));
      } else if (scrollY < prevScrollY.current) {
        // Scrolling up
        setScale(prev => Math.max(prev - scaleStep, minScale));
      }
      prevScrollY.current = scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`hero-frame${heroOutOfView ? ' hero-out' : ''}`} ref={ref}>
      <div className="hero-block" style={{ transform: `scale(${scale})` }}>
        <div className="hero-word-row">
          <span className="hero-plain-isml">I</span>
          <span className="hero-gradient-text">NDIAN</span>
          
        </div>
        <div className="hero-word-row">
          <span className="hero-plain-isml">S</span>
          <span className="hero-gradient-text">CHOOL FOR</span>
        </div>
        <div className="hero-word-row">
          <span className="hero-plain-isml">M</span>
          <span className="hero-gradient-text">ODERN</span>
        </div>
        <div className="hero-word-row">
          <span className="hero-plain-isml">L</span>
          <span className="hero-gradient-text">ANGUAGES</span>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero; 