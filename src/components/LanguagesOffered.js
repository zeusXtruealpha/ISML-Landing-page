import React, { useEffect, useState, useRef } from 'react';
import './LanguagesOffered.css';

const languages = [
  {
    name: 'Français',
    image: require('../assets/French.png'),
    description: 'Discover the beauty and practicality of French with ISML. Our comprehensive course offers expert instruction, immersive learning experiences, and cultural insights to help you master the language. Enroll today and unlock new opportunities in diplomacy, business, and travel.'
  },
  {
    name: '日本語',
    image: require('../assets/Japanese.png'),
    description: 'Dive into the captivating world of Japanese language with ISML. Our interactive course blends language proficiency, cultural understanding, and practical skills to empower learners. Enroll today and embark on a journey of discovery and cultural enrichment.'
  },
  {
    name: 'Deutsch',
    image: require('../assets/German.png'),
    description: 'Explore the dynamic world of German language with ISML. Our tailored course combines immersive learning, expert guidance, and cultural immersion to help you achieve fluency. Enroll now and unlock doors to exciting career opportunities and enriching cultural experiences.'
  }
];

function LanguagesOffered() {
  const sectionRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState([false, false, false]);

  useEffect(() => {
    // Start animation immediately
    setTimeout(() => setShowTitle(true), 200);
    languages.forEach((_, idx) => {
      setTimeout(() => {
        setShowCards(prev => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      }, 700 + idx * 350);
    });
  }, []);

  return (
    <section className="languages-offered-section" ref={sectionRef}>
      <h2 className={`languages-title animate-title${showTitle ? ' show' : ''}`}>Fluent Futures Start Here</h2>
      <div className="languages-cards">
        {languages.map((lang, idx) => (
          <div className={`language-card animate-card${showCards[idx] ? ' show' : ''}`} key={idx}>
            <img src={lang.image} alt={lang.name} className="language-img" />
            <h3 className="language-name">{lang.name}</h3>
            <p className="language-desc">{lang.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesOffered; 