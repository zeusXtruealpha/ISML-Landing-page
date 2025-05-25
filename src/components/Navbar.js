import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';

function Navbar({ showHeroTextInNav }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown when any main nav link is clicked
  const handleNavClick = () => setIsDropdownOpen(false);

  return (
    <nav className={`navbar${showHeroTextInNav ? ' compact' : ''}`}>
      <div className="navbar-container">
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
        <ul className="nav-menu">
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
                    <li><a href="/french">French</a></li>
                    <li><a href="/german">German</a></li>
                    <li><a href="/japanese">Japanese</a></li>
                  </ul>
                </li>
                <li><Link to="/franchise" onClick={handleNavClick}>Franchise</Link></li>
                <li><Link to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
                <li><Link to="/privacy" onClick={handleNavClick}>Privacy Policy</Link></li>
              </ul>
            )}
          </li>
        </ul>
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