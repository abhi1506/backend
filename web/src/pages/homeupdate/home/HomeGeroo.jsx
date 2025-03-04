
// HeroSection.js
import React from "react";
import "./HomeGeroo.css";
import ambiup from "../../../images/ambiup.mp4";
import { Link } from 'react-router-dom';

const HomeGeroo = () => {
  return (
    <div className="hero-container-dddd">
      <video className="background-video-dddd" autoPlay loop muted>
        <source src={ambiup} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-wrapper-dddd">
        <h1 className="title-dddd">Embracing the Future of Technology</h1>
        <p className="description-dddd">
        Join us as we explore the latest advancements in cloud computing, artificial intelligence, and data analytics, and be part of the transformation.
        </p>
        <Link className="explore-button-dddd" to="/services/explore-technologies">
          Explore Technologies
          <span className="arrow-dddd">→</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeGeroo;
