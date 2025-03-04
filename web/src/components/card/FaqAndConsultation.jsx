
import React, { useEffect, useState } from "react";
import styles from  "./FaqAndConsultation.module.css";
import QuotationForm from '../form/QuotationForm';

const FaqAndConsultation = ({faqs}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); 
  const [consultActive, setConsultActive] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); 
  };
    const handleConsult = () =>{
      setConsultActive(true);
    }

useEffect(() => {
    if (consultActive) {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
    }
  }, [consultActive]);

  return (
    <div className={styles.faqConsultation}>
     
      <section className={styles.faqSection}>
        <h2>Frequently asked questions</h2>
        <p>Here are some common questions about this service.</p>
        <ul className={styles.faqList}>
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <button>{openFaqIndex === index ? "-" : "+"}</button>
              </div>
              {openFaqIndex === index && (
                <p className={styles.faqAnswer}>{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
  
      {/* Consultation Section */}
      <section className={styles.consultationSection}>
        <div className={styles.consultationBox}>
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className={styles.consultBtn} onClick={handleConsult}>Get Free Consultation →</button>
        </div>
      </section>
      <section>
        {consultActive && (
          <div id="scroll">
            <QuotationForm />
          </div>
        )}
      </section>
    </div>
  );
  
};

export default FaqAndConsultation;
