import React from 'react';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';
import './QuoteFrame.css';
import LanguagesOffered from './LanguagesOffered';
import FAQ from './FAQ';
import LanguagePhysicsCanvas from './LanguagePhysicsCanvas';

function Home({ heroRef, heroOutOfView }) {
  const navigate = useNavigate();
  return (
    <div>
      <Hero ref={heroRef} heroOutOfView={heroOutOfView} />
      <LanguagesOffered />
      <div className="quote-frame">
        <div className="quote-text">
          <div>"C'est toujours le bon moment pour commencer à apprendre"</div>
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
      <LanguagePhysicsCanvas />
      <FAQ />
    </div>
  );
}

export default Home; 