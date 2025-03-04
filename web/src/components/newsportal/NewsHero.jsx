import React from "react";
import "./newshero.css";
import newsHero1 from "../../assets/newsHero-1.jpg";
import newsHero2 from "../../assets/newsHero-3.jpg";
import newsHero3 from "../../assets/newsHero-2.jpg";

const NewsHero = () => {
  return (
    <div className="hero-news-container">
      <div className="hero-news-content">
        <h1 className="hero-news-title">Technology That Drives Tomorrow</h1>
        <p className="hero-news-subtitle">
          Explore cutting-edge trends, updates, and breakthroughs in the tech
          world.
        </p>
      </div>

      <div className="image-gallery">
        <div className="image-frame frame-1">
          <img
            src={newsHero1}
            alt="Person using mobile device"
            className="gallery-image"
          />
          <div className="frame-backdrop"></div>
        </div>
        <div className="image-frame frame-2">
          <img
            src={newsHero2}
            alt="Tech enthusiast"
            className="gallery-image"
          />
          <div className="frame-backdrop"></div>
        </div>
        <div className="image-frame frame-3">
          <img
            src={newsHero3}
            alt="Reading digital content"
            className="gallery-image"
          />
          <div className="frame-backdrop"></div>
        </div>
      </div>

      <div className="floating-bubbles">
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`bubble bubble-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default NewsHero;
