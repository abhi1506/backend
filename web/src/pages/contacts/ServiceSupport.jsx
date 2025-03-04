import React from "react";
import "./ServicesSupport.css";
import {
  FadeInFromLeft,
  ScaleAnimation,
} from "../../components/animation/animation";

const ServicesSupport = () => {
  return (
    <div className="services-support-container">
      <FadeInFromLeft>
        <h1>CONNECT FOR SERVICES AND SUPPORT</h1>
      </FadeInFromLeft>

      <ScaleAnimation className="grid-container">
        <div className="grid-item">
          <h3> IT Consulting</h3>
          <p>Expert guidance on IT strategy and implementation, including Technology Roadmap Development & Solution Design</p>
        </div>
        <div className="grid-item">
          <h3> Help Desk Support</h3>
          <p>
          24/7 technical support via phone, email, or chat
          </p>
        </div>
        <div className="grid-item">
          <h3>Cloud Services</h3>
          <p>
          Comprehensive cloud solutions, including Cloud Management and Optimization.

          </p>
        </div>
        <div className="grid-item">
          <h3>Customized Support Plans</h3>
          <p>
          Flexible support options tailored to meet your unique requirements.
          </p>
        </div>
        <div className="grid-item">
          <h3>Software Development</h3>
          <p>
          Customized software solutions, including Mobile App Development and Custom Software Development.

          </p>
        </div>
        <div className="grid-item">
          <h3>On-Site & Remote Support</h3>
          <p>
          Safe and secure technical support for your IT needs, delivered on-site or remotely.
          </p>
        </div>
      </ScaleAnimation>
    </div>
  );
};

export default ServicesSupport;
