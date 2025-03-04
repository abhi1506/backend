import React from "react";
import "./ContentTypes.css";

const contentData = [
  { leftBg: "#FFF706", rightBg: "#5FEA2D", leftText: "Article", rightText: "Blog Post" },
  { leftBg: "#EA8F2D", rightBg: "#007BFF", leftText: "Case Study", rightText: "White Paper" }
];

const ContentTypes = () => {
  return (
    <div className="content-types">
      <h1 className="content-types-title">Types of Content We Offer</h1>

      {contentData.map((item, index) => (
        <div key={index} className="content-stick-section">
          <div className="left-content" style={{ background: item.leftBg }}>
            <h2>{item.leftText}</h2>
          </div>
          <div className="content-stick"></div>
          <div className="right-content" style={{ background: item.rightBg }}>
            <h2>{item.rightText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentTypes;
