import React, { useEffect } from 'react';
import './Japanese.css';
import { motion } from 'framer-motion';

function Japanese() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="japanese-container">
      <motion.div 
        className="japanese-hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get Ahead with ISML for JLPT Registration
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Welcome to Indian School for Modern Languages Educational Consulting! Our team of experienced educators is dedicated to helping students achieve their academic goals. We offer a range of services, including academic coaching, college application assistance, and test preparation.
        </motion.p>
        <motion.button 
          className="contact-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={() => window.location.href = 'tel:+917338881781'}
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.section 
        className="course-overview"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Online Japanese Classes With ISML</motion.h2>
        <motion.p variants={itemVariants} className="overview-text">
          The Indian School for Modern Languages (ISML) offers online Japanese language courses that cater to different proficiency levels. These courses are designed to provide a comprehensive learning experience with options for private, group, and specialized lessons tailored to your needs.
        </motion.p>
      </motion.section>

      <motion.section 
        className="course-structure"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Course Structure</motion.h2>
        <div className="structure-grid">
          {[
            {
              title: "Private Lessons",
              description: "One-on-one sessions for personalized learning and focused attention."
            },
            {
              title: "Group Lessons",
              description: "Collaborative environment with peers, maintaining a steady pace."
            },
            {
              title: "Specialized Courses",
              description: "Focused on areas such as daily conversation, business conversation, and test preparation."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="structure-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="features-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Features</motion.h2>
        <div className="features-grid">
          {[
            {
              title: "Expert Instructors",
              description: "Courses are led by native speakers who are trained in modern teaching methodologies."
            },
            {
              title: "Flexible Scheduling",
              description: "Classes are scheduled to accommodate different time zones, making it convenient for learners globally."
            },
            {
              title: "Interactive Learning",
              description: "Use of interactive platforms to enhance engagement and learning efficiency."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="jlpt-levels"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>JAPANESE LANGUAGE PROFICIENCY TEST – (JLPT)</motion.h2>
        <div className="levels-grid">
          {[
            {
              level: "N5",
              title: "Level 5",
              content: [
                "Hiragana and Katakana",
                "Grammar",
                "Vocabulary",
                "Renshu",
                "Basic Kanji + Mock Test"
              ],
              objectives: "Based on Japan Foundation methodology, the objective is that the student has mastered the basic elements of grammar, knows Hiragana, Katakana & around 100 kanji & 800 words, has the ability to engage in simple, conversation & to read and write short, simple sentences.",
              benefits: "On completion of this training Students will be able to read & understand typical expressions & sentences written in hiragana, katakana, & basic kanji & are able to pick information from short conversations spoken slowly."
            },
            {
              level: "N4",
              title: "Level 4",
              content: [
                "Grammar",
                "Vocabulary",
                "Renshu and Kaiwa",
                "Kanji + Mock Test"
              ],
              objectives: "Based on Japan Foundation methodology, the objective is that the participant has mastered grammar to a limited level, knows around 300 kanji and 1,500 words, has the ability to take part in every day conversation and to read and write simple sentences.",
              benefits: "On completion of this training participants will be able to read and understand passages on familiar daily topics written in basic vocabulary and kanji and is able to listen and comprehend conversations encountered in daily life."
            },
            {
              level: "N3",
              title: "Level 3",
              content: [
                "Grammar",
                "Vocabulary",
                "Renshu and Kaiwa",
                "Kanji (Reading and Listening Comprehension)",
                "Revision and Mock Tests"
              ],
              objectives: "Based on Japan Foundation methodology, the objective is that the participant has mastered around 850 kanji and 3000 words. You will able to read slightly, listen and comprehend conversation in everyday situations, spoken at near natural speed.",
              benefits: "On completion of this training participants will be able to read and understand written materials concerning everyday topics and is also able to grasp summary information such as newspaper headlines."
            }
          ].map((level, index) => (
            <motion.div 
              key={index}
              className="level-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="level-header">
                <span className="level-badge">{level.level}</span>
                <h3>{level.title}</h3>
              </div>
              <div className="level-content">
                <div className="content-list">
                  {level.content.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="content-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
                <div className="objectives">
                  <h4>Course Objectives</h4>
                  <p>{level.objectives}</p>
                </div>
                <div className="benefits">
                  <h4>Benefits</h4>
                  <p>{level.benefits}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          JOIN JAPANESE LANGUAGE LESSONS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Welcome to Indian School for Modern Languages, your go-to source for personalized education consulting services. We offer expert guidance and support to help students achieve their academic goals. Contact us today to learn more!
        </motion.p>
        <motion.button 
          className="contact-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          onClick={() => window.location.href = 'tel:+917338881781'}
        >
          Click here to contact us
        </motion.button>
      </motion.section>
    </div>
  );
}

export default Japanese; 