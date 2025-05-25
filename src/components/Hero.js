import React, { useEffect, useState, forwardRef } from 'react';
import './Hero.css';

const Hero = forwardRef(({ heroOutOfView }, ref) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;
      const newScale = 1 + Math.min(scrollY / maxScroll, 1) * 1.2;
      setScale(newScale);
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