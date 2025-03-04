

import React from "react";
import "./CloudBenefits.css";
import CloudInfraBenefits from "../../assets/CloudInfraBenefits.png";
import { FadeInFromLeft, FadeInFromRight } from "../animation/animation";

const CloudBenefits = () => {
  return (
    <section className="cloud-benefits_benefi">
      <div className="container-benefits_benefi">
        <h1 className="title-benefits_benefi">
        Next-Generation Cloud Infrastructure for High-Performance and Security
        </h1>
        <div className="benefits-content-wrapper_benefi">
          <FadeInFromLeft className="text-content_benefi">
            <p className="description-benefits_benefi">
            Ambispine Technologies delivers robust, scalable cloud infrastructure designed to meet evolving business needs. Our high-performance solutions ensure seamless operations, enhanced security, and optimized resource management for maximum efficiency in a digital-first world
            </p>
            <p className="description-benefits_benefi">
            With cutting-edge cloud architecture, we provide automated scalability, secure data storage, and intelligent workload distribution. Our cloud services empower businesses with cost-effective solutions, reducing downtime and enhancing system reliability with real-time monitoring and threat detection
            </p>
            <p className="description-benefits_benefi">
            From startups to enterprises, our cloud infrastructure solutions drive innovation, improve operational agility, and ensure business continuity. Experience the power of a secure, scalable, and future-ready cloud environment tailored to your business success
            </p>
          </FadeInFromLeft>
          <FadeInFromRight className="image-container_benefi">
            <img
              src={CloudInfraBenefits}
              alt="Cloud Infrastructure"
              className="cloud-image_benefi"
            />
          </FadeInFromRight>
        </div>
      </div>
    </section>
  );
};

export default CloudBenefits;
