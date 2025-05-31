import React from 'react';
import { useLocation } from 'react-router-dom';
import './CourseEnrollment.css';

function CourseEnrollment() {
  const location = useLocation();
  const courseData = location.state?.courseData;

  return (
    <div className="enrollment-page">
      <div className="enrollment-container">
        <h1 className="enrollment-title">Course Enrollment</h1>
        
        <div className="course-info">
          <h2>{courseData?.title || 'Course Details'}</h2>
          <p className="course-level">{courseData?.level}</p>
          <p className="course-price">{courseData?.price}</p>
        </div>

        <div className="fee-structure">
          <h3>Fee Structure</h3>
          <div className="fee-image-container">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Course Fee Structure" 
              className="fee-image"
            />
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91 1234567890</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@isml.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Education Street, City, State - 123456</p>
            </div>
          </div>
        </div>

        <div className="enrollment-cta">
          <button className="contact-button">Contact Us for Enrollment</button>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollment; 