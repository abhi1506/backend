import React, { useState } from "react";
import styles from "./FaqSection.module.css";

const FaqSection = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={styles.faqConsultationn}>
      <section className={styles.faqSectionn}>
        <h2>Frequently asked questions</h2>
        <p>Here are some common questions about this service.</p>
        {faqs && faqs.length > 0 ? (
          <ul className={styles.faqListt}>
            {faqs.map((faq, index) => (
              <li key={faq.id || index}>
                <div
                  className={styles.faqQuestionn}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <button aria-expanded={openFaqIndex === index}>
                    {openFaqIndex === index ? "-" : "+"}
                  </button>
                </div>
                {openFaqIndex === index && (
                  <p className={styles.faqAnswerr}>{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No FAQs available.</p>
        )}
      </section>
    </div>
  );
};

export default FaqSection;
