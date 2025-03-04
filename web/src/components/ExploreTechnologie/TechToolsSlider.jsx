import React, { useEffect, useState, useRef } from "react";
import "./TechToolsSlider.css"; // Import CSS
import html1 from './../../images/html-1.svg';
import javascript from './../../images/javascript-1.svg';
import angular from './../../images/angular 1.svg';
import react from './../../images/react 1.svg';
import java from './../../images/java-1.svg';
import python from './../../images/python 1.svg';
import css from './../../images/css-1.svg';
import mysql from './../../images/mysql.svg'
import azure from './../../images/azure-2.svg';

const TechToolsSlider = () => {
const items = [
    {
      id:1,
      icon:html1,
    },
    {
      id:2,
      icon:css,
    },
    {
      id:3,
      icon:javascript,
    },
    {
      id:4,
      icon: react
    },
    {
      id:5,
      icon: python
    },
    {
      id:6,
      icon: java
    },
    {
      id: 7,
      icon: mysql
    },
    {
      id: 8,
      icon: angular
    },{
      id:9,
      icon:azure
    }



  ];
  

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const moveSlider = () => {
      if (slider) {
        scrollAmount += slider.children[0].offsetWidth; // Ek item ki width
        slider.style.transition = "transform 0.5s linear";
        slider.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= slider.scrollWidth / 2) {
          // Jab half scroll ho jaye, reset kare bina glitch ke
          setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = `translateX(0)`;
            scrollAmount = 0;
          }, 500);
        }
      }
    };

    const interval = setInterval(moveSlider, 2000); // 2 sec me slide hoga

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-conainer-fluid">
<div className="slider-container">
      <div className="slider-track" ref={sliderRef}>
        {[...items, ...items].map((item, index) => (
          <div key={item.id} className="slider-item">
            <img src={item.icon} className="tech-icon"  alt={item.icon} />
            
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default TechToolsSlider;
