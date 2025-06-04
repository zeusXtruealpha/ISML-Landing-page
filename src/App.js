import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurCentres from './components/OurCentres';
import CourseDetails from './components/CourseDetails';
import CourseEnrollment from './components/CourseEnrollment';
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
          <Route path="/enrollment" element={<CourseEnrollment />} />
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
          <div className="isml-footer-logo">ISML</div>
            <div className="isml-footer-address">
              <p>Chennai, Tamil Nadu</p>
              <p>7338881781 / 7338880780</p>
              <p>IYPAN Educational Centre Private Limited.</p>
            </div>
            <div className="isml-footer-socials">
              <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
            </div>
          </div>
          <div className="footer-section-divider"></div>
          <div className="isml-footer-right">
            <div className="isml-footer-links">
              <div className="footer-links-column">
                <h3>Quick Links</h3>
                <a href="about">About Us</a>
                <a href="centres">Our Centres</a>
                <a href="contact">Contact Us</a>
              </div>
              <div className="vertical-line vertical-line-1"></div>
              <div className="footer-links-column">
                <h3>Resources</h3>
                <a href="courses">Course Details</a>
                <a href="privacy">Privacy Policy</a>
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
