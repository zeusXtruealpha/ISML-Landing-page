import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import frenchLogo from '../assets/french.jpeg';
import germanLogo from '../assets/german.jpeg';
import spanishLogo from '../assets/spanish.jpeg';

function AboutUs() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Create 3 rows of 8 logos each
  const logos = [
    // Row 1
    frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo,
    // Row 2
    spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo,
    // Row 3
    germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo,
    // Duplicate for sliding effect
    // Row 1
    frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo,
    // Row 2
    spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo,
    // Row 3
    germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo, frenchLogo, germanLogo, spanishLogo
  ];

  // Carousel images (using the same images for now)
  const carouselImages = [
    frenchLogo,
    germanLogo,
    spanishLogo,
    frenchLogo,
    germanLogo,
    spanishLogo
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % 8);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>
      
      <div className="about-main-content">
        <div className="about-left-section">
          <div className="who-we-are-content">
            <h2 className="section-title">Who Are We</h2>
            <p className="about-text">
              Welcome to Indian School for Modern Languages - A registered trade mark of IYPAN Educational Centre PVT LTD, 
              Established in 2014 under the name of Ocean Institute for French, later changed to IYPAN has been a pioneer 
              in language education, enriching lives through quality language programs. Our journey is marked by a commitment 
              to excellence, innovation in curriculum, and empowering learners of all ages with linguistic proficiency, 
              cultural immersion, and global connectivity.
            </p>
            <p className="about-text">
              Since 2014, ISML has grown from teaching French to introducing German and Japanese in 2022. We've impacted 
              20,000+ students through language workshops across India, involving parents, teachers, and students. Notably, 
              200+ students have achieved excellence, showcasing our commitment to comprehensive language education.
            </p>
          </div>
        </div>

        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
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