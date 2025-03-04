

 
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import PropTypes from "prop-types";  
import styles from './HeroSection.module.css';

const HeroSection = ({ title, subtitle, onScrollDown, heroId, backgroundImage, className }) => {
  return (
    <div
  className={`${styles.mainHeroContainer} ${className || ""}`}
  id={heroId}
  style={
    backgroundImage
      ? { backgroundImage: `url(${backgroundImage})`,
       backgroundSize: "cover",
       backgroundPosition: "center" }
      : {}
  }
>
  <div className={styles.mainHeroHero}>
    <h1 className={styles.mainHeroTitle}>{title}</h1>
    <p className={styles.mainHeroSubtitle}>{subtitle}</p>
    <div
      className={styles.mainHeroActionsDown}
      onClick={onScrollDown}
      role="button"
      aria-label="Scroll down"
    >
      <FaArrowDown />
    </div>
  </div>
</div>
  );
};


HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onScrollDown: PropTypes.func.isRequired,
  heroId: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default React.memo(HeroSection);


 