import React, { useRef, useState } from 'react';
import './OurCentres.css';
import ce2 from '../assets/ce2.png';
import ce3 from '../assets/ce3.png';
import ce4 from '../assets/ce4.png';
import ce5 from '../assets/ce5.png';

const centres = [
  {
    id: 1,
    code: "ISMLTR",
    name: "ISML- Trichirappalli",
    location: "Tiruchirappalli-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce2, // Use the imported image
    courses: [], // Not provided in the text
    contact: "", // Not provided in the text
    description: "Established in March 2024, our inaugural branch is situated at 7TH CROSS STREET, THILLAI NAGAR. We pride ourselves on cultivating a student-friendly environment dedicated to delivering excellence in education. With a focus on personalized attention and top-tier instruction, our passionate team is committed to nurturing the academic and holistic growth of every individual. Our goal is to create a supportive and inspiring atmosphere where students are empowered to unleash their full potential through curiosity, critical thinking, and a love for learning. As we embark on this journey, we aspire to expand our impact and continue making a positive difference in the lives of students.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/zbnvndz"
  },
  {
    id: 2,
    code: "ISMLVD",
    name: "ISML- Aruppukkottai",
    location: "Aruppukkottai-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce5, // Use the imported image
    courses: [], // Not provided in the text
    contact: "", // Not provided in the text
    description: "Established in November 2024, our inaugural branch of Virudhunagar district is situated at 58/2, SBK College Rd, Vasantham Nagar. The centre offers a vibrant environment focused on academic excellence and personal growth. We provide personalized attention and exceptional instruction, fostering curiosity, critical thinking, and confidence in every student. Our dedicated team is committed to nurturing well-rounded individuals ready to excel and contribute meaningfully to society. Join us in shaping bright futures through quality education!",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/xWJVp77"
  },
  {
    id: 3,
    code: "ISMLCE",
    name: "ISML- Perumbakkam",
    location: "Perumbakkam-Tamil Nadu",
    address: "", // Address is part of the description
    image: ce3, // Use the imported image
    courses: [], // Not provided in the text
    contact: "", // Not provided in the text
    description: "Established in November 2024, our Chengalpattu district (East Zone) branch is located at 13, Villa, Bscpl Bollineni Hillside Block-20c, Block, Bollineni Hillside Rd. Offering a dynamic and inclusive environment for learning. We focus on academic excellence and holistic development, providing personalized attention and high-quality instruction. Our approach fosters curiosity, critical thinking, and self-confidence, empowering students to reach their full potential. With a dedicated team committed to nurturing well-rounded individuals, we aim to inspire students to excel academically and contribute positively to their communities. Join us in transforming lives through education and building brighter futures!",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/gyqRZsE"
  },
  {
    id: 4,
    code: "ISMLEL",
    name: "ISML- Eloor",
    location: "Eloor-Kerala",
    address: "", // Address is part of the description
    image: ce4, // Use the imported image
    courses: [], // Not provided in the text
    contact: "", // Not provided in the text
    description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages, enhancing their global awareness and communication skills. With interactive classes and experienced instructors, students will not only learn the language but also immerse themselves in the culture, broadening their horizons and preparing them for future success in an increasingly interconnected world.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/1wpqEb2"
  }
];

function OurCentres() {
  const [selected, setSelected] = useState(null);
  const carouselRef = useRef(null);
  const extraFrameRefs = useRef(Array(centres.length).fill(null).map(() => React.createRef())); // Adjust ref array size

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
          <span>INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES</span>
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
                    {/* <div className="centre-tile-price">{centre.contact}</div> */}
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
        {centres.map((centre, i) => (
          <div
            className="centre-extra-frame"
            key={centre.id}
            ref={extraFrameRefs.current[i]}
          >
            <div className="centre-extra-frame-left">
                <div className="centre-extra-frame-image-container">
                    <img src={centre.image} alt={centre.name} className="centre-extra-frame-image" />
                </div>
                <p className="centre-code"><strong>Centre Code:</strong> {centre.code}</p>
                <p className="centre-name"><strong>Centre Name:</strong> {centre.name}</p>
            </div>
            <div className="centre-extra-frame-right">
                <h2>{centre.location}</h2>
                <p>{centre.description}</p>
                <div className="centre-extra-frame-buttons">
                    {/* Add Visit button */}
                    <a 
                      href={centre.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="isml-program-btn visit-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit
                    </a>
                    {centre.buttonText && (
                        <button 
                          className="isml-program-btn"
                          onClick={() => window.location.href = 'tel:+917338881781'}
                        >
                          {centre.buttonText}
                        </button>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
      {/* Redirect to details below carousel - Hiding this for now */}
      {/* {selected !== null && (
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
      )} */}
    </div>
  );
}

export default OurCentres; 