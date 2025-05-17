import React, { useRef, useState } from 'react';
import './OurCentres.css';

const centres = [
  {
    id: 1,
    code: "ISML-001",
    name: "ISML Main Centre",
    location: "Hyderabad",
    address: "123 Education Street, Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: ["French", "German", "Japanese"],
    contact: "+91 9876543210",
    description: "The main ISML centre in Hyderabad offers a full range of language courses and cultural events."
  },
  {
    id: 2,
    code: "ISML-002",
    name: "ISML North Centre",
    location: "Delhi",
    address: "456 Learning Avenue, Delhi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: ["French", "German"],
    contact: "+91 9876543211",
    description: "Our Delhi centre specializes in French and German, with experienced faculty and modern classrooms."
  },
  {
    id: 3,
    code: "ISML-003",
    name: "ISML South Centre",
    location: "Chennai",
    address: "789 Knowledge Road, Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: ["French", "Japanese"],
    contact: "+91 9876543212",
    description: "Chennai's ISML centre is known for immersive Japanese and French programs."
  },
  {
    id: 4,
    code: "ISML-004",
    name: "ISML West Centre",
    location: "Mumbai",
    address: "321 Wisdom Lane, Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: ["French", "German", "Japanese"],
    contact: "+91 9876543213",
    description: "Mumbai centre offers all three languages and hosts regular cultural workshops."
  },
  {
    id: 5,
    code: "ISML-005",
    name: "ISML East Centre",
    location: "Kolkata",
    address: "654 Scholar Park, Kolkata, West Bengal",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: ["German", "Japanese"],
    contact: "+91 9876543214",
    description: "Kolkata's ISML centre is a hub for German and Japanese learners."
  }
];

function OurCentres() {
  const [selected, setSelected] = useState(null);
  const carouselRef = useRef(null);
  const extraFrameRefs = useRef(Array(5).fill(null).map(() => React.createRef()));

  // Handle drag scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add('active');
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; //scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove('active');
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };
  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleTouchEnd = () => {
    isDown = false;
  };

  // Scroll to extra frame on tile click
  const handleTileClick = (idx) => {
    setSelected(idx);
    if (extraFrameRefs.current[idx]) {
      extraFrameRefs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="centres-page-root">
      <div className="centres-carousel-frame">
        <div className="centres-bg-text">
          <span>CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS CENTERS</span>
        </div>
        <div
          className="centres-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {centres.map((centre, idx) => (
            <div
              key={centre.id}
              className={`centre-tile${selected === idx ? ' selected' : ''}`}
              onClick={() => handleTileClick(idx)}
            >
              <div className="centre-tile-outer">
                <div className="centre-tile-inner">
                  <div className="centre-tile-img-container">
                    <img src={centre.image} alt={centre.name} className="centre-tile-img" />
                  </div>
                </div>
                <div className="centre-tile-info">
                  <div className="centre-tile-info-default">
                    <div className="centre-tile-title">{centre.name}</div>
                    <div className="centre-tile-price">{centre.contact}</div>
                  </div>
                  <div className="centre-tile-info-hover">
                    <div><strong>Centre Code:</strong> {centre.code}</div>
                    <div><strong>Centre Name:</strong> {centre.name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="centres-extra-frames">
        {[0,1,2,3,4].map((i) => (
          <div
            className="centre-extra-frame"
            key={i}
            ref={extraFrameRefs.current[i]}
          >
            Extra Frame {i+1}
          </div>
        ))}
      </div>
      {/* Redirect to details below carousel */}
      {selected !== null && (
        <div className="redirect-details">
          <h2>{centres[selected].name}</h2>
          <p className="redirect-location">{centres[selected].location}</p>
          <p className="redirect-address">{centres[selected].address}</p>
          <div className="redirect-courses">
            <strong>Courses Offered:</strong> {centres[selected].courses.join(', ')}
          </div>
          <div className="redirect-contact">
            <strong>Contact:</strong> {centres[selected].contact}
          </div>
          <div className="redirect-desc">{centres[selected].description}</div>
          <button className="redirect-close" onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default OurCentres; 