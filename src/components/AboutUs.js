import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';
import i1 from '../assets/i1.jpeg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpeg';
import i6 from '../assets/i6.jpg';
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c2.jpeg';
import c3 from '../assets/c3.jpeg';
import c4 from '../assets/c4.jpeg';
import c5 from '../assets/c5.jpeg';
import c6 from '../assets/c6.jpeg';
import c7 from '../assets/c7.jpeg';
import c8 from '../assets/c8.jpeg';
import c9 from '../assets/c9.jpeg';
import c10 from '../assets/c10.jpeg';
import c11 from '../assets/c11.jpeg';
import c12 from '../assets/c12.jpeg';
import c13 from '../assets/c13.jpeg';
import c14 from '../assets/c14.jpeg';
import c15 from '../assets/c15.jpeg';
import c16 from '../assets/c16.jpeg';
import c17 from '../assets/c17.jpeg';
import c18 from '../assets/c18.jpeg';
import c19 from '../assets/c19.jpeg';
import c20 from '../assets/c20.jpeg';
import c21 from '../assets/c21.jpeg';
import c22 from '../assets/c22.jpeg';
import Email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import intern1 from '../assets/Intern1.png';
import intern2 from '../assets/Intern2.png';

// Import trainer images
/*
import trainer1 from '../assets/trainers/trainer1.jpg';
import trainer2 from '../assets/trainers/trainer2.jpg';
import trainer3 from '../assets/trainers/trainer3.jpg';
import trainer4 from '../assets/trainers/trainer4.jpg';
import trainer5 from '../assets/trainers/trainer5.jpg';
import trainer6 from '../assets/trainers/trainer6.jpg';
import trainer7 from '../assets/trainers/trainer7.jpg';
import trainer8 from '../assets/trainers/trainer8.jpg';
import trainer9 from '../assets/trainers/trainer9.jpg';
import trainer10 from '../assets/trainers/trainer10.jpg';
import trainer11 from '../assets/trainers/trainer11.jpg';
import trainer12 from '../assets/trainers/trainer12.jpg';
import trainer13 from '../assets/trainers/trainer13.jpg';
import trainer14 from '../assets/trainers/trainer14.jpg';
import trainer15 from '../assets/trainers/trainer15.jpg';
import trainer16 from '../assets/trainers/trainer16.jpg';
import trainer17 from '../assets/trainers/trainer17.jpg';
import trainer18 from '../assets/trainers/trainer18.jpg';
import trainer19 from '../assets/trainers/trainer19.jpg';
import trainer20 from '../assets/trainers/trainer20.jpg';
import trainer21 from '../assets/trainers/trainer21.jpg';
import trainer22 from '../assets/trainers/trainer22.jpg';
import trainer23 from '../assets/trainers/trainer23.jpg';
import trainer24 from '../assets/trainers/trainer24.jpg';
import trainer25 from '../assets/trainers/trainer25.jpg';*/

function AboutUs() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [openTeamSection, setOpenTeamSection] = useState(null);
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);
  const logosRef = useRef(null);
  
  // Create 3 rows of 8 logos each
  const logos = [
    // Row 1
    c1, c2, c3, c4, c5, c6, c7, c8,
    // Row 2
    c9, c10, c11, c12, c13, c14, c15, c16,
    // Row 3
    c17, c18, c19, c20, c21, c22, c12, c9,
    // Duplicate for sliding effect
    // Row 1
    c1, c2, c3, c4, c5, c6, c7, c8,
    // Row 2
    c9, c10, c11, c12, c13, c14, c15, c16,
    // Row 3
    c17, c18, c19, c20, c21, c22, c12, c9,
  ];

  // Carousel images
  const carouselImages = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6
  ];

  // Auto-scroll for client logos
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % 8);
      }, 2000);
    }
    return () => {
      clearInterval(interval);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [isHovered, hoverTimeout]);

  // Continuous carousel animation
  useEffect(() => {
    let timeout;
    const duration = 5000; // 5 seconds per slide

    const advanceSlide = () => {
      if (!isHovered && !isDragging) {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }
    };

    if (!isHovered && !isDragging) {
      timeout = setTimeout(advanceSlide, duration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isHovered, isDragging, currentImageIndex]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
        if (wrapperRef.current) {
      const transform = window.getComputedStyle(wrapperRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      setScrollLeft(matrix.m41);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX);
    if (wrapperRef.current) {
            wrapperRef.current.style.transition = 'none';
      wrapperRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (wrapperRef.current) {
      const slideWidth = wrapperRef.current.firstElementChild.offsetWidth;
      const transform = window.getComputedStyle(wrapperRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      const currentX = matrix.m41;
      
      if (Math.abs(currentX - scrollLeft) > slideWidth / 2) {
        const direction = currentX > scrollLeft ? -1 : 1;
        const newIndex = (currentImageIndex + direction + carouselImages.length) % carouselImages.length;
        setCurrentImageIndex(newIndex);
        wrapperRef.current.style.transition = 'transform 0.3s ease';
        wrapperRef.current.style.transform = `translateX(-${newIndex * slideWidth}px)`;
      } else {
        wrapperRef.current.style.transition = 'transform 0.3s ease';
        wrapperRef.current.style.transform = `translateX(-${currentImageIndex * slideWidth}px)`;
      }
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    if (wrapperRef.current) {
      const transform = window.getComputedStyle(wrapperRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      setScrollLeft(matrix.m41);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX);
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = 'none';
      wrapperRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (wrapperRef.current) {
      const slideWidth = wrapperRef.current.firstElementChild.offsetWidth;
      const transform = window.getComputedStyle(wrapperRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      const currentX = matrix.m41;
      
      if (Math.abs(currentX - scrollLeft) > slideWidth / 2) {
        const direction = currentX > scrollLeft ? -1 : 1;
        const newIndex = (currentImageIndex + direction + carouselImages.length) % carouselImages.length;
        setCurrentImageIndex(newIndex);
        wrapperRef.current.style.transition = 'transform 0.3s ease';
        wrapperRef.current.style.transform = `translateX(-${newIndex * slideWidth}px)`;
      } else {
        wrapperRef.current.style.transition = 'transform 0.3s ease';
        wrapperRef.current.style.transform = `translateX(-${currentImageIndex * slideWidth}px)`;
      }
    }
  };

  const handleLogoHover = () => {
    setIsHovered(true);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    // Set timeout to resume animation after 4 seconds
    const timeout = setTimeout(() => {
      setIsHovered(false);
    }, 4000);
    setHoverTimeout(timeout);
  };

  const handleLogoUnhover = () => {
    setIsHovered(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const toggleTeamSection = (section) => {
    setOpenTeamSection(openTeamSection === section ? null : section);
  };

  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>
      
      <div className="about-main-content">
        <div className="carousel-section">
          <div 
            className="carousel-container"
              ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="carousel-wrapper"
              ref={wrapperRef}
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="carousel-slide"
                >
                  <img src={image} alt={`Carousel Image ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="who-we-are-content">
          <h2 className="section-title">Who Are We</h2>
          <div className="content-with-carousel">
            <div className="text-content">
              <p className="about-text">
                Welcome to Indian School for Modern Languages - A registered trade mark of IYPAN Educational Centre PVT LTD, 
                Established in 2014 under the name of Ocean Institute for French, later changed to IYPAN has been a pioneer 
                in language education, enriching lives through quality language programs. Our journey is marked by a commitment 
                to excellence, innovation in curriculum, and empowering learners of all ages with linguistic proficiency, 
                cultural immersion, and global connectivity.
              </p>
            </div>

            <div className="text-content">
              <p className="about-text">
                Since 2014, ISML has grown from teaching French to introducing German and Japanese in 2022. We've impacted 
                20,000+ students through language workshops across India, involving parents, teachers, and students. Notably, 
                200+ students have achieved excellence, showcasing our commitment to comprehensive language education.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">
        <h2 className="section-title">Our Clients</h2>
        <div className="client-logos-container">
          <div 
            className="client-logos-grid"
            ref={logosRef}
            style={{ transform: `translateX(-${currentPosition * (100 / 8)}%)` }}
          >
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="client-logo-wrapper"
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoUnhover}
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bottom-sections">
        <div className="vision-mission-container">
          <div className="vision-mission-row">
            <section className="about-section vision-section">
              <h2 className="section-title">Our Vision</h2>
              <p className="about-text">
                We envision a society where language barriers are overcome, facilitating seamless communication and 
                interconnectedness among diverse communities.
              </p>
            </section>
            
            <section className="about-section mission-section">
              <h2 className="section-title">Our Mission</h2>
              <p className="about-text">
                Our mission is to empower individuals of all ages with the linguistic proficiency necessary to thrive 
                in a globalized world while fostering cross-cultural appreciation and understanding.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>

        {/* Trainer Team */}
        <div className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('trainer')}
          >
            <h3 className="team-subsection-title">Trainer Team</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'trainer' ? 'up' : 'down'}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'trainer' ? 'open' : ''}`}>
            {[
              { name: "Sarah Johnson", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Michael Chen", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Emma Rodriguez", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "David Kim", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Sophie Martin", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "James Wilson", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Maria Garcia", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Alexander Lee", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Olivia Brown", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Thomas Anderson", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Isabella Martinez", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "William Taylor", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Emily Davis", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Daniel White", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Sophia Clark", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Benjamin Moore", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Ava Thompson", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Henry Walker", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Charlotte Hall", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Lucas Young", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Mia Allen", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Ethan King", title: "French Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Amelia Wright", title: "German Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Noah Scott", title: "Japanese Language Trainer", image: "https://via.placeholder.com/150" },
              { name: "Harper Green", title: "French Language Trainer", image: "https://via.placeholder.com/150" }
            ].map((trainer, index) => (
              <div key={index} className="team-member-card">
                <div className="team-card-bg"></div>
                <div className="team-member-image-container">
                  <img src={trainer.image} alt={trainer.name} className="team-member-image" />
                </div>
                <h4 className="team-member-name">{trainer.name}</h4>
                <p className="team-member-title">{trainer.title}</p>
                <div className="social-icons">
                  <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                  <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Team */}
        <div className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('admin')}
          >
            <h3 className="team-subsection-title">Admin Team</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'admin' ? 'up' : 'down'}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'admin' ? 'open' : ''}`}>
            {/* Dummy Admin 1 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Admin Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Admin 1</h4>
              <p className="team-member-title">Administrator</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
            {/* Dummy Admin 2 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Admin Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Admin 2</h4>
              <p className="team-member-title">Administrator</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
            {/* Dummy Admin 3 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Admin Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Admin 3</h4>
              <p className="team-member-title">Administrator</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
             {/* Dummy Admin 4 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Admin Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Admin 4</h4>
              <p className="team-member-title">Administrator</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Consultants */}
        <div className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('consultants')}
          >
            <h3 className="team-subsection-title">Consultants</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'consultants' ? 'up' : 'down'}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'consultants' ? 'open' : ''}`}>
            {/* Dummy Consultant 1 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Consultant Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Consultant 1</h4>
              <p className="team-member-title">Language Consultant</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
            {/* Dummy Consultant 2 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Consultant Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Consultant 2</h4>
              <p className="team-member-title">Language Consultant</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Interns */}
        <div className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('interns')}
          >
            <h3 className="team-subsection-title">Interns</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'interns' ? 'up' : 'down'}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'interns' ? 'open' : ''}`}>
            {/* Dummy Intern 1 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern1} alt="Intern Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Niranjan Galla</h4>
              <p className="team-member-title">Intern</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/niranjan-galla-6a3067298/" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="mailto:niranjan.galla.7@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
            {/* Dummy Intern 2 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern2} alt="Intern Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Sai Gopal Vallu</h4>
              <p className="team-member-title">Intern</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/gopal-vallu-a4822b262/" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="mailto:saigopalvallu7@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
            {/* Dummy Intern 3 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Intern Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Intern 3</h4>
              <p className="team-member-title">Intern</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
             {/* Dummy Intern 4 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src="https://via.placeholder.com/150" alt="Intern Name" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Dummy Intern 4</h4>
              <p className="team-member-title">Intern</p>
              <div className="social-icons">
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={Email} alt="Email" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moved join-team-container here */}
          <div className="join-team-container">
            <div className="join-team-content">
              <h2 className="join-team-title">Want to join our team?</h2>
              <button 
                className="join-team-button"
                onClick={() => window.location.href = 'tel:+917338880780'}
              >
                Click here to join
              </button>
            </div>
          </div>

    </div>
  );
}

export default AboutUs; 