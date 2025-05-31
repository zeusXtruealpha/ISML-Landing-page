import React from 'react';
import './PrivacyPolicy.css'; // Assuming you might want to add styles

function PrivacyPolicy() {
  // Function to handle smooth scrolling (will be added to links later)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-policy-container">
      {/* Breadcrumbs Placeholder */}
      {/* Removed breadcrumbs div */}

      <div className="privacy-policy-main-content">
        <div className="privacy-policy-sidebar">
          {/* The sidebar content will be styled to be on the left */}
          <h3>Privacy Policy</h3>
          <ul>
            <li><a href="#what-this-policy-covers" onClick={(e) => { e.preventDefault(); scrollToSection('what-this-policy-covers'); }}>What this policy covers</a></li>
            <li><a href="#information-we-collect" onClick={(e) => { e.preventDefault(); scrollToSection('information-we-collect'); }}>Information We Collect</a></li>
            <li><a href="#legal-basis-processing" onClick={(e) => { e.preventDefault(); scrollToSection('legal-basis-processing'); }}>Legal Basis for Data Processing</a></li>
            <li><a href="#how-we-use-info" onClick={(e) => { e.preventDefault(); scrollToSection('how-we-use-info'); }}>How We Use Your Information</a></li>
            <li><a href="#data-sharing" onClick={(e) => { e.preventDefault(); scrollToSection('data-sharing'); }}>Data Sharing & Third-Party Disclosures</a></li>
            <li><a href="#international-transfers" onClick={(e) => { e.preventDefault(); scrollToSection('international-transfers'); }}>International Data Transfers</a></li>
            <li><a href="#data-retention" onClick={(e) => { e.preventDefault(); scrollToSection('data-retention'); }}>Data Retention Policy</a></li>
            <li><a href="#your-rights" onClick={(e) => { e.preventDefault(); scrollToSection('your-rights'); }}>Your Rights Under GDPR & Indian Data Protection Laws</a></li>
            <li><a href="#cookies" onClick={(e) => { e.preventDefault(); scrollToSection('cookies'); }}>Cookies & Tracking Technologies</a></li>
            <li><a href="#data-security" onClick={(e) => { e.preventDefault(); scrollToSection('data-security'); }}>Data Security Measures</a></li>
            <li><a href="#third-party-links" onClick={(e) => { e.preventDefault(); scrollToSection('third-party-links'); }}>Third-Party Links</a></li>
            <li><a href="#changes-to-policy" onClick={(e) => { e.preventDefault(); scrollToSection('changes-to-policy'); }}>Changes to This Privacy Policy</a></li>
            <li><a href="#contact-us" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a></li>
          </ul>
          {/* Add other sidebar items as needed */}
        </div>
        <div className="privacy-policy-content">
      <h1>Privacy Policy</h1>
          
          <p className="effective-date">Effective starting: October 2, 2024 (<a href="#">view archived versions</a>) {/* Placeholder for effective date and link */}</p>

          <h2 id="what-this-policy-covers">What this policy covers</h2>
          <p>
            Your privacy is important to us, and so is being transparent about how we collect, use,
            and share information about you. This policy is intended to help you understand:
          </p>
          <ul className="privacy-policy-intro-links">
            <li><a href="#information-we-collect" onClick={(e) => { e.preventDefault(); scrollToSection('information-we-collect'); }}>What information we collect about you</a></li>
            <li><a href="#how-we-use-info" onClick={(e) => { e.preventDefault(); scrollToSection('how-we-use-info'); }}>How we use information we collect</a></li>
            <li><a href="#data-sharing" onClick={(e) => { e.preventDefault(); scrollToSection('data-sharing'); }}>How we disclose information we collect</a></li>
            <li><a href="#data-security" onClick={(e) => { e.preventDefault(); scrollToSection('data-security'); }}>How we store and secure information we collect</a></li>
            <li><a href="#data-retention" onClick={(e) => { e.preventDefault(); scrollToSection('data-retention'); }}>How long we keep information</a></li>
            <li><a href="#your-rights" onClick={(e) => { e.preventDefault(); scrollToSection('your-rights'); }}>How to access and control your information</a></li>
          </ul>

          <h2 id="information-we-collect">1. Information We Collect</h2>
          <p>We may collect the following types of information when you use our website or services:</p>

          <h3>1.1 Personal Information</h3>
          <ul>
            <li>Full name, email address, phone number, and postal address</li>
            <li>Date of birth, gender, nationality, and educational background (for course enrollment)</li>
            <li>Payment details for course registration (processed securely via third-party payment providers)</li>
            <li>Any other details you voluntarily provide (e.g., inquiries, feedback, or job applications)</li>
          </ul>

          <h3>1.2 Non-Personal Information</h3>
          <ul>
            <li>Browser type, device information, and operating system</li>
            <li>IP address and geographic location (if enabled by your device)</li>
            <li>Website usage data, such as pages visited and time spent on our site</li>
          </ul>

          <h2 id="legal-basis-processing">2. Legal Basis for Data Processing (GDPR & DPDP Compliance)</h2>
          <p>We process your data based on:</p>
          <ul>
            <li><strong>Consent</strong> – When you voluntarily provide personal data (e.g., signing up for courses or newsletters).</li>
            <li><strong>Contractual Necessity</strong> – To provide educational services as per your enrollment.</li>
            <li><strong>Legitimate Interests</strong> – To improve our services and user experience.</li>
            <li><strong>Legal Obligation</strong> – To comply with regulatory requirements under Indian law and GDPR.</li>
          </ul>
          <p>You have the right to withdraw your consent at any time.</p>

          <h2 id="how-we-use-info">3. How We Use Your Information</h2>
          <p>Your data is used for:</p>
          <ul>
            <li>Processing course enrollments and providing educational services</li>
            <li>Sending course updates, exam schedules, and administrative communications</li>
            <li>Personalizing user experience and improving website functionality</li>
            <li>Processing payments securely and preventing fraudulent transactions</li>
            <li>Complying with legal and regulatory requirements</li>
          </ul>
          <p>We do not sell, rent, or trade your personal data.</p>

          <h2 id="data-sharing">4. Data Sharing & Third-Party Disclosures</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Service providers (e.g., payment gateways, email platforms, cloud storage)</li>
            <li>Government authorities when required by law</li>
            <li>Accredited institutions or partners for certification, training, or placements</li>
          </ul>
          <p>All third-party providers comply with GDPR, DPDP Act, and IT Act security standards.</p>

          <h2 id="international-transfers">5. International Data Transfers (GDPR Compliance)</h2>
          <p>If we transfer your data outside the European Economic Area (EEA), we ensure adequate safeguards are in place, such as:</p>
          <ul>
            <li>Data Protection Agreements with third parties</li>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          </ul>

          <h2 id="data-retention">6. Data Retention Policy</h2>
          <p>We retain your personal data only for as long as necessary:</p>
          <ul>
            <li>Course-related data: 5 years after completion</li>
            <li>Financial transaction data: As per tax & legal requirements</li>
            <li>Marketing preferences: Until you opt-out</li>
          </ul>
          <p>Upon request, we delete or anonymize data per GDPR and DPDP guidelines.</p>

          <h2 id="your-rights">7. Your Rights Under GDPR & Indian Data Protection Laws</h2>
          <p>Under GDPR (for EU users), you have the right to:</p>
          <ul>
            <li> Access, correct, or delete your data</li>
            <li> Restrict or object to processing</li>
            <li> Data portability (receive your data in a structured format)</li>
            <li> Lodge a complaint with a Data Protection Authority (DPA)</li>
          </ul>

          <p>Under the DPDP Act & IT Act (India), you have the right to:</p>
          <ul>
            <li> Know how your data is being collected and used</li>
            <li> Seek correction or deletion of your personal data</li>
            <li> Withdraw consent at any time</li>
          </ul>

          <p>To exercise these rights, contact us at learnwithisml@iypan.in.</p>

          <h2 id="cookies">8. Cookies & Tracking Technologies</h2>
          <p>We use cookies to enhance user experience. You can control or disable cookies via your browser settings.</p>

          <h2 id="data-security">9. Data Security Measures</h2>
          <p>We implement:</p>
          <ul>
            <li>Encryption for data storage and transmission</li>
            <li>Secure servers with restricted access</li>
            <li>Regular security audits to prevent unauthorized access</li>
          </ul>
          <p>However, no system is 100% secure. You share data at your own risk.</p>

          <h2 id="third-party-links">10. Third-Party Links</h2>
          <p>Our website may contain links to external websites. We are not responsible for their privacy practices. Please review their policies before sharing data.</p>

          <h2 id="changes-to-policy">11. Changes to This Privacy Policy</h2>
          <p>We may update this policy periodically. Significant changes will be notified via email or website notice.</p>

          <h2 id="contact-us">12. Contact Us</h2>
          <p>For privacy-related inquiries or to exercise your rights, contact:</p>
          <p>
            <strong>Indian School for Modern Languages (ISML)</strong><br/>
            IYPAN Educational Centre Pvt. Ltd.<br/>
            Email: <a href="mailto:learnwithisml@iypan.in">learnwithisml@iypan.in</a><br/>
            Phone: <a href="tel:+91-7338881781">+91-7338881781</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 