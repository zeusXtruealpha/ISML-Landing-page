import React, { useState } from 'react';
import './EliteCard.css';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={toggleOpen}>
        <span>{question}</span>
        <span className="faq-toggle-icon">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#6366f1"/>
              <path d="M8 12h8" stroke="white" strokeWidth="2"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#6366f1"/>
              <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

function EliteCard() {
  return (
    <div className="elite-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="elite-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="white"/>
              <path d="M3 17L12 22L21 17" fill="white"/>
              <path d="M3 12L12 17L21 12" fill="white"/>
            </svg>
            Elite Membership
          </div>
          <h1 className="hero-title">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '12px'}}>
              <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#fbbf24"/>
              <path d="M3 17L12 22L21 17" fill="#fbbf24"/>
              <path d="M3 12L12 17L21 12" fill="#fbbf24"/>
            </svg>
            ISML Elite
          </h1>
          <p className="hero-subtitle">Empowering Learners - Unlock the Future of Language Learning</p>
        </div>
      </div>

      <div className="main-content">
        {/* Who Should Buy Section */}
        <section className="section">
          <div className="section-card">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21" stroke="#6366f1" strokeWidth="2"/>
                <circle cx="12" cy="7" r="4" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Who Should Buy This?
            </h2>
            <p className="section-subtitle">Perfect for ambitious learners at every stage</p>
            
            <div className="target-audience-grid">
              <div className="audience-card">
                <div className="audience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="15" rx="2" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M8 21L12 17L16 21" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
          </div>
              <h3>Students</h3>
              <p>Long-term savings on multi-level courses with structured academic planning</p>
            </div>
              
              <div className="audience-card">
                <div className="audience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21" stroke="#6366f1" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
              <h3>Parents</h3>
              <p>Structured academic plan with expert support for your child's language journey</p>
            </div>
              
              <div className="audience-card">
                <div className="audience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M22 10V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V10" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M7 20V10" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M17 20V10" stroke="#6366f1" strokeWidth="2"/>
                    <path d="M2 10L12 15L22 10" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
              <h3>Final-Year Students</h3>
              <p>Boost placement prospects and prepare for international opportunities</p>
            </div>
              
              <div className="audience-card">
                <div className="audience-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                </div>
              <h3>Alumni</h3>
              <p>Continue your language journey with advanced-level courses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Elite Plan */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Choose Your Elite Plan
            </h2>
            <p className="section-subtitle">Flexible options designed for every learning goal</p>
          </div>
          
          <div className="plans-grid">
            {/* EduPass Plan */}
            <div className="plan-card">
              <div className="plan-content">
              <div className="plan-header">
                  <h3 className="plan-price">₹49</h3>
                  <div className="plan-details">
                    <h4 className="plan-name">ISML Elite EduPass</h4>
                    <p className="plan-original">Original: ₹199</p>
              </div>
                </div>
                
                <div className="plan-features">
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    1 Year Validity
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Any 1 Language
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Online Mode
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    10% Course Discount
                </div>
                </div>
                
                <button 
                  className="plan-button plan-button-basic"
                  onClick={() => window.open('https://rzp.io/rzp/edupass', '_blank')}
                >
                  Get EduPass
                </button>
              </div>
            </div>

            {/* ScholarPass Plan - Popular */}
            <div className="plan-card plan-popular">
              <div className="popular-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="white"/>
                </svg>
                Most Popular
              </div>
              <div className="plan-content">
              <div className="plan-header">
                  <h3 className="plan-price">₹99</h3>
                  <div className="plan-details">
                    <h4 className="plan-name">ISML Elite ScholarPass</h4>
                    <p className="plan-original">Original: ₹499</p>
              </div>
                </div>
                
                <div className="plan-features">
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
                    </svg>
                    2 Years Validity
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
                    </svg>
                    3 Languages
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
                    </svg>
                    Online + Offline
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
                    </svg>
                    Up to 12% Discount
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2"/>
                    </svg>
                    Study Abroad Guidance
                </div>
                </div>
                
                <button 
                  className="plan-button plan-button-popular"
                  onClick={() => window.open('https://rzp.io/rzp/scholarpass', '_blank')}
                >
                  Get ScholarPass
                </button>
              </div>
            </div>

            {/* InfinityPass Plan */}
            <div className="plan-card">
              <div className="plan-content">
              <div className="plan-header">
                  <h3 className="plan-price">₹199</h3>
                  <div className="plan-details">
                    <h4 className="plan-name">ISML Elite InfinityPass</h4>
                    <p className="plan-original">Original: ₹999</p>
              </div>
                </div>
                
                <div className="plan-features">
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    3 Years Validity
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    All Languages
                  </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Online + Offline
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Up to 15% Discount
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    3-Month Internship
                </div>
                  <div className="plan-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Priority Placement
                </div>
                </div>
                
                <button 
                  className="plan-button plan-button-premium"
                  onClick={() => window.open('https://rzp.io/rzp/infinitypass', '_blank')}
                >
                  Get InfinityPass
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Fee Discounts */}
        <section className="section">
          <div className="section-card">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Course Fee Discounts
            </h2>
            <p className="section-subtitle">Save more on every course enrollment</p>
            
            <div className="discount-table-container">
            <table className="discount-table">
              <thead>
                <tr>
                  <th>Program</th>
                    <th>
                      EduPass<br/>
                      <span className="price">₹49</span>
                    </th>
                    <th>
                      ScholarPass<br/>
                      <span className="price">₹99</span>
                    </th>
                    <th>
                      InfinityPass<br/>
                      <span className="price">₹199</span>
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Master a Language (ML)</td>
                    <td><span className="discount-badge green">10%</span></td>
                    <td><span className="discount-badge green">10%</span></td>
                    <td><span className="discount-badge green">10%</span></td>
                </tr>
                <tr>
                  <td>International Diploma (ID)</td>
                    <td><span className="discount-badge green">10%</span></td>
                    <td><span className="discount-badge blue">12%</span></td>
                    <td><span className="discount-badge blue">12%</span></td>
                </tr>
                <tr>
                  <td>ID Fast Track</td>
                    <td><span className="discount-badge green">10%</span></td>
                    <td><span className="discount-badge green">10%</span></td>
                    <td><span className="discount-badge blue">12%</span></td>
                </tr>
                <tr>
                  <td>Immersion Programs</td>
                    <td><span className="not-available">×</span></td>
                    <td><span className="discount-badge blue">12%</span></td>
                    <td><span className="discount-badge orange">15%</span></td>
                </tr>
                <tr>
                  <td>LMS Courses</td>
                    <td><span className="not-available">×</span></td>
                    <td><span className="discount-badge green">5%</span></td>
                    <td><span className="discount-badge green">5%</span></td>
                </tr>
                <tr>
                  <td>Referral Extra Discount</td>
                    <td><span className="not-available">×</span></td>
                    <td><span className="discount-badge green">5%</span></td>
                    <td><span className="discount-badge green">5%</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>

        {/* Exclusive Member Benefits */}
        <section className="section">
          <div className="section-card">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Exclusive Member Benefits
            </h2>
            <p className="section-subtitle">Unlock premium features and priority access</p>
            
            <div className="benefits-grid">
              <div className="benefit-section">
                <h3 className="benefit-section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6366f1" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="#6366f1" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                Academic Support
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="#10b981" strokeWidth="2"/>
                      <path d="M12 1V12L18.5 6.5" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Past Exam Papers & Certification Prep
                </div>
                <div className="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M4.5 16.5C3 15 3 12.5 3 10A9 9 0 0 1 21 10C21 12.5 21 15 19.5 16.5L12 21L4.5 16.5Z" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Study Abroad Guidance (Premium+)
                  </div>
                </div>
              </div>
              
              <div className="benefit-section">
                <h3 className="benefit-section-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#6366f1" strokeWidth="2"/>
                  </svg>
                Priority Access
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Early Access to New Products
                </div>
                <div className="benefit-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="7" width="20" height="15" rx="2" stroke="#10b981" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="#10b981" strokeWidth="2"/>
                    </svg>
                    Certified Internship Opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="section">
          <div className="section-card">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Terms & Conditions
            </h2>
            <p className="section-subtitle">Important information about your membership</p>
            
            <div className="terms-highlights">
              <div className="term-highlight">
                <div className="term-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="#ef4444" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="9" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
          </div>
                <div className="term-content">
                  <h4>Eligibility</h4>
              <p>Open to Indian residents aged 13+. Parental consent required for minors.</p>
            </div>
              </div>
              
              <div className="term-highlight">
                <div className="term-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="15" rx="2" stroke="#3b82f6" strokeWidth="2"/>
                    <path d="M8 2V6M16 2V6" stroke="#3b82f6" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="term-content">
                  <h4>Digital Delivery</h4>
              <p>Cards delivered digitally within 2 working days to registered email.</p>
            </div>
              </div>
              
              <div className="term-highlight">
                <div className="term-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 9.5 12H12M6 20H17A3 3 0 0 0 0 0V18A3 3 0 0 0 3 21Z" stroke="#f59e0b" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="term-content">
                  <h4>Usage Policy</h4>
              <p>Non-transferable cards must be used only by registered learner.</p>
            </div>
              </div>
              
              <div className="term-highlight">
                <div className="term-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#dc2626" strokeWidth="2"/>
                    <path d="M15 9L9 15M9 9L15 15" stroke="#dc2626" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="term-content">
                  <h4>Refund Policy</h4>
              <p>Non-refundable except for technical errors or duplicate payments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-card">
            <h2 className="section-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{marginRight: '12px'}}>
                <circle cx="12" cy="12" r="9" stroke="#6366f1" strokeWidth="2"/>
                <path d="M9.09 9A3 3 0 0 1 15 9C15 12 12 10.5 12 13.5" stroke="#6366f1" strokeWidth="2"/>
                <path d="M12 17.5H12.01" stroke="#6366f1" strokeWidth="2"/>
              </svg>
              Frequently Asked Questions
            </h2>
            
          <div className="faq-items">
            <FAQItem 
                question="What is the ISML Elite Membership?" 
              answer="The ISML Elite Card is a digital membership program that gives learners exclusive discounts, academic perks, and early access to premium courses and services offered by ISML." 
            />

            <FAQItem 
                question="How do I get my ISML Elite Card?" 
              answer="Once you register and complete the payment, you'll receive your digital membership card via email within 2 working days." 
            />

            <FAQItem 
                question="Is the card physical or digital?" 
              answer="It is a digital-only card. You'll receive a PDF or image version to your email for use during enrollments." 
            />

            <FAQItem 
                question="Can I use the card for any language course?" 
              answer={
                <>Yes! Based on your card type:
                  <ul>
                    <li>EduPass – 1 language of your choice</li>
                    <li>ScholarPass – French, German, and Japanese</li>
                    <li>InfinityPass – All current + upcoming languages</li>
                  </ul>
                </>
              } 
            />

            <FAQItem 
                question="Can I upgrade my card later?" 
              answer="Yes. You can upgrade within 30 days of purchase by paying the price difference (plus ₹10 processing). Downgrades are not allowed." 
            />

            <FAQItem 
                question="Is the membership refundable?" 
              answer={
                <>No. ISML Elite cards are non-refundable unless:
                  <ul>
                    <li>There was a technical issue during processing</li>
                    <li>You accidentally paid twice for the same card</li>
                  </ul>
                </>
              } 
            />

            <FAQItem 
                question="Can I use the card for more than one course?" 
              answer="Yes! You can use it for multiple eligible courses within your validity period." 
            />

            <FAQItem 
                question="Is there any discount on GST or registration fees?" 
              answer="No. Discounts do not apply to GST, registration charges, or third-party services." 
            />

            <FAQItem 
                question="How does the referral benefit work?" 
              answer={
                <>If you refer a friend who enrolls in a course with ISML:
                  <ul>
                    <li>You get an extra 5% off (ScholarPass/InfinityPass only)</li>
                    <li>The referral must result in a paid enrollment</li>
                    <li>Self-referrals or fraud will void the benefit</li>
                  </ul>
                </>
              } 
            />

            <FAQItem 
                question="What happens if I misuse the card or share it?" 
              answer="Misuse (like sharing with others or fake referrals) will lead to termination without refund." 
            />

              <FAQItem 
                question="What if I lose access to my card?" 
                answer="You can request a free reissue by emailing us from your registered email ID. Limited to one reissue per year." 
              />

              <FAQItem 
                question="Can I transfer the membership to someone else?" 
                answer="No. Cards are non-transferable and tied to the registered learner's name." 
              />

              <FAQItem 
                question="Will I get help with international exams or study abroad?" 
                answer={
                  <>Yes, depending on your membership:
                    <ul>
                      <li>ScholarPass/InfinityPass members receive 1 free online consultation per year for study abroad planning.</li>
                      <li>Access to past exam papers and prep materials is also included.</li>
                    </ul>
                  </>
                }
              />

              <FAQItem 
                question="Does the card guarantee admission to ISML courses?" 
                answer="No. While the card offers discounts and perks, admission still depends on course availability and eligibility." 
              />

              <FAQItem 
                question="Where can I use the card benefits?" 
                answer="Only on official ISML platforms, directly through the institute. Benefits are not applicable through agents or external websites." 
              />
              <FAQItem
                question="I'm a parent—can I manage my child's membership?"
                answer="Yes, the card must be in the learner's name, but all communication and support can be directed to the parent/guardian (especially for minors)."
              />
              <FAQItem
                question="What's the benefit for school/college students preparing for placements or abroad?"
                answer="ISML Elite offers discounts on diploma courses and free access to study abroad guidance (ScholarPass and InfinityPass only), helping students prepare affordably and confidently."
              />
              <FAQItem
                question="Can ISML change the membership benefits or terms later?"
                answer={
                  <>Yes. ISML may update the membership benefits, pricing, or terms from time to time.
                  Any changes will be:
                  <ul>
                    <li>Notified in advance via email to all active members</li>
                    <li>Updated on the official ISML website</li>
                    <li>These changes will apply only to new enrollments unless otherwise stated.</li>
                  </ul>
                  </>
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EliteCard;
