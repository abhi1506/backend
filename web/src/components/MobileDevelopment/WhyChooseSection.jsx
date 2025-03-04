import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./WhyChooseSection.module.css"; // Renamed for clarity
import { Button } from "./../button/Button";
import { AnimatedCardList,  AnimatedCard, FadeInFromLeft } from '../animation/animation';

const WhyChooseSection = ({ data = [], name, subtitle, className = "", heroId }) => {
  const whychosemobcon = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardwhymob = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.3, ease: "circOut" } },
  };
  return (
    <section className={`${styles["why-choose-section-container"]} ${className}`} id={heroId}>
      <div className={styles["why-choose-section-main"]}>
        
        {/* Left Section */}
        <div className={styles["why-choose-section-main-left"]}>
          <FadeInFromLeft className={styles["why-choose-section-left-content"]}>
            <h1 className={styles["why-choose-section-heading"]}>{name}</h1>
            <p className={styles["why-choose-section-subtitle"]}>{subtitle}</p>
            <div className={styles["why-choose-explore"]}>
              <Button name="Explore Solution" redirect="/services/explore-technologies" icon={<FaArrowRight />} />
            </div>
          </FadeInFromLeft>
        </div>

        {/* Right Section */}
        <div className={styles["why-choose-section-main-right"]}>
          <div className={styles["why-choose-section-why-chooses-container"]}>
            <AnimatedCardList className={styles["why-choose-section-card-container"]} containerVariants={whychosemobcon}>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <AnimatedCard key={item.id || index} className={`${styles["why-chooses-section-card"]} ${item.className || ""}`} variants={cardwhymob}>
                    <h3 className={styles["why-choose-section-card-header"]}>{item.heading}</h3>
                    <p className={styles["why-choose-section-card-subtitle"]}>{item.description}</p>
                  </AnimatedCard>
                ))
              ) : (
                <p className={styles["why-choose-no-data"]}>No data available</p>
              )}
            </AnimatedCardList>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
