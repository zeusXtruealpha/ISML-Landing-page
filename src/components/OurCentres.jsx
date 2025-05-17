import React, { useState, useRef } from 'react';
import './OurCentres.css';

const OurCentres = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCentre, setSelectedCentre] = useState(null);
  const carouselRef = useRef(null);

  const centres = [
    {
      id: 1,
      name: "ISML Hyderabad",
      location: "Hyderabad, Telangana",
      image: "/images/centres/hyderabad.jpg",
      description: "State-of-the-art facility in the heart of Hyderabad",
      address: "123 Tech Park, Hitech City, Hyderabad - 500081",
      courses: "Data Science, Machine Learning, AI",
      contact: "+91 98765 43210",
      details: "Our flagship center in Hyderabad offers cutting-edge facilities..."
    },
    // Add more centers here
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="centres-page-root">
      <div className="centres-bg-text">
        <span>CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS</span>
      </div>
      <div className="centres-carousel-frame">
        <div 
          ref={carouselRef}
          className={`centres-carousel ${isDragging ? 'active' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {centres.map((centre) => (
            <div
              key={centre.id}
              className={`centre-tile ${selectedCentre?.id === centre.id ? 'selected' : ''}`}
              onClick={() => setSelectedCentre(centre)}
            >
              <div className="centre-tile-img-container">
                <img
                  src={centre.image}
                  alt={centre.name}
                  className="centre-tile-img"
                />
                <div className="centre-tile-overlay">
                  <div className="centre-code">{centre.location}</div>
                  <div className="centre-name">{centre.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCentre && (
        <div className="centre-details-frame">
          <div className="centre-details-card">
            <div className="centre-details-header">
              <h2>{selectedCentre.name}</h2>
              <div className="centre-details-location">{selectedCentre.location}</div>
            </div>
            <div className="centre-details-content">
              <div className="centre-details-left">
                <img
                  src={selectedCentre.image}
                  alt={selectedCentre.name}
                  className="centre-details-img"
                />
                <div className="centre-details-address">{selectedCentre.address}</div>
                <div className="centre-details-courses">{selectedCentre.courses}</div>
                <div className="centre-details-contact">{selectedCentre.contact}</div>
              </div>
              <div className="centre-details-right">
                <div className="centre-details-desc">{selectedCentre.details}</div>
                <button
                  className="centre-details-close"
                  onClick={() => setSelectedCentre(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCentres; 