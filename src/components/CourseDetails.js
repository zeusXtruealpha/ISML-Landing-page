import React, { useState, useEffect, useMemo, useRef } from 'react';
import Lottie from 'lottie-react';
import './CourseDetails.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe

// Import animation data from JSON files
import languageAnimationData from './animations/language-learning.json';
import scheduleAnimationData from './animations/a2.json';

function CourseDetails() {
  const allCourses = useMemo(() => [
    {
      id: 1,
      title: "Master a Language - ML",
      level: "Beginner to Pro",
      description: "Master a Language of Your Choice for Just Rs. 499 per Month",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      details: {
        overview: "Are you ready to embark on a journey of language mastery right from the comfort of your own home? Look no further! Our language learning program offers you the opportunity to become fluent in a language of your choice without breaking the bank.",
        languages: ["French", "German", "Japanese"],
        proficiencyLevels: [
          { level: "Beginner-A1/A2/N5", timeframe: "in 1 year" },
          { level: "Amateur-A2/B1/N4", timeframe: "in 2 years" },
          { level: "Intermediate-B1/B2/N3", timeframe: "in 3 years" },
          { level: "Advanced-C1/C2/N2", timeframe: "in 4 years" },
          { level: "Pro-C2/N1", timeframe: "in 5 years" }
        ],
        schedule: {
          heading: "Class Schedule",
          tagline: "✨ Learn at Your Own Pace – Just 2 Days a Week!",
          intro: "We offer flexible weekend classes designed to fit your routine:",
          details: [
            { icon: '📅', text: "Days: Every Saturday and Sunday" }, // Using emojis as placeholders for now
            { icon: '⏰', text: "Timings: Pick any 1-hour slot between" },
            { icon: '📍', text: "7:00 AM to 10:00 PM IST" }
          ],
           conclusion: "Whether you're an early bird or a night owl, we've got a time slot for you!"
        }
      }
    },
    {
      id: 2,
      title: "International Diploma - ID",
      level: "Exam Preparation",
      description: "Crack your Language Proficiency Exam of Your Choice",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      details: {
        overview: "Don't miss out on the opportunity to broaden your horizons, connect with people from around the world, and gain a valuable skill. Join our language learning program today for to crack the International diploma exams and start your journey toward language fluency. Throughout your journey, you will make progress in all skills and components.",
        languages: ["French", "German", "Japanese"],
        proficiencyLevels: [
          { level: "French Exams-DELF A1/A2", timeframe: "Exam Preparation" },
          { level: "French Exams-DELF B1/B2", timeframe: "Exam Preparation" },
          { level: "French Exams-DALF C1/C2", timeframe: "Exam Preparation" },
          { level: "German Exams-A1/A2", timeframe: "Exam Preparation" },
          { level: "German Exams-B1/B2", timeframe: "Exam Preparation" },
          { level: "German Exams-C1/C2", timeframe: "Exam Preparation" },
          { level: "Japanese Exams-N5/N4", timeframe: "Exam Preparation" },
          { level: "Japanese Exams-N3/N2", timeframe: "Exam Preparation" },
          { level: "Japanese Exams-N1", timeframe: "Exam Preparation" }
        ],
        schedule: {
          heading: "Class Schedule",
          tagline: "Flexible Schedule Options",
          intro: "Choose any one of the Day Slot:",
          options: [
            "Monday- Wednesday",
            "Tuesday-Thursday",
            "Saturday-Sunday"
          ],
          duration: "Any one and half hours (1hr 30min) of the day",
          timeRange: "7:00 AM to 10:00 PM IST"
        }
      }
    },
    {
      id: 3,
      title: "Immersion - IMM",
      level: "Fast Track",
      description: "Fasttrack Course for Quick Learners",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      details: {
        overview: "Our goal is to help you acquire the necessary skills to communicate effectively in target language in a variety of situations, both oral and written. Our program is designed to meet the needs of learners from all backgrounds, regardless of their age, educational level or motivation to learn.",
        languages: {
          french: "A1 to B2",
          german: "A1 to B2"
        },
        schedule: {
          heading: "Class Schedule",
          tagline: "Intensive Learning Options",
          intro: "Choose any one of the Day Slot:",
          weekday: "Monday to Friday: 2hrs per day",
          weekend: "Saturday & Sunday: 3hrs per day"
        },
        features: [
          "Dynamic and interactive learning environment",
          "Progress in grammar, vocabulary, pronunciation",
          "Understanding of targeted language culture",
          "Variety of pedagogical methods"
        ]
      }
    }
  ], []);

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(allCourses[0]);
  const courseDetailsRefs = useRef([]);
<<<<<<< HEAD
=======
  const animatedItemsRefs = useRef([]);
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe

  const goToPreviousCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + allCourses.length) % allCourses.length);
  };

  const goToNextCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % allCourses.length);
  };

  const getCardClass = (index) => {
    const total = allCourses.length;
    const prevIndex = (currentCourseIndex - 1 + total) % total;
    const nextIndex = (currentCourseIndex + 1) % total;

    if (index === currentCourseIndex) return 'active';
    if (index === nextIndex) return 'next';
    if (index === prevIndex) return 'prev';
    return '';
  };

  useEffect(() => {
    setSelectedCourse(allCourses[currentCourseIndex]);
  }, [currentCourseIndex, allCourses]);

  // Effect for automatic carousel advance
  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      goToNextCourse();
    }, 4000); // Advance every 4 seconds (adjust as needed)

    // Clean up the timer when the component unmounts or currentCourseIndex changes
    return () => {
      clearInterval(autoAdvanceTimer);
    };
  }, [currentCourseIndex, allCourses]); // Re-run effect to reset timer when currentCourseIndex changes or allCourses changes

<<<<<<< HEAD
=======
  // Effect for scroll animation (observing all animated items)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the index from the data-index attribute or another way to order
            const index = parseInt(entry.target.dataset.animationIndex, 10); // Use a data attribute for explicit ordering
            if (!isNaN(index)) {
                 setTimeout(() => {
                   entry.target.classList.add('is-visible');
                 }, index * 100); // Adjust delay (100ms) as needed
            } else {
                 // Fallback for items without explicit index (like language boxes)
                 entry.target.classList.add('is-visible');
            }
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all language boxes and proficiency level items
    animatedItemsRefs.current.forEach(item => {
        if (item) {
            observer.observe(item);
        }
    });

    // Clean up the observer when the component unmounts or the courses data changes
    return () => {
        observer.disconnect();
    };
  }, [allCourses]); // Re-run effect if courses data changes

  // Reset animatedItemsRefs whenever allCourses changes to ensure we collect new refs
  useEffect(() => {
      animatedItemsRefs.current = [];
  }, [allCourses]);

>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
  // Reset animation states when the selected course for the details frame changes
  useEffect(() => {
      // Since we are now animating individual items on scroll into view,
      // we don't need to reset states based on selectedCourse or detailsFrameCourse anymore.
      // The observer handles visibility and triggers the animation.
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="course-details-page-container">
      <div className="course-carousel-container">
        {allCourses.map((course, index) => (
          <div
            key={course.id}
            className={`course-card ${getCardClass(index)}`}
            style={{
              zIndex: index === currentCourseIndex ? 10 : 
                      index === (currentCourseIndex + 1) % allCourses.length ? 5 :
                      index === (currentCourseIndex - 1 + allCourses.length) % allCourses.length ? 5 : 1
            }}
          >
            <div className="course-image-container">
              <img 
                src={course.image} 
                alt={course.title} 
                className="course-image"
              />
            </div>
            <div className="course-card-content">
              <div className="course-level">{course.level}</div>
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <button className="know-more-carousel-button" onClick={() => {
                setCurrentCourseIndex(index);
                if (courseDetailsRefs.current[index]) {
                  courseDetailsRefs.current[index].scrollIntoView({ behavior: 'smooth' });
                }
              }}>Know More</button>
            </div>
          </div>
        ))}
        <button className="nav-button prev" onClick={goToPreviousCourse}>&lt;</button>
        <button className="nav-button next" onClick={goToNextCourse}>&gt;</button>
      </div>

      {allCourses.map((course, courseIndex) => (
        <div key={course.id} className="course-details-frame" ref={el => courseDetailsRefs.current[courseIndex] = el}>
          <div className="course-details-content mixed-content">
            <div className="course-details-text">
              <h2>{course.title}</h2>
              <p className="course-overview">{course.details.overview}</p>
              
              {/* Available Languages & Proficiency Levels Section */}
              {(course.details.languages || course.details.proficiencyLevels) && (
                <div className="details-section available-languages-section">
                  {/* Combined container for content and animation */}
                  <div className="languages-proficiency-combined-content">
                    {/* Container for Languages and Proficiency Levels (vertical stack on small, horizontal on large) */}
                    <div className="languages-and-proficiency-container">
                      {/* Available Languages Subsection */}
                      {course.details.languages && (
                        <div className="available-languages-subsection">
                          <h3>Available Languages</h3>
                          <div className="language-boxes-container">
                            {Array.isArray(course.details.languages) ? (
                              course.details.languages.map((lang, langIndex) => (
<<<<<<< HEAD
                                <Link key={langIndex} to={`/${lang.toLowerCase()}`} className="language-box">
=======
                                <div key={langIndex} className="language-box" ref={el => animatedItemsRefs.current.push(el)}>
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
                                  <div className="language-box-content">
                                    <span>{lang}</span>
                                    <button className="know-more-button">Know More</button>
                                  </div>
<<<<<<< HEAD
                                </Link>
                              ))
                            ) : (
                             <>
                                <Link to="/french" className="language-box">
=======
                                </div>
                              ))
                            ) : (
                             <>
                                <div className="language-box" ref={el => animatedItemsRefs.current.push(el)}>
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
                                  <div className="language-box-content">
                                    <span>French: {course.details.languages.french}</span>
                                    <button className="know-more-button">Know More</button>
                                  </div>
<<<<<<< HEAD
                                </Link>
                                <Link to="/german" className="language-box">
=======
                                </div>
                                <div className="language-box" ref={el => animatedItemsRefs.current.push(el)}>
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
                                  <div className="language-box-content">
                                    <span>German: {course.details.languages.german}</span>
                                    <button className="know-more-button">Know More</button>
                                  </div>
<<<<<<< HEAD
                                </Link>
=======
                                </div>
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
                             </>
                          )}
                          </div>
                        </div>
                      )}

                      {/* Proficiency Levels Section */}
                      {course.details.proficiencyLevels && (
                        <div className="proficiency-levels-subsection">
                           <h3>Proficiency Levels</h3>
                            <div className="proficiency-levels-container">
                              {course.details.proficiencyLevels.map((level, levelIndex) => (
<<<<<<< HEAD
                                <div key={levelIndex} className="proficiency-level-item">
=======
                                <div key={levelIndex} className="proficiency-level-item" data-animation-index={levelIndex} ref={el => animatedItemsRefs.current.push(el)}>
>>>>>>> cf4d946c8618d0f2e45d4cae65788f50d4ea67fe
                                  <h4 className="proficiency-level-title">{level.level.split('-')[0]}</h4>
                                  <div className="proficiency-level-box">
                                    <div className="level-codes">
                                      {level.level.split('-')[1].split('/').map((code, codeIndex) => (
                                        <span key={codeIndex} className="level-code">{code.trim()}</span>
                                      ))}
                                    </div>
                                    <span className="timeframe-box">{level.timeframe}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                        </div>
                      )}
                    </div>

                    {/* Language Animation */}
                    <div className="language-animation-available-languages">
                      <Lottie
                        animationData={languageAnimationData}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                        className="language-animation-lottie"
                      />
                    </div>
                  </div>
                </div>
              )}

              {course.details.exams && (
                <div className="details-section">
                  <h3>Available Exams</h3>
                  <ul>
                    <li><strong>French:</strong> {course.details.exams.french}</li>
                    <li><strong>German:</strong> {course.details.exams.german}</li>
                    <li><strong>Japanese:</strong> {course.details.exams.japanese}</li>
                  </ul>
                </div>
              )}

              {course.details.schedule && (
                <div className="details-section schedule-section">
                  <h3>{course.details.schedule.heading}</h3>
                  <div className="schedule-content">
                    <div className="schedule-text">
                      <p className="schedule-tagline">{course.details.schedule.tagline}</p>
                      <p>{course.details.schedule.intro}</p>

                      {course.details.schedule.options ? (
                        <ul>
                          {course.details.schedule.options.map((option, optionIndex) => (
                            <li key={optionIndex}>{option}</li>
                          ))}
                        </ul>
                      ) : (course.details.schedule.details || course.details.schedule.weekday || course.details.schedule.weekend || course.details.schedule.duration || course.details.schedule.timeRange) && (
                        <div className="schedule-details-list">
                          {course.details.schedule.details && course.details.schedule.details.map((item, itemIndex) => (
                              <p key={itemIndex} className="schedule-detail-item">
                                  <span className="schedule-icon">{item.icon}</span>
                                  {item.text}
                              </p>
                          ))}
                           {course.details.schedule.weekday && (
                            <p className="schedule-detail-item">
                               <span className="schedule-icon">📅</span> {/* Placeholder icon */}
                              {course.details.schedule.weekday}
                              </p>
                          )}
                          {course.details.schedule.weekend && (
                            <p className="schedule-detail-item">
                               <span className="schedule-icon">📅</span> {/* Placeholder icon */}
                              {course.details.schedule.weekend}
                              </p>
                          )}
                          {course.details.schedule.duration && (
                               <p className="schedule-detail-item">
                               <span className="schedule-icon">⏰</span> {/* Placeholder icon */}
                              {course.details.schedule.duration}
                              </p>
                          )}
                           {course.details.schedule.timeRange && (
                               <p className="schedule-detail-item">
                               <span className="schedule-icon">📍</span> {/* Placeholder icon */}
                              {course.details.schedule.timeRange}
                              </p>
                          )}
                        </div>
                      )}
                       {course.details.schedule.conclusion && (
                        <p className="schedule-conclusion">{course.details.schedule.conclusion}</p>
                      )}
                    </div>
                    {/* Schedule Lottie animation */}
                    <div className="schedule-animation">
                      <Lottie
                        animationData={scheduleAnimationData}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                        className="schedule-lottie-animation"
                      />
                    </div>
                  </div>
                </div>
              )}

              {course.details.features && (
                <div className="details-section">
                  <h3>Course Features</h3>
                  <ul>
                    {course.details.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails; 