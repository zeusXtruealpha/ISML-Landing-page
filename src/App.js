import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurCentres from './components/OurCentres';
import CourseDetails from './components/CourseDetails';
import Franchise from './components/Franchise';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import twitterIcon from './assets/twitter.svg';
import youtubeIcon from './assets/youtube.svg';

function AppContent() {
  const heroRef = useRef(null);
  const [heroOutOfView, setHeroOutOfView] = useState(false);
  const location = useLocation();
  const observerRef = useRef(null);

  useEffect(() => {
    // Reset state when navigating to home page
    if (location.pathname === '/') {
      setHeroOutOfView(false);
      window.scrollTo(0, 0);
      
      // Re-initialize the observer when returning to home
      if (heroRef.current && observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = new window.IntersectionObserver(
          ([entry]) => {
            setHeroOutOfView(!entry.isIntersecting && entry.boundingClientRect.top < 0);
          },
          { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
        );
        observerRef.current.observe(heroRef.current);
      }
    }
  }, [location]);

  useEffect(() => {
    if (!heroRef.current) return;
    
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => {
        setHeroOutOfView(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    );
    
    observerRef.current.observe(heroRef.current);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Determine if we should show the logo in navbar
  const shouldShowLogoInNav = location.pathname !== '/' || (location.pathname === '/' && heroOutOfView);

  return (
    <div className="App">
      <Navbar showHeroTextInNav={shouldShowLogoInNav} />
      <main>
        <Routes>
          <Route path="/" element={<Home heroRef={heroRef} heroOutOfView={heroOutOfView} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/centres" element={<OurCentres />} />
          <Route path="/courses" element={<CourseDetails />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <footer className="main-footer lemkus-footer isml-footer">
        <div className="isml-footer-top-row">
          <div className="isml-footer-community">JOIN OUR COMMUNITY</div>
          <div className="isml-footer-logo">ISML</div>
          <div className="isml-footer-links-grid">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/centres">Our Centres</a>
            <a href="/courses">Course Details</a>
            <a href="/franchise">Franchise</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="isml-footer-bottom-row">
          <div className="isml-footer-contact">
            <div className="footer-col-title">Contact</div>
            <div>Chennai, Tamil Nadu</div>
            <div>7338881781 / 7338880780</div>
            <div>IYPAN Educational Centre Private Limited.</div>
          </div>
          <div className="isml-footer-socials">
            <a href="https://www.instagram.com/learnwithisml/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/learnwithisml/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://x.com/learnwithisml" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="https://www.youtube.com/@learnwithisml" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
        </div>
        <div className="isml-footer-copyright">&copy; 2025 IYPAN- All Rights Reserved.</div>
      </footer>
      <button className="floating-chatbox-btn" title="Chat with us">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="19" fill="#49e4e3"/>
          <path d="M12 25v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H14l-4 3v-3a2 2 0 0 1 2-2z" fill="#fff"/>
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
