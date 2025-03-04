import React from "react";
import "./services.css";

import serviceHome1 from "../../../assets/cloud22 (8).jpg";
import serviceHome2 from "../../../assets/cloud22 (7).jpg";
import serviceHome3 from "../../../assets/cloud22 (6).jpg";
import serviceHome4 from "../../../assets/cloud22 (2).jpg";

import MobileSolutionImage from "../../../assets/MobileSolu.jpg";
import WebSolutionImage from "../../../assets/WebSolu.jpg";
import BusinessSolutionImage from "../../../assets/BusinessSolu.jpg";
import WebDesigningSolutionImage from "../../../assets/WebDesigningSol.jpg";
import CloudSolutionImage from "../../../assets/CloudSolu.jpg";
import DigitalSolutionImage from "../../../assets/DigitalSolu.jpg";
import { Link } from "react-router-dom";
const ServiceCard = ({
  title,
  description,
  image,
  actionText,
  navigateurl,
}) => {
  return (
    <div className="service-card">
      <div className="card-content">
        <div className="service-image">
          <img src={image} alt={title} />
          <div className="image-overlay"></div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="explore-button" to={navigateurl}>
          <span>{actionText}</span>
          <svg
  className="arrow-icon"
  viewBox="0 0 24 24"
  width="20"
  height="20"
  stroke="currentColor"
  fill="none"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <polyline points="9 6 15 12 9 18"></polyline>
</svg>

        </Link>
      </div>
      <div className="card-glow"></div>
    </div>
  );
};
const ServicesSection = () => {
  const services = [
    {
      title: "Mobile App Innovations",
      description:
        "Transform your business with our innovative mobile solutions. Explore our services.",
      image: MobileSolutionImage,
      actionText: "Explore",
      navigateurl: "/services/mobile-app-development",
    },
    {
      title: "Web Development & Optimization",
      description:
        "Enhance your online visibility, drive more traffic. Check our services today!",
      image: WebSolutionImage,
      actionText: "Explore",
      navigateurl: "/services/website-development",
    },
    {
      title: "Enterprise Digital Solutions",
      description:
        "Elevate your business with Our expert solutions & accelerate your business growth.",
      image: BusinessSolutionImage,
      actionText: "Explore",
      navigateurl: "/services/business-solution",
    },
    {
      title: "Creative Web Design & UX",
      description:
        "Boost Online Engagement with Our Responsive Web Design Services. Transform Your Digital landscape And Captivate Your Audience.",
      image: WebDesigningSolutionImage,
      actionText: "Explore",
      navigateurl: "/services/website-development",
    },
    {
      title: "Cloud Computing",
      description:
        "Accelerate Business Growth with Our Scalable Cloud Solutions. Streamline operations, secure data, and unlock efficiency with our cloud services.",
      image: CloudSolutionImage,
      actionText: "Explore",
      navigateurl: "/services/cloud-solution",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Maximize Online Visibility with Our Data-Driven Digital Marketing Strategies. Reach, engage, and convert your target audience.",
      image: DigitalSolutionImage,
      actionText: "Explore",
      navigateurl: "services/digital-marketing-services",
    },
  ];

  return (
    <div className="services-section-ca">
      <div className="services-header-ca">
        <h1>Our Services</h1>
        <p>
        Revolutionary Digital Solutions to Turbocharge Your Business Growth
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
