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

function AboutUs() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % 8);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(currentImageIndex * -100);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity
    const newIndex = Math.round((scrollLeft + walk) / -100);
    
    if (newIndex >= 0 && newIndex < carouselImages.length) {
      setCurrentImageIndex(newIndex);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      if (!isDragging) {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }
    }, 4000);

    return () => clearInterval(carouselInterval);
  }, [isDragging]);

  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>
      
      <div className="about-main-content">
        <div className="carousel-section">
          <div className="carousel-container">
            <div 
              ref={carouselRef}
              className="carousel-wrapper"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
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
            style={{ transform: `translateX(-${currentPosition * (100 / 8)}%)` }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="client-logo-wrapper">
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

          <div className="join-team-container">
            <div className="join-team-content">
              <h2 className="join-team-title">Want to join our team?</h2>
              <button className="join-team-button">
                Click here to join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 