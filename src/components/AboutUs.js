import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpeg';
import i3 from '../assets/i3.jpeg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpeg';
import i6 from '../assets/i6.jpeg';
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
import c23 from '../assets/c23.jpeg';
import c24 from '../assets/c24.svg';
import Email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import intern1 from '../assets/Intern1.png';
import intern2 from '../assets/Intern2.png';
import intern3 from '../assets/Intern3.png';
import intern4 from '../assets/Intern4.png';

import con1 from '../assets/Consultants/consultant1.png';
import con2 from '../assets/Consultants/consultant2.png';
import t1 from '../assets/trainers/t1.png';
import t2 from '../assets/trainers/t2.png';
import t3 from '../assets/trainers/t3.png';
import t4 from '../assets/trainers/t4.png';
import t5 from '../assets/trainers/t5.png';
import t6 from '../assets/trainers/t6.png';
import t7 from '../assets/trainers/t7.png';
import t8 from '../assets/trainers/t8.png';
import t9 from '../assets/trainers/t9.png';
import t10 from '../assets/trainers/t10.png';

import a1 from '../assets/admin/a1.png';
import a2 from '../assets/admin/a2.png';
import a3 from '../assets/admin/a3.png';
import a4 from '../assets/admin/a4.png';
import a5 from '../assets/admin/a5.png';





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
    c17, c18, c19, c20, c21, c22, c23, c24,
    // Duplicate for sliding effect
    // Row 1
    c1, c2, c3, c4, c5, c6, c7, c8,
    // Row 2
    c9, c10, c11, c12, c13, c14, c15, c16,
    // Row 3
    c17, c18, c19, c20, c21, c22, c23, c24,
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
    // If clicking the same section that's already open, just close it
    if (openTeamSection === section) {
      setOpenTeamSection(null);
      return;
    }

    // Get the target element before any state changes
    const targetElement = document.getElementById(section);
    const headerOffset = 100;

    // If there's a currently open section, close it first
    if (openTeamSection) {
      setOpenTeamSection(null);
      
      // Wait for the closing animation to complete
      setTimeout(() => {
        // Open the new section
        setOpenTeamSection(section);
        
        // Calculate scroll position after the new section is opened
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Scroll to the new position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 600); // Wait for the closing animation (0.6s)
    } else {
      // If no section is currently open, just open the new one
      setOpenTeamSection(section);
      
      // Scroll to the new section
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
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
        <div id="trainer-team" className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('trainer-team')}
          >
            <h3 className="team-subsection-title">Trainer Team</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'trainer-team' ? 'up' : ''}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'trainer-team' ? 'open' : ''}`}>
            {[
              { name: "Pradeep kumar M", title: "French Language Trainer", image: a1 },
              { name: "Popodoum Noe", title: "French Language Trainer", image: t1 },
              { name: "Vyshnavi M", title: "French Language Trainer", image: t5 },
              { name: "Revanth S", title: "Japanese Language Trainer", image: t2 },
              { name: "Sujal Singh", title: "German Language Trainer", image: t3 },
              { name: "Ilakkiyaa Ravichandran", title: "French Language Trainer", image: t4 },
              { name: "Claude Niyonkuru", title: "French Language Trainer", image: t6 },
              { name: "Kanchan pundir", title: "German Language Trainer", image: t7 },
              { name: "Bhumika jain", title: "Japanese Language Trainer", image: t8 },
              { name: "Himanshu Raj", title: "German Language Trainer", image: t9 },
              { name: "Satyam", title: "Japanese Language Trainer", image: t10 }
            ].map((trainer, index) => (
              <div key={index} className="team-member-card">
                <div className="team-card-bg"></div>
                <div className="team-member-image-container">
                  <img src={trainer.image} alt={`${trainer.name} - ${trainer.title}`} className="team-member-image" />
                </div>
                <h4 className="team-member-name">{trainer.name}</h4>
                <p className="team-member-title">{trainer.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Team */}
        <div id="admin-team" className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('admin-team')}
          >
            <h3 className="team-subsection-title">Admin Team</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'admin-team' ? 'up' : ''}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'admin-team' ? 'open' : ''}`}>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={a2} alt="Nandhini R - Project Head" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Nandhini R</h4>
              <p className="team-member-title">Project Head</p>
            </div>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={a3} alt="Arunjunai Rani R - HR Executive" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Arunjunai Rani R</h4>
              <p className="team-member-title">HR Executive</p>
            </div>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={a4} alt="Sarath Kumar D - Creative Head" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Sarath Kumar D</h4>
              <p className="team-member-title">Creative Head</p>
            </div>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={a5} alt="Evanjalin Sheeba E - Intern Recurit & Scholarship Manager" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Evanjalin Sheeba E</h4>
              <p className="team-member-title">Intern Recurit & Scholarship Manager</p>
            </div>
          </div>
        </div>

        {/* Consultants */}
        <div id="consultants" className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('consultants')}
          >
            <h3 className="team-subsection-title">Consultants</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'consultants' ? 'up' : ''}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'consultants' ? 'open' : ''}`}>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={con1} alt="Christina Caroline Sekar - Tutor/Senior Consultant Mathematics" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Christina Caroline Sekar</h4>
              <p className="team-member-title">Senior Consultant Mathematics</p>
            </div>
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={con2} alt="Gowtham Muthukumar G - Management consultant" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Gowtham Muthukumar G</h4>
              <p className="team-member-title">Management Consultant</p>
            </div>
          </div>
        </div>

        {/* Interns */}
        <div id="interns" className="team-subsection">
          <button 
            className="team-subsection-header"
            onClick={() => toggleTeamSection('interns')}
          >
            <h3 className="team-subsection-title">Interns</h3>
            <span className={`dropdown-arrow ${openTeamSection === 'interns' ? 'up' : ''}`}>▼</span>
          </button>
          <div className={`team-members-grid ${openTeamSection === 'interns' ? 'open' : ''}`}>
            {/* Dummy Intern 1 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern1} alt="Niranjan Galla" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Niranjan Galla</h4>
              <p className="team-member-title">Intern</p>
            </div>
            {/* Dummy Intern 2 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern2} alt="Sai Gopal Vallu" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Sai Gopal Vallu</h4>
              <p className="team-member-title">Intern</p>
            </div>
            {/* Dummy Intern 3 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern3} alt="Mohammed Abdul Majeed" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Mohammed Abdul Majeed</h4>
              <p className="team-member-title">Intern</p>
            </div>
             {/* Dummy Intern 4 */}
            <div className="team-member-card">
              <div className="team-card-bg"></div>
              <div className="team-member-image-container">
                <img src={intern4} alt="Sanjanya Srinivasan" className="team-member-image" />
              </div>
              <h4 className="team-member-name">Sanjanya Srinivasan</h4>
              <p className="team-member-title">Intern</p>
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