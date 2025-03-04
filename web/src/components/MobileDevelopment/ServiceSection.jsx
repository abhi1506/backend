import React from "react";
import { FaArrowDown } from "react-icons/fa";
import servicesSecontion from "./ServiceSecontion.module.css";
import iosservicesection from "../../images/iosservicesection.png";
import { motion } from "framer-motion";
const SecondSection = ({
  data,
  name,
  subtitle,
  className,
  heroId,
  heroimg,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const leftToRightVariants = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      className={`${servicesSecontion["service-section-container"]} ${
        className || ""
      }`}
      id={heroId}
    >
      <div className={servicesSecontion["service-section-main"]}>
        <div className={servicesSecontion["service-section-main-right"]}>
          <div
            className={servicesSecontion["service-section-services-container"]}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={servicesSecontion["service-section-card-container"]}
            >
              {data.map((data, index) => {
                // Apply scaling animation to cards at positions 1, 4, 7, etc.
                if (index % 3 === 0) {
                  return (
                    <motion.div
                      key={index}
                      variants={scaleVariants}
                      className={`${servicesSecontion["services-section-card"]} ${data.className}`}
                    >
                      <h3
                        className={
                          servicesSecontion["service-section-card-header"]
                        }
                      >
                        {data.heading}
                      </h3>
                      <p
                        className={
                          servicesSecontion["service-section-card-subtitle"]
                        }
                      >
                        {data.description}
                      </p>
                    </motion.div>
                  );
                } else {
                  // Apply default animation to other cards
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className={`${servicesSecontion["services-section-card"]} ${data.className}`}
                    >
                      <h3
                        className={
                          servicesSecontion["service-section-card-header"]
                        }
                      >
                        {data.heading}
                      </h3>
                      <p
                        className={
                          servicesSecontion["service-section-card-subtitle"]
                        }
                      >
                        {data.description}
                      </p>
                    </motion.div>
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
        <div className={servicesSecontion["service-section-main-left"]}>
          <div className={servicesSecontion["service-section-left-content"]}>
            <h1 className={servicesSecontion["service-section-heading"]}>
              {name}
            </h1>
            <p className={servicesSecontion["service-section-subtitle"]}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
