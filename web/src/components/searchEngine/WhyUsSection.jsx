import React from "react";
import searchImage from "../../assets/content/co.png";
import "./WhyUsSection.css";

const WhyUsSection = () => {
  return (
    <div className="why-us-container-seoo">
      <div className="content-wrapper-seoo">
        <div className="text-content-seoo">
          <h1 className="head-seoo">WHY US?</h1>
          <p className="para-seoo">
            SEO is not about ranking for popular terms; it's all about being
            found everywhere, when it matters the most. If you choose us as
            partners, we will take a full audit of your entire website,
            including keywords, content, and page structure.
          </p>
          <p className="para-seoo">
            Our dedicated team ensures that your brand is optimized for the
            competitive digital world. From strategy to execution, we help you
            drive organic growth and stay ahead.
          </p>
        </div>
        <div className="image-content-seoo">
          <img
            src={searchImage}
            alt="SEO optimization in progress"
            className="feature-image-seoo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;

