import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Advantages of learning French:',
    answer: `<ul>
      <li><b>Global Communication:</b> French is one of the most widely spoken languages in the world, with over 275 million speakers. It is an official language in 29 countries, including Canada, Switzerland, Belgium, and various African nations. Learning French can open doors to communication with people in these regions.</li>
      <li><b>Travel Opportunities:</b> France is one of the world's top tourist destinations. Knowing French can enhance your travel experiences in France and other French-speaking countries. It can also make it easier to navigate transportation, order food, and interact with locals.</li>
      <li><b>Cultural Enrichment:</b> Learning French allows you to immerse yourself in French culture. You can enjoy French literature, cinema, music, and art in their original language, gaining a deeper understanding and appreciation of French culture and its contributions to the world.</li>
      <li><b>Career Opportunities:</b> French is an important language in international business, diplomacy, and organizations like the United Nations, UNESCO, and the Red Cross. Proficiency in French can increase your employability and open up job opportunities in various fields.</li>
      <li><b>Education:</b> France is home to some of the world's top universities and institutions. Knowing French can enable you to pursue higher education in France or other French-speaking countries. Many academic programs and scholarships are available to international students who speak French.</li>
      <li><b>Multilingual Skills:</b> Learning French can make it easier to learn other Romance languages like Spanish, Italian, and Portuguese because they share similarities in vocabulary and grammar.</li>
      <li><b>Brain Health:</b> Learning a new language has cognitive benefits. It can improve memory, problem-solving skills, and multitasking abilities. It may also delay the onset of age-related cognitive decline.</li>
      <li><b>Personal Growth:</b> Learning a new language is a rewarding experience that can boost your self-confidence, patience, and adaptability. It can also foster a sense of accomplishment and broaden your horizons.</li>
      <li><b>Networking:</b> Speaking French can help you connect with a diverse group of people, from native speakers to fellow learners and language enthusiasts. This can expand your social and professional networks.</li>
      <li><b>Diplomacy and International Relations:</b> If you're interested in careers in diplomacy, international relations, or foreign service, proficiency in French can be a valuable asset, as it is one of the official languages of many international organizations and diplomatic forums.</li>
    </ul>`
  },
  {
    question: 'Advantages of learning German:',
    answer: `<ul>
      <li><b>Career Opportunities:</b> Germany is the largest economy in Europe and has a strong job market. Learning German can open up job opportunities in various fields, especially if you plan to work in or with German-speaking countries. Many multinational companies also require employees who can speak German.</li>
      <li><b>Global Influence:</b> German is one of the most widely spoken languages in the world, and Germany is a global leader in fields such as engineering, science, and technology. Learning German can help you access a vast amount of academic and professional resources.</li>
      <li><b>Travel:</b> Germany is a popular tourist destination with a rich cultural heritage. Learning German can enhance your travel experiences by allowing you to communicate with locals and better understand the country's history and culture.</li>
      <li><b>Education:</b> Germany is known for its high-quality education system, and many universities offer programs in English. However, knowing German can be a significant advantage if you plan to study in Germany or at a German-speaking institution.</li>
      <li><b>Cultural Appreciation:</b> Learning German can provide you with a deeper appreciation of German literature, music, philosophy, and cinema. Many influential works in these fields are originally in German.</li>
      <li><b>Communication:</b> Knowing German can help you communicate with the 90+ million native German speakers around the world. It can also be a valuable asset when dealing with German-speaking communities in countries like Austria and Switzerland.</li>
      <li><b>Networking:</b> Learning a language often comes with the opportunity to meet and connect with people from different backgrounds. German-speaking communities exist worldwide, and being part of them can create valuable personal and professional connections.</li>
      <li><b>Brain Benefits:</b> Learning a new language has cognitive benefits, such as improved memory, problem-solving skills, and multitasking abilities. It can also delay the onset of age-related cognitive decline.</li>
      <li><b>Increased Cultural Understanding:</b> Learning a language often leads to a better understanding of the culture associated with it. You'll gain insights into German traditions, customs, and ways of thinking.</li>
      <li><b>EU Opportunities:</b> Germany is a key player in the European Union. Knowing German can be advantageous if you're interested in EU-related careers or want to engage with EU institutions.</li>
      <li><b>Business and Trade:</b> Germany is a major player in international business and trade. Learning German can be beneficial if you work in international trade or business relations.</li>
    </ul>`
  },
  {
    question: 'Advantages of learning Japanese:',
    answer: `<ul>
      <li><b>Cultural Understanding:</b> Learning Japanese provides insights into Japanese culture, traditions, and way of life. It allows you to better understand the customs, etiquette, and values of Japan.</li>
      <li><b>Travel Opportunities:</b> Knowing Japanese can enhance your travel experiences in Japan. It allows you to communicate with locals, read signs and menus, and navigate public transportation more effectively.</li>
      <li><b>Business and Career Opportunities:</b> Japan has one of the largest economies in the world, and many multinational companies have business dealings with Japanese firms. Proficiency in Japanese can open up career opportunities in international business, trade, and diplomacy.</li>
      <li><b>Job Market:</b> Some industries, such as technology, manufacturing, and finance, have a demand for professionals who can communicate in Japanese. Being bilingual can give you a competitive edge in these fields.</li>
      <li><b>Academic Pursuits:</b> Learning Japanese can enable you to study and conduct research in various fields, including Japanese literature, history, and culture.</li>
      <li><b>Cultural Engagement:</b> If you have an interest in Japanese literature, anime, manga, or cinema, learning the language allows you to engage with these cultural elements in their original form.</li>
      <li><b>Personal Growth:</b> Learning a language is a challenging and rewarding endeavor. It can boost cognitive skills, improve memory, and enhance problem-solving abilities.</li>
      <li><b>Networking:</b> Learning Japanese can help you build relationships with Japanese speakers both in your local community and around the world, expanding your personal and professional networks.</li>
      <li><b>Global Perspective:</b> Understanding Japanese can contribute to a more global perspective, as it exposes you to different ways of thinking and living.</li>
      <li><b>Travel Flexibility:</b> Besides Japan, Japanese is spoken in Japanese communities around the world, including in Hawaii, Brazil, and the United States. Knowing Japanese can enhance your travel experiences in these regions.</li>
      <li><b>Satisfaction:</b> Achieving proficiency in a challenging language like Japanese can be personally fulfilling and boost your self-confidence.</li>
      <li><b>Communication Skills:</b> Learning Japanese can improve your overall language and communication skills, making you a more effective communicator in general.</li>
    </ul>`
  },
  {
    question: 'What are languages and why to learn languages?',
    answer: `Language is a system of communication used by humans to convey ideas, feelings, and information. Learning a language is a great way to open up new opportunities and experiences, both professionally and personally. By learning a language, you can connect with people from different cultures, open up new job prospects, and increase your understanding of the world around you. Additionally, language skills can help you better understand the culture and history of a particular people, as well as their values and beliefs. Learning a language can also help to broaden your perspective, as it allows you to see the world through the eyes of a different language and culture. So, whatever your reason for wanting to learn a language, it can be a rewarding and enriching experience.`
  },
  {
    question: 'How human languages evolved?',
    answer: `The evolution of human language is a complex and fascinating process. Throughout history, languages have evolved and changed, often influenced by outside sources. In the past, languages have been affected by migration and colonization, as well as technological and cultural advances. As time has passed, languages have been shaped by contact between different cultures and languages, leading to the creation of new dialects and words. Today, languages continue to evolve, as they are influenced by the spread of technology, global trade, and international travel. As a result, human language is constantly shifting and changing, making it a living and ever-evolving part of our culture.`
  },
  {
    question: 'What are modern languages?',
    answer: `Modern languages are languages that are currently spoken and used in everyday life. Examples of modern languages include English, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Japanese, and others. These languages are typically used in a variety of contexts, such as in business, education, and communication. By learning a modern language, students can open up a world of new opportunities and experiences, both professionally and personally. Additionally, learning a modern language can increase students' understanding of different cultures and help them to connect with people from around the world.`
  },
  {
    question: 'How do I determine which language is the best fit for me?',
    answer: `To determine which language is the best fit for you, consider your personal interests, career goals, or any cultural connections you may have. We can also provide guidance during the enrollment process.`
  },
  {
    question: 'Will I receive personalized feedback to target areas of improvement?',
    answer: `Yes, in our language learning program, you will receive personalized feedback to target areas of improvement. Our experienced instructors are dedicated to helping you enhance your language skills. They will provide feedback based on your performance in class, assessments, and assignments, allowing you to focus on specific areas where you can improve. This personalized guidance is a valuable aspect of our program, as it helps you make continuous progress and reach your language learning goals more effectively. If you have any questions or need additional clarification, please feel free to ask our instructors during or after the sessions.`
  },
  {
    question: 'How will my progress be assessed throughout the program?',
    answer: `Your progress will be assessed regularly through a combination of tests, quizzes, and speaking assessments. This ensures you're on track to meet your language learning goals.`
  },
  {
    question: 'Are there any penalties for missing classes or withdrawing from the program?',
    answer: `In our language learning program, we do not impose penalties for missing classes or withdrawing from the program. However, it's important to note that we do not provide refunds for missed classes or program withdrawals. We recommend that participants carefully consider their commitment to the program and their availability before enrolling, as our program operates with a no-refund policy.`
  },
  {
    question: 'Is there a support team available for any questions or issues I may encounter during the program?',
    answer: `We are always here to assist you with any questions or issues you may encounter during the program. You can reach us at 7338881781/0780 for any concerns and queries.`
  }
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = idx => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-subtitle">Please contact us if you cannot find an answer to your question.</div>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div className={`faq-card${openIdx === idx ? ' open' : ''}`} key={idx}>
            <button className="faq-question" onClick={() => handleToggle(idx)}>
              <span>{faq.question}</span>
              <span className={`faq-toggle-icon${openIdx === idx ? ' open' : ''}`} aria-label={openIdx === idx ? 'Collapse' : 'Expand'}>
                {openIdx === idx ? (
                  <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="#1a237e"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/></svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="#1a237e"/><rect x="8" y="13" width="12" height="2" rx="1" fill="#fff"/><rect x="13" y="8" width="2" height="12" rx="1" fill="#fff"/></svg>
                )}
              </span>
            </button>
            {openIdx === idx && (
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ; 