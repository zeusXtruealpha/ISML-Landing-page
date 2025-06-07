import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';
import ismlLogo from '../assets/IsmlLogo.png';

function Navbar({ showHeroTextInNav }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  // Handle scroll events for mobile navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply this behavior on mobile devices
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleMobileClickOutside(event) {
      const mobileMenu = document.querySelector('.nav-menu.mobile');
      if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleMobileClickOutside);
    } else {
      document.removeEventListener('mousedown', handleMobileClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleMobileClickOutside);
  }, [isMobileMenuOpen]);

  // Close all menus when any nav link is clicked
  const handleNavClick = () => {
    setIsDropdownOpen(false); // This is still needed for desktop
    setIsMobileMenuOpen(false); // Explicitly close mobile menu
    setIsLanguagesOpen(false); // Also close languages dropdown
  };

  // Toggle mobile menu visibility (opens the menu)
  const handleMobileMenuOpen = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsMobileMenuOpen(true);
  };

  // Handler to close mobile menu
  const handleCloseMobileMenu = (e) => {
    // e.stopPropagation(); // Stopping propagation here might interfere with overlay click
    setIsMobileMenuOpen(false);
    setIsLanguagesOpen(false); // Close languages dropdown
  };

  // Toggle Languages section
  const handleLanguagesToggle = (e) => {
    e.preventDefault();
    setIsLanguagesOpen(!isLanguagesOpen);
  };

  return (
    <nav className={`navbar${showHeroTextInNav ? ' compact' : ''}${!isVisible ? ' navbar-hidden' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={handleNavClick} style={{ textDecoration: 'none' }}>
            <img src={ismlLogo} alt="ISML Logo" className="logo-image" />
          </Link>
        </div>

        {/* Mobile Social Icons (Visible only on Mobile) */}
        <div className="navbar-socials mobile-socials">
          <a href="https://www.instagram.com/learnwithisml/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="navbar-social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/learnwithisml/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="navbar-social-icon" />
          </a>
          <a href="https://x.com/learnwithisml" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="navbar-social-icon" />
          </a>
          <a href="https://www.youtube.com/@learnwithisml" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="navbar-social-icon" />
          </a>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="nav-menu desktop">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleNavClick}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/centres" className="nav-link" onClick={handleNavClick}>Our Centres</Link>
          </li>
          <li className="nav-item">
            <Link to="/elite-card" className="nav-link" onClick={handleNavClick}>Elite Card</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={handleNavClick}>Course Details</Link>
          </li>
          <li className="nav-item dropdown" ref={dropdownRef}>
            <a 
              href="#more" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              More <span className="dropdown-arrow">▼</span>
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="#languages">Languages</a>
                  <ul className="dropdown-submenu-content">
                    <li><Link to="/french" onClick={handleNavClick}>French</Link></li>
                    <li><Link to="/german" onClick={handleNavClick}>German</Link></li>
                    <li><Link to="/japanese" onClick={handleNavClick}>Japanese</Link></li>
                  </ul>
                </li>
                <li><Link to="/franchise" onClick={handleNavClick}>Franchise</Link></li>
                <li><Link to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
                <li><Link to="/privacy" onClick={handleNavClick}>Privacy Policy</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (Visible on Mobile) */}
        {!isMobileMenuOpen && (
          <button 
            className="mobile-menu-btn" 
            onClick={handleMobileMenuOpen} // Only opens the menu
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        )}

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay${isMobileMenuOpen ? ' active' : ''}`}
          onClick={handleCloseMobileMenu} // Overlay uses close handler
        ></div>

        {/* Mobile Navigation (Hidden by Default) */}
        <ul className={`nav-menu mobile${isMobileMenuOpen ? ' active' : ''}`}>
          <div className="mobile-nav-items">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleNavClick}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/centres" className="nav-link" onClick={handleNavClick}>Our Centres</Link>
            </li>
            <li className="nav-item">
              <Link to="/elite-card" className="nav-link" onClick={handleNavClick}>Elite Card</Link>
            </li>
            <li className="nav-item">
              <Link to="/franchise" className="nav-link" onClick={handleNavClick}>Franchise</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" onClick={handleNavClick}>Course Details</Link>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link languages-toggle" 
                onClick={handleLanguagesToggle}
              >
                Languages <span className={`arrow ${isLanguagesOpen ? 'up' : 'down'}`}>▼</span>
              </button>
              <div className={`languages-dropdown ${isLanguagesOpen ? 'open' : ''}`}>
                <Link to="/french" className="nav-link" onClick={handleNavClick}>French</Link>
                <Link to="/german" className="nav-link" onClick={handleNavClick}>German</Link>
                <Link to="/japanese" className="nav-link" onClick={handleNavClick}>Japanese</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy" className="nav-link" onClick={handleNavClick}>Privacy Policy</Link>
            </li>
          </div>
        </ul>

        {/* Social Icons (Visible on Desktop) */}
        <div className="navbar-socials">
          <a href="https://www.instagram.com/learnwithisml/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="navbar-social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/learnwithisml/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="navbar-social-icon" />
          </a>
          <a href="https://x.com/learnwithisml" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="navbar-social-icon" />
          </a>
          <a href="https://www.youtube.com/@learnwithisml" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="navbar-social-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;