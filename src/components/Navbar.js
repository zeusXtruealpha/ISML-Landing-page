import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';

function Navbar({ showHeroTextInNav }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguagesSubmenuOpen, setIsLanguagesSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsLanguagesSubmenuOpen(false);
  };

  // Toggle mobile menu visibility
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle Languages submenu in mobile
  const handleLanguagesSubmenuToggle = () => {
    setIsLanguagesSubmenuOpen(!isLanguagesSubmenuOpen);
  };

  return (
    <nav className={`navbar${showHeroTextInNav ? ' compact' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={handleNavClick} style={{ textDecoration: 'none' }}>
            {showHeroTextInNav ? (
              <div className="navbar-hero-text">
                <div className="navbar-hero-line">
                  <span className="navbar-isml">I</span>
                  <span className="navbar-rest">NDIAN</span>
                  <span className="navbar-trademark">®</span>
                </div>
                <div className="navbar-hero-line">
                  <span className="navbar-isml">S</span>
                  <span className="navbar-rest">CHOOL FOR</span>
                </div>
                <div className="navbar-hero-line">
                  <span className="navbar-isml">M</span>
                  <span className="navbar-rest">ODERN</span>
                </div>
                <div className="navbar-hero-line">
                  <span className="navbar-isml">L</span>
                  <span className="navbar-rest">ANGUAGES</span>
                </div>
              </div>
            ) : (
              <div className="navbar-compact-text">
                <span className="navbar-isml">I</span>
                <span className="navbar-rest">SML</span>
              </div>
            )}
          </Link>
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
        <button 
          className="mobile-menu-btn" 
          onClick={handleMobileMenuToggle} 
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>

        {/* Mobile Navigation (Hidden by Default) */}
        <ul className={`nav-menu mobile${isMobileMenuOpen ? ' active' : ''}`}>
          <li className="nav-item">
            <button 
              className="close-menu-btn" 
              onClick={handleNavClick} 
              aria-label="Close mobile menu"
            >
              ×
            </button>
          </li>
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
            <Link to="/courses" className="nav-link" onClick={handleNavClick}>Course Details</Link>
          </li>
          <li className="nav-item dropdown mobile-dropdown">
            <button 
              className="nav-link dropdown-toggle" 
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              More <span className="dropdown-arrow">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu mobile-dropdown-menu">
                <li className="dropdown-submenu mobile-dropdown-submenu">
                  <button 
                    className="submenu-toggle" 
                    onClick={handleLanguagesSubmenuToggle}
                  >
                    Languages <span className="dropdown-arrow">▸</span>
                  </button>
                  {isLanguagesSubmenuOpen && (
                    <ul className="dropdown-submenu-content mobile-dropdown-submenu-content">
                      <li><Link to="/french" onClick={handleNavClick}>French</Link></li>
                      <li><Link to="/german" onClick={handleNavClick}>German</Link></li>
                      <li><Link to="/japanese" onClick={handleNavClick}>Japanese</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link to="/franchise" onClick={handleNavClick}>Franchise</Link></li>
                <li><Link to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
                <li><Link to="/privacy" onClick={handleNavClick}>Privacy Policy</Link></li>
              </ul>
            )}
          </li>
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