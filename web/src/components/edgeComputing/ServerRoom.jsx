import React from "react";
import "./ServerRoom.css";
import benefitsImage from "../../assets/BenefitsImage.png";
import { FadeInFromLeft, FadeInFromRight } from "../animation/animation";
const ServerRoom = () => {
  return (
    <div className="server-container">
      <div className="content-wrapper">
        <FadeInFromLeft className="text-section">
          <h1>Edge Technology helps things get better!</h1>
          <p>
          Edge computing revolutionizes real-time data processing, enhances automation, and drives intelligent decision-making. By reducing latency, optimizing costs, and improving security, it empowers businesses to create seamless, high-performance experiences and unlock new opportunities for innovation and growth.
          </p>
        </FadeInFromLeft>
        <FadeInFromRight className="image-section">
          <img
            src={benefitsImage}
            alt="Modern server room with rows of equipment"
            className="server-image"
          />
        </FadeInFromRight>
      </div>
    </div>
  );
};

export default ServerRoom;
