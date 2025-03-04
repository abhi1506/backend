import React from 'react';
import "./ContentVideo.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { BiSolidRightArrow } from "react-icons/bi";
import service_webVideo from "../../assets/content/service_webdesign.mp4";

function ContentVideo() {
  const content = [
    "Smart Candidate Screening",
    "AI-Optimized Social Media",
    "Real-Time AI Insights & Analytics",
    "Scalable & Secure Solutions"
  ];

  return (
    <section>
      <div className="content-v-wrapper">
        
        {/* Right Side - Text Content */}
        <div className="content-v-right">
          <div className="content-v-title">
            <h1>AI-Driven Growth with Spreads</h1>
            <p>
            Spreads harnesses AI automation to transform social media marketing and job hiring, helping businesses and professionals thrive.
            </p>
            <h3 className='erp-btn'>
            AI-Powered Hiring & Engagement 
            </h3>
          </div>
          <div className="content-v-map">
            <ul>
              {content.map((item, index) => (
                <li key={index}><BiSolidRightArrow /> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left Side - Video */}
        <div className="content-v-left">
          <div className="content-v-video-bg"></div>
          <div className="content-v-video">
            <video src={service_webVideo} autoPlay loop muted playsInline></video>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContentVideo;
