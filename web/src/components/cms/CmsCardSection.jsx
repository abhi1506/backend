import React from "react";
import { AiOutlineFileText, AiOutlineSetting, AiOutlineThunderbolt, AiOutlineSearch } from "react-icons/ai"; 
import "./CmsCardSection.css";
import { motion } from "framer-motion";
import { FadeInFromLeft, FadeInFromRight, FadeInDown } from "../animation/animation";

const CmsCardSection = () => {
  const cardData = [
    { id: 1, title: "Content Management", content: "Manage content efficiently with our CMS solutions.", icon: <AiOutlineFileText /> },
    { id: 2, title: "Organization", content: "Best practices for structuring digital content.", icon: <AiOutlineSetting /> },
    { id: 3, title: "Automation", content: "Enhance workflows with automation features.", icon: <AiOutlineThunderbolt /> },
    { id: 4, title: "SEO Optimization", content: "Improve SEO and user experience.", icon: <AiOutlineSearch /> },
  ];

  return (
    <div className="cms-card-section">
      <FadeInFromLeft className="cms-card-header">
        <h1 className="cms-title">Features</h1>
        <p className="cms-description">
        Optimize your content management process with our customizable, scalable, and SEO-friendly CMS solutions. Easily manage, update, and organize your website content while ensuring fast performance, top-tier security, and seamless user experience.
        </p>
      </FadeInFromLeft>

      <div className="cms-card-container">
        {cardData.map((card,index) => (
         <motion.div
         key={card.id}
         className="cms-card"
         initial={{ x: -20, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: index * 0.2 }}
       >
         <h3 className="cms-card-title">{card.title}</h3>
         <span className="cms-card-icon">{card.icon}</span>
         <p className="cms-card-content">{card.content}</p>
       </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CmsCardSection;

