import React, { useState, useEffect } from 'react';
import './CourseDetails.css';

function CourseDetails() {
  // Assuming you have 4 courses to cycle through
  const allCourses = [
    {
      id: 1,
      title: "French Language",
      level: "A1 to C2",
      price: "N/A", // Placeholder
      minutes: "N/A", // Placeholder
      videos: "N/A", // Placeholder
      description: "Master French with our comprehensive program covering grammar, vocabulary, and cultural nuances. Perfect for beginners to advanced learners.",
      about: "This course is designed for beginners to advanced learners who want to achieve fluency in French.", // Placeholder about text
      // Add other details like image, etc.
    },
    {
      id: 2,
      title: "German Language",
      level: "A1 to C2",
      price: "N/A", // Placeholder
      minutes: "N/A", // Placeholder
      videos: "N/A", // Placeholder
      description: "Learn German through our structured curriculum designed to build strong foundations and advanced language skills.",
      about: "Learn German for academic or professional purposes with our expert instructors.", // Placeholder about text
      // Add other details
    },
    {
      id: 3,
      title: "Japanese Language",
      level: "N5 to N1",
      price: "N/A", // Placeholder
      minutes: "N/A", // Placeholder
      videos: "N/A", // Placeholder
      description: "Discover the beauty of Japanese language and culture through our specialized program focusing on both written and spoken Japanese.",
      about: "Explore Japanese language and culture, from basic conversation to advanced proficiency.", // Placeholder about text
      // Add other details
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const goToPreviousCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + allCourses.length) % allCourses.length);
  };

  const goToNextCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % allCourses.length);
  };

  // Optional: Auto-cycle effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNextCourse();
  //   }, 5000); // Change course every 5 seconds
  //   return () => clearInterval(interval);
  // }, [allCourses.length]);

  const currentCourse = allCourses[currentCourseIndex];

  return (
    <div className="course-details-page-container">
      <div className="course-carousel-container">
        {allCourses.map((course, index) => (
          <div
            key={course.id}
            className={`course-card ${index === currentCourseIndex ? 'active' : ''} ${index === (currentCourseIndex + 1) % allCourses.length ? 'next' : ''} ${index === (currentCourseIndex - 1 + allCourses.length) % allCourses.length ? 'prev' : ''}`}
            style={{
              zIndex: allCourses.length - index,
            }}
          >
            <div className="course-card-content">
              <div className="course-level">Level: {course.level}</div>
              <h2 className="course-title">{course.title.toUpperCase()}</h2>
              <p className="course-description">{course.description}</p>
              <div className="course-key-stats">
                <div className="stat-item">
                  <div className="stat-value">{course.price}</div>
                  <div className="stat-label">Price</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{course.minutes}</div>
                  <div className="stat-label">Minutes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{course.videos}</div>
                  <div className="stat-label">Videos</div>
                </div>
              </div>
              <button className="enroll-button">Enroll Now</button>
            </div>
          </div>
        ))}
        <button className="nav-button prev" onClick={goToPreviousCourse}>&lt;</button>
        <button className="nav-button next" onClick={goToNextCourse}>&gt;</button>
      </div>
    </div>
  );
}

export default CourseDetails; 