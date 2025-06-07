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
import French from './components/French';
import German from './components/German';
import Japanese from './components/Japanese';
import instagramIcon from './assets/instagram.svg';
import linkedinIcon from './assets/linkedin.svg';
import twitterIcon from './assets/twitter.svg';
import youtubeIcon from './assets/youtube.svg';
import LanguagePhysicsCanvas from './components/LanguagePhysicsCanvas';
import EliteCard from './components/EliteCard';
import { FaPhone } from 'react-icons/fa';

// ScrollToTop component to handle automatic scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <Navbar showHeroTextInNav={shouldShowLogoInNav} />
      <main>
        <Routes>
          <Route path="/" element={<Home heroRef={heroRef} heroOutOfView={heroOutOfView} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/centres" element={<OurCentres />} />
          <Route path="/courses" element={<CourseDetails />} />
          <Route path="/our-centres" element={<OurCentres />} />
          <Route path="/elite-card" element={<EliteCard />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/french" element={<French />} />
          <Route path="/german" element={<German />} />
          <Route path="/japanese" element={<Japanese />} />
        </Routes>
      </main>
      <footer className="main-footer lemkus-footer isml-footer">
        <div className="isml-footer-top-row">
          <div className="isml-footer-left">
            <div className="isml-footer-logo">
              <img src={require('./assets/Footerlogo.png')} alt="ISML Logo" />
            </div>
            <div className="isml-footer-address">
              <p>8/3, Athreyapuram 2nd Street,</p>
              <p>Choolaimedu, Chennai - 600094</p>
              <p>7338881781 / 7338880780</p>
              <p>IYPAN Educational Centre Private Limited.</p>
            </div>
            <div className="isml-footer-socials">
              <a href="https://www.linkedin.com/company/learnwithisml/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="https://x.com/learnwithisml" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="https://www.instagram.com/learnwithisml/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="https://www.youtube.com/@learnwithisml" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a>
            </div>
          </div>
          <div className="footer-section-divider"></div>
          <div className="isml-footer-right">
            <div className="isml-footer-links">
              <div className="footer-links-column">
                <h3>Quick Links</h3>
                <a href="about">About Us</a>
                <a href="centres">Our Centres</a>
                <a href="elite-card">Elite Card</a>
                
              </div>
              <div className="vertical-line vertical-line-1"></div>
              <div className="footer-links-column">
                <h3>Resources</h3>
                <a href="courses">Course Details</a>
                <a href="contact">Contact Us</a>
                <a href="franchise">Franchise</a>
              </div>
              <div className="vertical-line vertical-line-2"></div>
              <div className="footer-links-column">
                <h3>Languages</h3>
                <a href="french">French</a>
                <a href="german">German</a>
                <a href="japanese">Japanese</a>
        </div>
          </div>
          </div>
        </div>
        <div className="isml-footer-copyright">&copy; 2025 IYPAN Educational Centre Private Limited- All Rights Reserved.</div>
      </footer>
      <button 
        className="phone-call-btn" 
        onClick={() => window.location.href = 'tel:+917338881781'}
        aria-label="Call us"
      >
        <FaPhone />
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
