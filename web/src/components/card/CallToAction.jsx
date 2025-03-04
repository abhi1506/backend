import React, { useEffect, useState } from 'react';
import styles from './CallToAction.module.css';
import QuotationForm from '../form/QuotationForm';

const CallToAction = () => {
  const [consultActive, setConsultActive] = useState(false);

  const handleConsult = () => {
    setConsultActive(true);
  };

  useEffect(() => {
    if (consultActive) {
      const formElement = document.getElementById('quotation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [consultActive]);

  return (
    <>
      {/* Consultation Box */}
      <section className={styles.consultationBSection}>
        <div className={styles.consultationBox}>
          <h3>Get Free Consultation Now!</h3>
          <p>Let's create a powerful website that grows with your business.</p>
          <button
            className={styles.consultBtn}
            onClick={handleConsult}
            aria-expanded={consultActive}
            aria-controls="quotation-form"
            disabled={consultActive}
          >
            Get Free Consultation →
          </button>
        </div>
      </section>

      {/* Quotation Form Section */}
      {consultActive && (
        <section
          id="quotation-form"
          className={`${styles.quotationForm} ${consultActive ? styles.quotationFormActive : ""}`}
          aria-live="polite"
        >
          <div className={styles.formContainer}>
            <QuotationForm />
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
