import React, { useRef, useEffect } from "react";
import {
  TbArrowBadgeRightFilled,
  TbArrowBadgeLeftFilled,
} from "react-icons/tb";
import "./DigitalTrend.css";
import connectImg from "../../assets/Trends.png";
import Screening from "../../assets/Screening.jpg"
import trendImg1 from "../../assets/jobspreads.jpg";
import trendImg2 from "../../assets/spreadsname.jpg";
import trendImg3 from "../../assets/Spreadsambi.jpg";
import trendImg4 from "../../assets/Aiauto.jpg";
import trendImg5 from "../../assets/WebDesigningSol.jpg";
import trendImg6 from "../../assets/BusinessTeam.jpeg";

const DigitalTrend = () => {
  const carouselRef = useRef(null);

  const data = [
    {
      id: 1,
      imgSrc: connectImg,
      title:
        "Trends, Insights & Marketing Impact",
    },
    {
      id: 2,
      imgSrc: trendImg1,
      title: "SEO-Enhanced Content & Brand Visibility",
    },
    {
      id: 3,
      imgSrc: trendImg2,
      title: "Data-Driven Insights & Real-Time Analytics",
    },
    { id: 4, imgSrc: Screening, title: "Smart Hiring & Candidate Screening" },
    {
      id: 5,
      imgSrc: trendImg3,
      title:
        "Smarter Engagement & User Retention",
    },
    {
      id: 6,
      imgSrc: trendImg4,
      title: "AI & Automation: The Future of Digital Marketing",
    },
    {
      id: 7,
      imgSrc: trendImg5,
      title: "How AR & VR Are Changing Online Shopping",
    },
    { id: 8, imgSrc: trendImg6, title: "Top Cybersecurity Trends in 2025" },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="digital-container">
      <div className="digital-wrapper">
        <div className="d-left">
          <h1>Digital Trends</h1>
        </div>
        <div className="d-medium">
          <p>
            Discover The Latest Digital Strategies & Emerging Ideas For Business
            Growth
          </p>
        </div>
        <div className="d-right">
          <button className="carousel-left" onClick={scrollLeft}>
            <TbArrowBadgeLeftFilled />
          </button>
          <button className="carousel-right" onClick={scrollRight}>
            <TbArrowBadgeRightFilled />
          </button>
        </div>
      </div>
      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel-item">
          {data.map((item) => (
            <div className="carousel-card" key={item.id}>
              <div>
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <div className="border-half"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTrend;
