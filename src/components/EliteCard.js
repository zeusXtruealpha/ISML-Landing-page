import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={toggleOpen}>
        <span>{question}</span>
        <span className={`faq-toggle-icon${isOpen ? ' open' : ''}`} aria-label={isOpen ? 'Collapse' : 'Expand'}>
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="#1a237e"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="#1a237e"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/><rect x="13" y="8" width="2" height="12" rx="1" fill="#fff"/></svg>
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

const EliteCard = () => {
  return (
    <div className="elite-card-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="icon">🏆</span>
            <span>Elite Membership</span>
          </div>
          <h1 className="hero-title">
            🎓 ISML Elite
          </h1>
          <p className="hero-subtitle">
            Empowering Learners - Unlock the Future of Language Learning
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="icon">👥</span>
              <span>10,000+ Students</span>
            </div>
            <div className="stat-item">
              <span className="icon">📚</span>
              <span>8+ Languages</span>
            </div>
            <div className="stat-item">
              <span className="icon">⭐</span>
              <span>Premium Support</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Who Should Buy Section */}
        <section className="who-should-buy">
          <div className="section-header">
            <h2>🤝 Who Should Buy This?</h2>
            <p>Perfect for ambitious learners at every stage</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Students</h3>
              <p>Long-term savings on multi-level courses with structured academic planning</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🧒</div>
              <h3>Parents</h3>
              <p>Structured academic plan with expert support for your child's language journey</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Final-Year Students</h3>
              <p>Boost placement prospects and prepare for international opportunities</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔁</div>
              <h3>Alumni</h3>
              <p>Continue your language journey with advanced-level courses</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Value Seekers</h3>
              <p>Anyone interested in maximizing value from ISML offerings</p>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="membership-plans">
          <div className="section-header">
            <h2>🪪 Choose Your Elite Plan</h2>
            <p>Flexible options designed for every learning goal</p>
          </div>
          <div className="plan-tiles">
            <div className="plan-tile basic">
              <div className="plan-header">
                <h3>₹49</h3>
                <div className="plan-name">ISML Elite<br/>EduPass</div>
                <div className="original-price">Original: ₹199</div>
              </div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>1 Year Validity</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Any 1 Language</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Online Mode</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>10% Course Discount</span>
                </div>
              </div>
              <button className="plan-button">Get EduPass</button>
            </div>

            <div className="plan-tile premium">
              <div className="popular-badge">
                <span className="icon">⭐</span>
                Most Popular
              </div>
              <div className="plan-header">
                <h3>₹99</h3>
                <div className="plan-name">ISML Elite<br/>ScholarPass</div>
                <div className="original-price">Original: ₹499</div>
              </div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>2 Years Validity</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>3 Languages (French, German, Japanese)</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Online + Offline</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Up to 12% Discount</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Study Abroad Guidance</span>
                </div>
              </div>
              <button className="plan-button">Get ScholarPass</button>
            </div>

            <div className="plan-tile vip">
              <div className="plan-header">
                <h3>₹199</h3>
                <div className="plan-name">ISML Elite<br/>InfinityPass</div>
                <div className="original-price">Original: ₹999</div>
              </div>
              <div className="plan-features">
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>3 Years Validity</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>All Current & Upcoming Languages</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Online + Offline</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Up to 15% Discount</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>3-Month Internship</span>
                </div>
                <div className="feature">
                  <span className="check-icon">✓</span>
                  <span>Priority Placement</span>
                </div>
              </div>
              <button className="plan-button">Get InfinityPass</button>
            </div>
          </div>
        </section>

        {/* Course Discounts */}
        <section className="discount-section">
          <div className="section-header">
            <h2>🎓 Course Fee Discounts</h2>
            <p>Save more on every course enrollment</p>
          </div>
          <div className="discount-table-wrapper">
            <table className="discount-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>EduPass<br/>₹49</th>
                  <th>ScholarPass<br/>₹99</th>
                  <th>InfinityPass<br/>₹199</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Master a Language (ML)</td>
                  <td><span className="discount-badge">10%</span></td>
                  <td><span className="discount-badge">10%</span></td>
                  <td><span className="discount-badge">10%</span></td>
                </tr>
                <tr>
                  <td>International Diploma (ID)</td>
                  <td><span className="discount-badge">10%</span></td>
                  <td><span className="discount-badge premium">12%</span></td>
                  <td><span className="discount-badge premium">12%</span></td>
                </tr>
                <tr>
                  <td>ID Fast Track</td>
                  <td><span className="discount-badge">10%</span></td>
                  <td><span className="discount-badge">10%</span></td>
                  <td><span className="discount-badge premium">12%</span></td>
                </tr>
                <tr>
                  <td>Immersion (IMM) & IMM Fast Track</td>
                  <td><span className="cross-icon">❌</span></td>
                  <td><span className="discount-badge premium">12%</span></td>
                  <td><span className="discount-badge gold">15%</span></td>
                </tr>
                <tr>
                  <td>LMS Courses</td>
                  <td><span className="cross-icon">❌</span></td>
                  <td><span className="discount-badge">5%</span></td>
                  <td><span className="discount-badge">5%</span></td>
                </tr>
                <tr>
                  <td>Referral Extra Discount</td>
                  <td><span className="cross-icon">❌</span></td>
                  <td><span className="discount-badge">5%</span></td>
                  <td><span className="discount-badge">5%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Academic Support Section */}
        <section className="benefits-section">
          <div className="section-header">
            <h2>📚 Academic & Learning Support</h2>
            <p>Comprehensive support for your learning journey</p>
          </div>
          <div className="benefits-comparison">
            <div className="benefit-category">
              <h3>
                <span className="icon">📖</span>
                Exam Preparation
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">🛡️</span>
                  <span>Past Exam Papers & Certification Prep (DELF, JLPT, Goethe)</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">⚡</span>
                  <span>Study Abroad Guidance (Premium+)</span>
                </div>
              </div>
            </div>
            <div className="benefit-category">
              <h3>
                <span className="icon">🌟</span>
                Workshops & Training
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">🎯</span>
                  <span>Free Online Workshops (Parenting, Exams, Skills)</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">👥</span>
                  <span>Member-Only Community Access</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Access Section */}
        <section className="benefits-section exclusive-section">
          <div className="section-header">
            <h2>🚀 Exclusive & Priority Access</h2>
            <p>Get ahead with premium opportunities</p>
          </div>
          <div className="benefits-comparison">
            <div className="benefit-category">
              <h3>
                <span className="icon">🔥</span>
                Early Access
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">🆕</span>
                  <span>Early Access to New Products (ISCA, ISE)</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">💼</span>
                  <span>Certified Internship Opportunities (1-3 months)</span>
                </div>
              </div>
            </div>
            <div className="benefit-category">
              <h3>
                <span className="icon">📈</span>
                Career Support
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">🎯</span>
                  <span>Priority Placement Assistance</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">⭐</span>
                  <span>Top Priority Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events & Community Section */}
        <section className="benefits-section events-section">
          <div className="section-header">
            <h2>🎉 Events & Community Perks</h2>
            <p>Connect, celebrate, and grow with fellow learners</p>
          </div>
          <div className="benefits-comparison">
            <div className="benefit-category">
              <h3>
                <span className="icon">🎭</span>
                Cultural Events
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">🎨</span>
                  <span>25-50% Off ISML Events (LingoArte)</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">📚</span>
                  <span>Free ISML Library Registration</span>
                </div>
              </div>
            </div>
            <div className="benefit-category">
              <h3>
                <span className="icon">💬</span>
                Community Access
              </h3>
              <div className="benefit-items">
                <div className="benefit-item">
                  <span className="icon">👨‍👩‍👧‍👦</span>
                  <span>Member-Only Community Group</span>
                </div>
                <div className="benefit-item">
                  <span className="icon">💡</span>
                  <span>Peer Learning & Discussions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="terms-section">
          <div className="section-header">
            <h2>📜 Terms & Conditions</h2>
            <p>Important information about your membership</p>
          </div>
          <div className="terms-grid">
            <div className="term-item">
              <h3>🎯 Eligibility</h3>
              <p>Open to Indian residents aged 13+. Parental consent required for minors.</p>
            </div>
            <div className="term-item">
              <h3>📧 Digital Delivery</h3>
              <p>Cards delivered digitally within 2 working days to registered email.</p>
            </div>
            <div className="term-item">
              <h3>🔐 Usage Policy</h3>
              <p>Non-transferable cards must be used only by registered learner.</p>
            </div>
            <div className="term-item">
              <h3>❌ Refund Policy</h3>
              <p>Non-refundable except for technical errors or duplicate payments.</p>
            </div>
            <div className="term-item">
              <h3>🔁 Upgrades & Downgrades</h3>
              <p>Upgrades within 30 days allowed. No downgrades permitted.</p>
            </div>
            <div className="term-item">
              <h3>⚖️ Legal Jurisdiction</h3>
              <p>All disputes governed by Indian Law. Courts of Chennai, Tamil Nadu.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>💡 Frequently Asked Questions</h2>
          <div className="faq-items">
            <FAQItem 
              question="1. What is the ISML Elite Membership?" 
              answer="The ISML Elite Card is a digital membership program that gives learners exclusive discounts, academic perks, and early access to premium courses and services offered by ISML." 
            />

            <FAQItem 
              question="2. How do I get my ISML Elite Card?" 
              answer="Once you register and complete the payment, you'll receive your digital membership card via email within 2 working days." 
            />

            <FAQItem 
              question="3. Is the card physical or digital?" 
              answer="It is a digital-only card. You'll receive a PDF or image version to your email for use during enrollments." 
            />

            <FAQItem 
              question="4. Can I use the card for any language course?" 
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
              question="5. Can I upgrade my card later?" 
              answer="Yes. You can upgrade within 30 days of purchase by paying the price difference (plus ₹10 processing). Downgrades are not allowed." 
            />

            <FAQItem 
              question="6. Is the membership refundable?" 
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
              question="7. Can I use the card for more than one course?" 
              answer="Yes! You can use it for multiple eligible courses within your validity period." 
            />

            <FAQItem 
              question="8. Is there any discount on GST or registration fees?" 
              answer="No. Discounts do not apply to GST, registration charges, or third-party services." 
            />

            <FAQItem 
              question="9. How does the referral benefit work?" 
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
              question="10. What happens if I misuse the card or share it?" 
              answer="Misuse (like sharing with others or fake referrals) will lead to termination without refund." 
            />

            <FAQItem 
              question="11. What if I lose access to my card?" 
              answer="You can request a free reissue by emailing us from your registered email ID. Limited to one reissue per year." 
            />

            <FAQItem 
              question="12. Can I transfer the membership to someone else?" 
              answer="No. Cards are non-transferable and tied to the registered learner's name." 
            />

            <FAQItem 
              question="13. Will I get help with international exams or study abroad?" 
              answer="Yes, depending on your membership: ScholarPass/InfinityPass members receive 1 free online consultation per year for study abroad planning. Access to past exam papers and prep materials is also included." 
            />

            <FAQItem 
              question="14. Does the card guarantee admission to ISML courses?" 
              answer="No. While the card offers discounts and perks, admission still depends on course availability and eligibility." 
            />

            <FAQItem 
              question="15. Where can I use the card benefits?" 
              answer="Only on official ISML platforms, directly through the institute. Benefits are not applicable through agents or external websites." 
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EliteCard;
