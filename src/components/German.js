import React, { useEffect } from 'react';
import './German.css';
import { motion } from 'framer-motion';

function German() {
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
    <div className="german-container">
      <motion.div 
        className="german-hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          German Language Course with Indian School for Modern Languages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our team of educational consultants has years of experience helping students achieve their academic goals. From personalized academic coaching to college application assistance and test preparation, we are dedicated to providing the guidance and support necessary for students to succeed.
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
        className="levels-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Course Structure and Levels</motion.h2>
        <div className="levels-grid">
          {[
            {
              level: "A1",
              title: "Beginner",
              description: "Introduces basic phrases and expressions to satisfy immediate needs, basic conversations, and foundational grammar."
            },
            {
              level: "A2",
              title: "Elementary",
              description: "Builds on A1, focusing on commonly used expressions, simple communication tasks, and basic descriptions."
            },
            {
              level: "B1/B2",
              title: "Intermediate",
              description: "Covers more complex grammar, extended conversations, and the ability to handle travel situations and professional contexts."
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
              <p className="level-description">{level.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="modules-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Learning Modules</motion.h2>
        <div className="modules-grid">
          <motion.div 
            className="module-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <h3>Core Skills</h3>
            <p>Reading, Writing, Speaking, and Listening: Each module is structured to improve specific skills, with integrated activities for comprehensive language development.</p>
          </motion.div>
          <motion.div 
            className="module-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <h3>Cultural Insights</h3>
            <p>Courses include cultural aspects of German-speaking countries, which is essential for learners planning to travel or work in these regions.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="format-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Course Format</motion.h2>
        <div className="format-grid">
          <motion.div 
            className="format-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <h3>Flexible Learning</h3>
            <p>Online and Offline Classes: Flexible learning options are available, including both group sessions and personalized one-on-one instruction.</p>
          </motion.div>
          <motion.div 
            className="format-card"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <h3>Expert Instructors</h3>
            <p>Certified Trainers: Courses are taught by certified instructors, including native speakers, ensuring high-quality language education.</p>
          </motion.div>
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
          JOIN German LANGUAGE LESSONS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          We provide personalized educational consulting services to help students achieve their academic goals. Contact us today to learn more!
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

export default German; 