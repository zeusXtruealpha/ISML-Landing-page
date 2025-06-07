import React from 'react';
import './ContactUs.css';
import contactIllustration from '../assets/mey2_1uhi_220829.jpg'; // Import the jpg image
import chatIcon from '../assets/chat.svg';
import supportIcon from '../assets/support.svg';
// Note: .eps files usually require conversion or specific loaders for web use.

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-header-section">
        <div className="contact-header-content">
          <h1>Get in touch<span>.</span></h1>
          <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
        </div>
        <div className="contact-illustrations">
          {/* Replace placeholders with the actual image */}
          <img src={contactIllustration} alt="Contact illustration" className="contact-bg-illustration" />
        </div>
      </div>

      <div className="contact-cards-section">
        <div className="contact-card-item">
          <div className="card-icon">
            <img src={chatIcon} alt="Chat" />
          </div>
          <h2>Talk to Admission Counsellor</h2>
          <p>Interested in ISML's offerings? Just pick up the phone to chat with a member of our sales team.</p>
          <p className="contact-number">+91 7338881781</p>
          <a href="https://wa.me/917338881781" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
        </div>

        <div className="contact-card-item">
          <div className="card-icon">
            <img src={supportIcon} alt="Support" />
          </div>
          <h2>Contact Customer Support</h2>
          <p>Need a hand? Our ISML Support Team is here to help. We're available anytime — reach out to us whenever you need. </p>
          <p className="contact-email">enquiry.isml@gmail.com</p>
          <a href="mailto:enquiry.isml@gmail.com" target="_blank" rel="noopener noreferrer" className="support-button">Contact Support</a>
        </div>

        <div className="contact-card-item">
          <div className="card-icon">
            <img src={chatIcon} alt="Corporate" />
          </div>
          <h2>Corporate Tie Ups</h2>
          <p>Interested in partnering with Us? Let's discuss how we can create value together through corporate collaborations.</p>
          <p className="contact-number">+91 7338880780</p>
          <a href="https://wa.me/917338880780" target="_blank" rel="noopener noreferrer" className="whatsapp-button">Contact Now</a>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959126217038!2d80.14604247430194!3d12.910348616219743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9a3c1c9625%3A0x9978748a9f9f7184!2sIndian%20School%20for%20Modern%20Languages!5e0!3m2!1sen!2sin!4v1748088360425!5m2!2sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs; 