import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CourseDetails.css';
import IntDep from '../assets/IntDep.png';
import IMM from '../assets/Imm.png';
import Mas from '../assets/Mas.png';
import ISMLBrochure from '../assets/ISML Brochure.pdf';
import MLM from '../assets/MLM.png';
import IDM from '../assets/IDM.png';
import IMMM from '../assets/IMMM.png';
import IDF from '../assets/idfast.png';
import IMMF from '../assets/immfast.png';
import IDFM from '../assets/idfastM.png';
import IMMFM from '../assets/immfastM.png';

// Custom hook for counting animation
const useCountAnimation = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return { ref, count };
};

function CourseDetails() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // All courses data
  const allCourses = useMemo(() => [
    {
      id: 1,
      title: "Master a Language - ML",
      level: "Beginner to Pro",
      price: "₹549/month",
      duration: "1-5 years",
      description: "Master a Language of Your Choice for Just Rs. 549 per Month. Best for Students of Age 7 - 13",
      fullDescription:
        "Are you ready to embark on a journey of language mastery right from the comfort of your own home? Look no further! Our language learning program offers you the opportunity to become fluent in a language of your choice without breaking the bank, Best for Students of Age 7 - 13",
      image: Mas,
      mobileImage: MLM,
      languages: ["French", "German", "Japanese"],
      // You can later add more items (evaluate conditionally) if needed.
      proficiencyLevels: [
        { level: "Beginner", codes: ["A1", "N5"], timeframe: "in 1 year" },
        { level: "Intermediate", codes: ["A2", "N4.1"], timeframe: "in 2 years" },
        { level: "Advanced", codes: ["B1", "N4.2"], timeframe: "in 3 years" },
        { level: "Pro", codes: ["B2", "N3.1"], timeframe: "in 4 years" }
      ],
      schedule: {
        days: "Saturday and Sunday",
        duration: "1 hour",
        timeRange: "7:00 AM to 10:00 PM IST",
        flexibility: "Pick any slot that suits you"
      },
      features: [
        "Weekend Classes",
        "Flexible Timing",
        "Multiple Languages",
        "Progressive Learning"
      ],
      category: "regular"
    },
    {
      id: 2,
      title: "International Diploma - ID",
      level: "Exam Preparation",
      price: "₹1299/month",
      duration: "3-6 months",
      description: "Crack your Language Proficiency Exam of Your Choice",
      fullDescription:
        "Don't miss out on the opportunity to broaden your horizons, connect with people from around the world, and gain a valuable skill. Join our language learning program today to crack the International diploma exams and start your journey toward language fluency.",
      image: IntDep,
      mobileImage: IDM,
      languages: ["French", "German", "Japanese"],
      examTypes: [
        { exam: "DELF A1/A2", type: "French" },
        { exam: "DELF B1/B2", type: "French" },
        { exam: "DALF C1/C2", type: "French" },
        { exam: "Goethe A1/A2", type: "German" },
        { exam: "Goethe B1/B2", type: "German" },
        { exam: "JLPT N5/N4", type: "Japanese" },
        { exam: "JLPT N3/N2", type: "Japanese" }
      ],
      schedule: {
        days: ["Monday & Wednesday/ ", "Tuesday & Thursday/ ", "Saturday & Sunday"],
        duration: "1.5 hours",
        timeRange: "7:00 AM to 10:00 PM IST"
      },
      features: [
        "Exam-Focused",
        "Multiple Schedule Options",
        "International Certification",
        "Expert Guidance"
      ],
      category: "exam"
    },
    {
      id: 3,
      title: "Immersion - IMM",
      level: "Intensive",
      price: "₹9735/month",
      duration: "3-6 months",
      description: "Fasttrack Course for Quick Learners",
      fullDescription:
        "Our goal is to help you acquire the necessary skills to communicate effectively in target language in a variety of situations, both oral and written. Our program is designed to meet the needs of learners from all backgrounds, regardless of their age, educational level or motivation to learn.",
      image: IMM,
      mobileImage: IMMM,
      languages: { French: "A1 to B2", German: "A1 to B2", Japanese: "N5 to N3" },
      schedule: {
        days: "Monday to Friday",
        duration: "2 - 3 hours",
        timeRange: "7:00 AM to 10:00 PM IST"
      },
      features: [
        "Intensive Learning",
        "Dynamic Environment",
        "Cultural Understanding",
        "Varied Teaching Methods"
      ],
      category: "intensive"
    },
    {
      id: 4,
      title: "International Diploma - ID Fasttrack",
      level: "Fasttrack",
      price: "₹2757/month",
      duration: "2-4 months",
      description: "Accelerated Exam Preparation Course",
      fullDescription:
        "Don't miss out on the opportunity to broaden your horizons, connect with people from around the world, and gain a valuable skill. Join our accelerated language learning program today to crack the International diploma exams and start your journey toward language fluency.",
      image: IDF,
      mobileImage: IDFM,
      languages: ["French", "German", "Japanese"],
      examTypes: [
        { exam: "DELF A1/A2", type: "French" },
        { exam: "DELF B1/B2", type: "French" },
        { exam: "DALF C1/C2", type: "French" },
        { exam: "Goethe A1/A2", type: "German" },
        { exam: "Goethe B1/B2", type: "German" },
        { exam: "JLPT N5/N4", type: "Japanese" },
        { exam: "JLPT N3/N2", type: "Japanese" }
      ],
      schedule: {
        days: ["Monday-Friday"],
        duration: "2 hours",
        timeRange: "7:00 AM to 10:00 PM IST"
      },
      features: [
        "Exam-Focused",
        "Intensive Schedule",
        "International Certification",
        "Expert Guidance"
      ],
      category: "exam"
    },
    {
      id: 5,
      title: "Immersion - IMM Fasttrack",
      level: "Fasttrack",
      price: "Contact for Pricing",
      duration: "2-4 months",
      description: "Accelerated Course for Quick Learners",
      fullDescription:
        "Our goal is to help you acquire the necessary skills to communicate effectively in target language in a variety of situations, both oral and written. Our program is designed to meet the needs of learners from all backgrounds, regardless of their age, educational level or motivation to learn.",
      image: IMMF,
      mobileImage: IMMFM,
      languages: { French: "A1 to A2", German: "A1 to A2" },
      schedule: {
        days: "Monday to Friday",
        duration: "2 - 3 hours",  
        timeRange: "7:00 AM to 10:00 PM IST"
      },
      features: [
        "Intensive Learning",
        "Dynamic Environment",
        "Cultural Understanding",
        "Varied Teaching Methods"
      ],
      category: "intensive"
    }
    
  ], []);

  // --- Filter state and filtered courses ---
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    switch (activeFilter) {
      case "regular":
        return allCourses.filter(course => 
          course.title === "Master a Language - ML" || 
          course.title === "Immersion - IMM" || 
          course.title === "International Diploma - ID"
        );
      case "exam":
        return allCourses.filter(course => 
          course.title === "Immersion - IMM Fasttrack" || 
          course.title === "International Diploma - ID Fasttrack"
        );
      case "intensive":
        return allCourses.filter(course => 
          course.title === "Master a Language - ML"
        );
      default:
        return allCourses;
    }
  }, [activeFilter, allCourses]);

  // --- Carousel state and refs ---
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const courseDetailsRefs = useRef([]);

  // Reset the carousel index when the filter changes
  useEffect(() => {
    setCurrentCourseIndex(0);
  }, [activeFilter]);

  const goToPreviousCourse = () => {
    setCurrentCourseIndex(
      (prevIndex) => (prevIndex - 1 + filteredCourses.length) % filteredCourses.length
    );
  };

  const goToNextCourse = () => {
    setCurrentCourseIndex(
      (prevIndex) => (prevIndex + 1) % filteredCourses.length
    );
  };

  const getCardClass = (index) => {
    const total = filteredCourses.length;
    const prevIndex = (currentCourseIndex - 1 + total) % total;
    const nextIndex = (currentCourseIndex + 1) % total;

    if (index === currentCourseIndex) return "active";
    if (index === nextIndex) return "next";
    if (index === prevIndex) return "prev";
    return "";
  };

  // Auto-advance the carousel every 4 seconds
  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      goToNextCourse();
    }, 4000);
    return () => clearInterval(autoAdvanceTimer);
  }, [filteredCourses]);

  // Stats animation hooks with adjusted durations
  const studentsCount = useCountAnimation(20000, 3);
  const scholarshipCount = useCountAnimation(15, 2.5);
  const centersCount = useCountAnimation(7, 2);
  const successCount = useCountAnimation(95, 2.5);

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Premium Language Education</div>
          <h1 className="hero-title">
            Transform Your Career with{" "}
            <span className="highlight"> Professional Language Skills</span>
          </h1>
          <p className="hero-description">
            Choose from our expertly designed courses that have helped over
            20,000+ students achieve fluency and land their dream opportunities
            worldwide.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <motion.span
                className="stat-number"
                ref={studentsCount.ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {studentsCount.count.toLocaleString()}+
              </motion.span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-number"
                ref={scholarshipCount.ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {scholarshipCount.count}L+
              </motion.span>
              <span className="stat-label">Scholarship Awarded</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-number"
                ref={centersCount.ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {centersCount.count}+
              </motion.span>
              <span className="stat-label">Centers</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-number"
                ref={successCount.ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {successCount.count}%
              </motion.span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <h2 className="filter-title">Find Your Perfect Course</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Courses
            </button>
            <button
              className={`filter-btn ${activeFilter === "regular" ? "active" : ""}`}
              onClick={() => setActiveFilter("regular")}
            >
              Regular
            </button>
            <button
              className={`filter-btn ${activeFilter === "exam" ? "active" : ""}`}
              onClick={() => setActiveFilter("exam")}
            >
              Fasttrack
            </button>
            <button
              className={`filter-btn ${activeFilter === "intensive" ? "active" : ""}`}
              onClick={() => setActiveFilter("intensive")}
            >
              School Champs
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section (using filteredCourses) */}
      <div className="course-carousel-container">
        {filteredCourses.map((course, index) => (
          <div key={course.id} className={`course-card ${getCardClass(index)}`}>
            <div className="course-image-container">
              <img
                src={isMobile ? course.mobileImage : course.image}
                alt={course.title}
                className="course-image"
              />
            </div>
            <div className="course-card-content">
              <div className="carousel-course-level">{course.level}</div>
              <h2 className="carousel-course-title">{course.title}</h2>
              <p className="carousel-course-description">{course.description}</p>
              <button
                className="course-cta"
                onClick={() => {
                  setCurrentCourseIndex(index);
                  if (courseDetailsRefs.current[index]) {
                    courseDetailsRefs.current[index].scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Learn More
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
        <button className="nav-button prev" onClick={goToPreviousCourse}>
          &lt;
        </button>
        <button className="nav-button next" onClick={goToNextCourse}>
          &gt;
        </button>
      </div>

      {/* Detailed Information Sections (using filteredCourses) */}
      {filteredCourses.map((course, index) => (
        <section
          key={`detail-${course.id}`}
          className="course-detail-section"
          ref={(el) => (courseDetailsRefs.current[index] = el)}
        >
          <div className="container">
            <div className="detail-grid">
              <div className="detail-content">
                <h2 className="detail-title">
                  {course.title}
                </h2>
                <p className="detail-description">{course.fullDescription}</p>

                {/* Language Boxes Section */}
                {course.languages && (
                  <div className="languages-boxes">
                    {Array.isArray(course.languages) ? (
                      course.languages.map((lang, idx) => (
                        <div
                          key={idx}
                          className="language-box"
                          onClick={() => navigate(`/${lang.toLowerCase()}`)}
                        >
                          {lang}
                        </div>
                      ))
                    ) : (
                      Object.keys(course.languages).map((langKey, idx) => (
                        <div
                          key={idx}
                          className="language-box"
                          onClick={() => navigate(`/${langKey.toLowerCase()}`)}
                        >
                          {langKey}: {course.languages[langKey]}
                        </div>
                      ))
                    )}
                  </div>
                )}

                {course.proficiencyLevels && (
                  <div className="proficiency-section">
                    <h3>Proficiency Levels</h3>
                    <div className="proficiency-grid">
                      {course.proficiencyLevels.map((level, idx) => (
                        <div key={idx} className="proficiency-card">
                          <h4>{level.level}</h4>
                          <div className="level-codes">
                            {level.codes.map((code, codeIdx) => (
                              <span key={codeIdx} className="level-code">
                                {code}
                              </span>
                            ))}
                          </div>
                          <span className="timeframe">{level.timeframe}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {course.examTypes && (
                  <div className="exam-section">
                    <h3>Available Exams</h3>
                    <div className="exam-grid">
                      {course.examTypes.map((exam, idx) => (
                        <div key={idx} className="exam-card">
                          <span className="exam-type">{exam.type}</span>
                          <span className="exam-name">{exam.exam}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="schedule-section">
                  <h3>Class Schedule</h3>
                  <div className="schedule-info">
                    {course.schedule.days && (
                      <div className="schedule-item">
                        <strong>Days:</strong> {course.schedule.days}
                      </div>
                    )}
                    {course.schedule.options && (
                      <div className="schedule-item">
                        <strong>Options:</strong>{" "}
                        {course.schedule.options.join(", ")}
                      </div>
                    )}
                    {course.schedule.weekday && (
                      <div className="schedule-item">
                        <strong>Weekdays:</strong> {course.schedule.weekday}
                      </div>
                    )}
                    {course.schedule.weekend && (
                      <div className="schedule-item">
                        <strong>Weekends:</strong> {course.schedule.weekend}
                      </div>
                    )}
                    <div className="schedule-item">
                      <strong>Duration:</strong> {course.schedule.duration}
                    </div>
                    <div className="schedule-item">
                      <strong>Time Range:</strong> {course.schedule.timeRange}
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-sidebar">
                <div className="enrollment-card">
                  <h3>Ready to Start?</h3>
                  <div className="price-display">{course.price}</div>
                  <button 
                    className="enroll-btn"
                    onClick={() => window.location.href = 'tel:+917338881781'}
                  >
                    Enroll Now
                  </button>
                  <p className="enrollment-note">
                    Get started with a free consultation
                  </p>
                </div>

                <div className="contact-card">
                  <h4>Need Help?</h4>
                  <p>
                    Our language consultants are here to help you choose the right
                    course.
                  </p>
                  <div className="contact-methods">
                    <div className="contact-item">
                      <span>📞</span> +91 7338881781
                    </div>
                    <div className="contact-item">
                      <span>✉️</span> enquiry.isml@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Language Journey?</h2>
            <p>
              Join thousands of successful learners who have transformed their
              careers with ISML
            </p>
            <div className="cta-buttons">
              <button 
                className="cta-primary"
                onClick={() => window.open('https://studentportal.iypan.com/login', '_blank')}
              >
                Student Portal
              </button>
              <button 
                className="cta-secondary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = ISMLBrochure;
                  link.download = 'ISML Brochure.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;