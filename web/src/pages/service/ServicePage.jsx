import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ServicePage.css";

const ServiceCard = ({ icon, title, description, urlLink }) => (
  <div className="service-card1">
    <div className="service-icon1">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={urlLink} className="service-button">
      Learn More
    </Link>
  </div>
);

const ServicePage = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business needs and drive growth.",
      urlLink: "/custom-software-development",
    },
    {
      icon: "🏢",
      title: "Enterprise Solutions",
      description:
        "Scalable and robust enterprise-level applications built with cutting-edge technology.",
      urlLink: "/enterprise-solutions",
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description:
        "Comprehensive cloud solutions to optimize your infrastructure and improve efficiency.",
      urlLink: "/cloud-services",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description:
        "Transform your raw data into actionable insights with our advanced analytics solutions.",
      urlLink: "/data-analytics",
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI to automate processes and enhance decision-making.",
      urlLink: "/ai-ml",
    },
    {
      icon: "⚙️",
      title: "DevOps Solutions",
      description:
        "Streamline your development workflow with our modern DevOps practices.",
      urlLink: "/devops-solutions",
    },
  ];

  return (
    <div className="service-page1">
      <div className="hero-section1">
        <h1>Our Services</h1>
        <p>Transforming ideas into powerful digital solutions</p>
      </div>

      <div className="services-container1">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            urlLink={service.urlLink}
          />
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how we can help you achieve your goals</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default ServicePage;
