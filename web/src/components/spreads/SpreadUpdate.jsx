import React from "react";
import "./SpreadUpdate.css";
import SpreadSecondSection from "./SpreadSecondSection";
import AdSection from "./AdSection";
import spreadVideo from "../../assets/content/spread.mp4";
import DigitalTrend from "./digitalTrend";
import VideoContent from "./VideoContent";
import ContentVideo from "./ContentVideo";


export default function SpreadUpdate() {
  const talentData = [
    {
      text: "Revolutionizing industries with AI-powered solutions.",
      subText: "Business Intelligence & AI at the forefront",
    },
    {
      text: "Driving growth through cutting-edge technology and automation.",
      subText: "AI and technology-driven business solutions",
    },
    {
      text: "Empowering businesses to stay ahead with intelligent insights.",
      subText: "Innovative business intelligence strategies",
    },
    {
      text: "Transforming the future of business with next-gen AI innovations.",
      subText: "Future-proof your business with AI",
    },
  ];

  const handleScrollClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="spread-pages">
      <div className="spread-hero-section">
        <div className="container-img-spread">
          <video className="spread-video" autoPlay loop muted playsInline>
            <source src={spreadVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="spread-button-container">
        {[
          "Business Solutions",
          "Talent Solutions",
          "Innovation for Entrepreneurs",
          "AI-Driven Future",
        ].map((label, index) => (
          <button
            style={{ backgroundColor: "transparent",color:"#fff",padding:'5px' }}
            className="spread-buttons"
            onClick={() => handleScrollClick(label.replace(/\s+/g, ""))}
            key={index}
          >
            {label}
          </button>
        ))}
      </div>

      <div id="BusinessSolutions">
        <SpreadSecondSection />
       
      </div>
      <div id="TalentSolutions">
      <DigitalTrend/>
      </div>
     
     <div id="InnovationForEntrepreneurs">
     <ContentVideo/>
     <VideoContent/>
     </div>
      <div id="AI-DrivenFuture">
        <AdSection />
      </div>
    </div>
  );
}
