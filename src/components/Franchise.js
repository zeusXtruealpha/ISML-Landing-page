import React, { useEffect, useState } from 'react';
import './Franchise.css';
import { motion, AnimatePresence } from 'framer-motion';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return count;
};

const Franchise = () => {
  return (
    <AnimatePresence>
      <div className="franchise-container">
        <div className="franchise-content">
          <motion.div 
            className="franchise-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="franchise-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="logo-text">Indian School for Modern Languages</span>
            </motion.div>
            
            <motion.h1 
              className="franchise-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Join the ISML Synergy Franchise Model – Transform Language Learning Across India!
            </motion.h1>

            <motion.p 
              className="franchise-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Looking for a future-ready and profitable education business? The ISML Synergy Franchise Model is designed to create a powerful network of language centers across Tier 1, 2, and 3 cities in India. Flexible, scalable, and high-revenue – this model ensures success for every franchise partner!
            </motion.p>

            <motion.div 
              className="franchise-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="stat-item">
                <h3><CountUp end={10} duration={2} />+</h3>
                <p>Institutional MOU </p>
              </div>
              <div className="stat-item">
                <h3>₹<CountUp end={15} duration={2.5} />L+</h3>
                <p>Scholarship Awarded</p>
              </div>
              <div className="stat-item">
                <h3><CountUp end={20} duration={3} />K+</h3>
                <p>Students</p>
              </div>
            </motion.div>

            <motion.div 
              className="franchise-benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h2>Why Choose the ISML Synergy Model?</h2>
              
              <motion.div 
                className="benefit-section"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>1. Multi-Center Synergy for Maximum Impact</h3>
                <ul>
                  <li>Become part of a unified network of ISML centers operating in multiple locations.</li>
                  <li>Leverage ISML's brand credibility and proven language education system.</li>
                </ul>
              </motion.div>

              <motion.div 
                className="benefit-section"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>2. Dual Revenue Streams for Consistent Growth</h3>
                <ul>
                  <li>In-Centre Learning: Offer structured language classes at your physical location.</li>
                  <li>At-Home Learning: Reach students nationwide through ISML's online platform.</li>
                </ul>
              </motion.div>

              <motion.div 
                className="benefit-section"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>3. Affordable Investment, High Returns</h3>
                <ul>
                  <li>Low Initial Investment: Start your franchise with a Registration & Onboarding Fee of ₹15,000.</li>
                  <li>Strong Earning Potential: Scale your income up to ₹35 Lakhs annually with strategic growth.</li>
                </ul>
              </motion.div>

              <motion.div 
                className="benefit-section"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>4. Exclusive Rights & Expansion Support</h3>
                <ul>
                  <li>Territorial Exclusivity: Secure a dedicated region and build your presence.</li>
                  <li>Scalability: Start with one center, expand to multiple centers within your territory.</li>
                </ul>
              </motion.div>

              <motion.div 
                className="benefit-section"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>5. Complete Operational & Marketing Support</h3>
                <ul>
                  <li>Comprehensive training for franchise owners and teachers.</li>
                  <li>Marketing & branding support to boost student enrollments.</li>
                  <li>Portal access for seamless operations and student management.</li>
                  <li>Continuous operational support to ensure franchise success.</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              className="franchise-cta-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <h2>How to Get Started?</h2>
              <ol>
                <li>Apply Online: Fill out our franchise inquiry form</li>
                <li>Consultation: Our team will analyze your market potential</li>
                <li>Onboarding: Receive training and support</li>
                <li>Launch & Grow: Start enrolling students</li>
              </ol>
              <motion.a 
                href="tel:7338880780" 
                className="franchise-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="franchise-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="franchise-hero"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Indian School for Modern Languages</h2>
              <p>Empowering India with Language Education</p>
              
              <div className="demand-section">
                <h3>Why Now? Growing Demand for Language Education!</h3>
                <ul>
                  <li>Global Careers: Professionals & students seek language fluency</li>
                  <li>Higher Education Abroad: Certifications in high demand</li>
                  <li>Business Growth: Entrepreneurs need foreign language skills</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Franchise; 
