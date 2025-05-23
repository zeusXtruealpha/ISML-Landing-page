import React from 'react';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';
import './QuoteFrame.css';
import LanguagesOffered from './LanguagesOffered';
import FAQ from './FAQ';
import LanguagePhysicsCanvas from './LanguagePhysicsCanvas';
import ScrambleText from './ScrambleText';

function Home({ heroRef, heroOutOfView }) {
  const navigate = useNavigate();
  
  const languages = [
    "C'est toujours le bon moment pour commencer à apprendre",
    "Es ist immer der richtige Zeitpunkt, um mit dem Lernen zu beginnen",
    "Es siempre es el momento adecuado para empezar a aprender",
    "いつでも学び始めるのに最適な時期です"
  ];

  return (
    <div>
      <Hero ref={heroRef} heroOutOfView={heroOutOfView} />
      <div className="quote-frame">
        <div className="quote-text">
          <div>
            <ScrambleText 
              text="C'est toujours le bon moment pour commencer à apprendre"
              languages={languages}
            />
          </div>
          <div style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: '#555' }}>
            - It's always the right time to start learning.
          </div>
        </div>
        <button
          className="isml-program-btn"
          onClick={() => navigate('/courses')}
        >
          Start Now
        </button>
      </div>
      <LanguagesOffered />
      <LanguagePhysicsCanvas />
      <FAQ />
    </div>
  );
}

export default Home; 