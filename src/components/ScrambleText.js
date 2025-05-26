import React, { useState, useEffect, useRef } from 'react';
import './ScrambleText.css';

const ScrambleText = ({ text, languages }) => {
  const [displayText, setDisplayText] = useState(text);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const intervalRef = useRef(null);
  const scrambleIntervalRef = useRef(null);

  const morphText = (currentText, targetText) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    // Ensure both texts are the same length by padding with spaces
    const maxLength = Math.max(currentText.length, targetText.length);
    const paddedCurrent = currentText.padEnd(maxLength, ' ');
    const paddedTarget = targetText.padEnd(maxLength, ' ');

    return paddedCurrent
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (Math.random() < 0.3) {
          return paddedTarget[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
  };

  useEffect(() => {
    let scrambleCount = 0;
    const maxScrambles = 30;
    const scrambleSpeed = 50;

    const startScramble = () => {
      const targetText = languages[(currentLanguage + 1) % languages.length];
      scrambleIntervalRef.current = setInterval(() => {
        setDisplayText(prevText => morphText(prevText, targetText));
        scrambleCount++;

        if (scrambleCount >= maxScrambles) {
          clearInterval(scrambleIntervalRef.current);
          setDisplayText(targetText);
          setCurrentLanguage((prev) => (prev + 1) % languages.length);
        }
      }, scrambleSpeed);
    };

    intervalRef.current = setInterval(() => {
      startScramble();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    };
  }, [text, languages, currentLanguage]);

  return <div className="scramble-text">{displayText}</div>;
};

export default ScrambleText; 