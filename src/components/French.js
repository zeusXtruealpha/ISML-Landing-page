import React, { useEffect } from 'react';
import './French.css';
import { motion, AnimatePresence } from 'framer-motion';

function French() {
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
    <div className="french-container">
      <motion.div 
        className="french-hero"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          BEST FRENCH LANGUAGE COURSE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Online French Classes In India
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Looking for the best online French classes or courses? At the ISML, we offer French language lessons tailored to your needs. Whether you're a beginner or looking to enhance your conversational skills, our online courses are designed to meet your goals. With our curriculum aligned with the CEFR standards.
        </motion.p>
        <motion.button 
          className="contact-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => window.location.href = 'tel:+917338881781'}
        >
          Contact Us!
        </motion.button>
      </motion.div>

      <motion.section 
        className="benefits-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Benefits of Online French Classes</motion.h2>
        <div className="benefits-grid">
          {[
            {
              title: "Flexible Scheduling",
              content: "One of the primary advantages of online French classes is the flexibility they offer in terms of scheduling. Learners can choose the time that best suits their daily routine, eliminating the constraints of traditional classroom schedules."
            },
            {
              title: "Native Instructors",
              content: "Online platforms often collaborate with native-speaking instructors, providing learners with an authentic language experience. Learning from a native speaker enhances pronunciation and cultural understanding."
            },
            {
              title: "Diverse Resources",
              content: "Learn French online to acquire a diverse range of learning resources, including video lessons, interactive exercises, and multimedia content. This variety caters to different learning styles, making the process engaging and effective."
            }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="levels-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Levels in the French Language Course</motion.h2>
        <div className="levels-grid">
          {[
            {
              level: "A1",
              title: "French A1 Level",
              features: [
                "Self-Introduction",
                "Alphabets – Numbers",
                "Framing of common sentences",
                "Basic Grammar with vocabulary for day-to-day usage",
                "Get to learn to speak in the present tense"
              ]
            },
            {
              level: "A2",
              title: "French A2 Level",
              features: [
                "A little advanced level",
                "Express your feelings (hunger, thirst)",
                "Will be able to express your habits, likes etc.",
                "Will be able to understand Newspaper ads",
                "Get to learn to speak in all tenses",
                "You can explain your profile"
              ]
            },
            {
              level: "B1",
              title: "French B1 Level",
              features: [
                "Will be able to speak with peers and friends",
                "Narrate any incidences like a sport event or a movie",
                "Can speak and write in proper vocabulary",
                "Can create your E-mails",
                "Can participate in GD's",
                "Write opinion about various matters"
              ]
            },
            {
              level: "B2",
              title: "French B2 Level",
              features: [
                "You can speak fluently",
                "React to ideas related to Science, Technology etc.",
                "Can discuss ideas, Opinion, Benefits and advantages",
                "Can write grammatically on various topics",
                "Course Duration: 100 Hrs"
              ]
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
                {level.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="level-card advanced"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="level-header">
              <span className="level-badge">C1/C2</span>
              <h3>French C1 and C2 Levels</h3>
            </div>
            <div className="level-content">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                In these very advanced levels, you can read, write and understand a wide range of complex and lengthy text
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                You can communicate in the language efficiently for Social, Academic and Professional purposes
              </motion.div>
            </div>
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
          Join French Language Lessons
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Join our vibrant community at the Indian School for Modern Languages and embark on a journey of linguistic excellence. Register now to unlock a world of language learning opportunities!
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

export default French; 