import React, { useState } from "react";
import "./Business.css";
import businessImage from "../../assets/heroo.jpg";
import BusinessBenefits from "./BusinessBenefits";
const BusinessLanding = () => {
  // const services = [
  //   {
  //     title: "Custom Software Development",
  //     description:
  //       "Our custom software development services focus on creating applications uniquely designed for your business needs.",
  //     icon: "💻",
  //   },
  //   {
  //     title: "Data Analysis",
  //     description:
  //       "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to optimize processes.",
  //     icon: "📊",
  //   },
  //   {
  //     title: "E-Commerce Solution",
  //     description:
  //       "Complete e-commerce solutions with integrated payment systems and inventory management.",
  //     icon: "🛍️",
  //   },
  // ];
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Our Custom Software Development services focus on creating applications uniquely designed for your business goals. Whether you need a web, mobile, or desktop application, we deliver solutions that integrate seamlessly into your operations.",
      image: businessImage,
    },
    {
      title: "Data Analysis",
      description:
        "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to uncover trends, optimize processes, and make informed decisions.",
      image: businessImage,
    },
    {
      title: "E - Commerce Solution",
      description:
        "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to uncover trends, optimize processes, and make informed decisions.",
      image: businessImage,
    },
    {
      title: "Custom Software Development",
      description:
        "Our Custom Software Development services focus on creating applications uniquely designed for your business goals. Whether you need a web, mobile, or desktop application, we deliver solutions that integrate seamlessly into your operations.",
      image: businessImage,
    },
    {
      title: "Data Analysis",
      description:
        "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to uncover trends, optimize processes, and make informed decisions.",
      image: businessImage,
    },
    {
      title: "E - Commerce Solution",
      description:
        "Gain a competitive edge with data-driven insights. Our Data Analytics services enable businesses to uncover trends, optimize processes, and make informed decisions.",
      image: businessImage,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const totalItems = services.length;
  // const nextSlide = () => {
  //   setCurrentIndex((prev) => {
  //     if (prev >= services.length - 3) return 0;
  //     return prev + 1;
  //   });
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => {
  //     if (prev <= 0) return services.length - 4;
  //     return prev - 1;
  //   });
  // };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => {
  //     // When we reach the end, smoothly transition back to the start
  //     if (prevIndex === totalItems - 1) {
  //       return 0;
  //     }
  //     return prevIndex + 1;
  //   });
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => {
  //     // When we're at the start, smoothly transition to the end
  //     if (prevIndex === 0) {
  //       return totalItems - 1;
  //     }
  //     return prevIndex - 1;
  //   });
  // };
  // Create a circular array for smooth infinite scrolling
  // const getVisibleServices = () => {
  //   let services = [];
  //   for (let i = 0; i < 3; i++) {
  //     const index = (currentIndex + i) % totalItems;
  //     services.push(services[index]);
  //   }
  //   return services;
  // };
  const orgTypes = [
    "Startups",
    "Partners",
    "Small business",
    "Large corporation",
  ];

  return (
    <div className="landings-container">
      <div className="business-section">
        <div className="content">
          <h1>Business Solution</h1>
          <p>
            Start Designs is an emerging web development company that offers
            website development services. Our in-house team and professional web
            developers uses new technologies
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="image-container">
          <img
            src={businessImage}
            alt="Professional business consultant"
            className="business-image"
          />
        </div>
      </div>

      <div className="carousel-container">
        <h1 className="carousel-title">
          Meet Technology That
          <br />
          Transform The World
        </h1>
        <div className="title-underline"></div>

        <div className="carousel-content">
          <button className="carousel-button prev" onClick={prevSlide}>
            ←
          </button>

          <div className="carousel-track">
            <div
              className="carousel-slides"
              style={{
                transform: `translateX(-${currentIndex * 33.33}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="carousel-card">
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-button next" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>

      {/* Cloud Section */}
      <section className="cloud-bussi">
        <div className="cloud-content-bussi">
          <h2>Unlock The Cloud Transformation</h2>
          <p style={{ color: "#fff" }}>
            We bring the cloud experience to all your IT and Business solutions.
            Our combination of public and private cloud infrastructure.
          </p>

          <div className="org-types">
            {orgTypes.map((type, index) => (
              <button key={index} className="org-button">
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>
      <BusinessBenefits />
    </div>
  );
};

export default BusinessLanding;
