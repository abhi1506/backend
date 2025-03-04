import React from "react";
import "./ClicksToConversion.css";
import { FadeInUp, AnimatedCardList, AnimatedCard, ContainerVariants } from "../animation/animation";
import { Opacity } from "@mui/icons-material";
import { duration } from "@mui/material";

export default function ClicksToConversion({ data }) {

  const digclickcard = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    show: {
      opacity: 1,
      y: 0, 
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <AnimatedCardList className="clicks-to-conver-section" containerVariants={ContainerVariants}>
      {data.map((item) => (
        <AnimatedCard variants={digclickcard} key={item.id} className={`clicks-to-conver-card sco_container sco_container_${item.id}`}>
          <div className="sco_show_content">
            <h5 className="">{item.content}</h5>
          </div>
          <div className="sco_show_content_hover">
            <img src={item.Icon} className="sco-show-content-icon" alt={data.alt || 'clik icon'} />
            <h5 className="click-header">{item.content}</h5>
            <p className="click-sub">{item.hoverContent1}</p>
          </div>
        </AnimatedCard>
      ))}
    </AnimatedCardList>
  );
}
