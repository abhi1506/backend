import React, { useState } from "react";
import "./WebDevelopmentupdate.css";
import image2 from "../../assets/Group.svg";
import image3 from "../../assets/Analyze-Data.svg";
import image4 from "../../assets/Coding-Website.svg";
import image5 from "../../assets/Cryptowallets-Showing.svg";
import webdevelopmentgraphics from "../../images/web-develop-graphics.png";
import bankingSolution from "../../images/bankinig-solutioin-1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import connect1 from "../../images/connect1.png";
import connect2 from "../../images/wd-1.png";
import connect3 from "../../images/wd-2.png";
import { Link } from "react-router-dom";
import HoveringTestContent from "./HoveringTestContent";
import { Button } from "./../button/Button";
import { FaArrowRight } from "react-icons/fa6";
import businessIm from "../../assets/BusinessSolu.jpg";
import {
  AnimatedCardList,
  AnimatedCard,
  FadeInFromLeft,
  cardvarientrighttoleft,
  FadeInFromRight,
  ContainerVariants,
  FadeInUp,
  FadeInDown,
  cardvarientlefttoright,
} from "../animation/animation";

const WebDevelopmentupdate = () => {
  const bussineesbutton = [
    {
      id: 1,
      name: "Business",
      link: "/services/business-solution",
    },
    {
      id: 2,
      name: "Mobile",
      link: "/services/mobile-app-development",
    },
    {
      id: 3,
      name: "Custom",
      link: "/services/software-development-services",
    },
  ];
  const onlinePreserveSolution = [
    {
      id: 1,
      name: "Customized Website Design",
      icon: image2,
      background: "rgba(255, 166, 82, 1)",
    },
    {
      id: 2,
      name: "Responsive and Mobile-Friendly",
      icon: image3,
      background: "rgba(146, 82, 255, 1)",
    },
    {
      id: 3,
      name: "Search Engine Optimization (SEO)",
      icon: image4,
      background: "rgba(255, 82, 82, 1)",
    },
    {
      id: 4,
      name: "Fast and Secure Hosting",
      icon: image5,
      background: "rgba(243, 165, 91, 1)",
    },
  ];
  const clouddata = [
    {
      id: 1,
      content: "Embrace the Power of Cloud Computing",
      hoverContent2:
        "Embrace the power of cloud computing. AmbiSpine Technologies' cloud services provide secure, scalable, and reliable infrastructure for your business applications. Reduce costs, increase agility, and improve collaboration.",
      src: connect1,
    },
    {
      id: 2,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2:
        "Unlock the power of cloud computing. AmbiSpine Technologies' cloud solutions deliver flexible, secure, and scalable infrastructure for your business needs. Enhance productivity, reduce costs, and foster collaboration.",
      src: connect2,
    },
    {
      id: 3,
      content: "Revolutionize Your Business with Scalable Cloud Solutions",
      hoverContent2:
        "Discover the benefits of cloud computing. AmbiSpine Technologies' cloud solutions offer adaptable, secure, and scalable infrastructure. Streamline operations, reduce costs, and enhance collaboration.",
      src: connect3,
    },
  ];

  const faqs = [
    {
      question: "CMS or SaaS Development?",
      answer:
        "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
    },
    {
      question: "Web App Development?",
      answer:
        "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
    },
    {
      question: "EPR Developemnt?",
      answer:
        "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
    },
    {
      question: "Do You Need Internet to Access the Cloud?",
      answer:
        "Yes, an internet connection is typically required to access cloud services.",
    },
  ];

  return (
    <>
      <div className="web-development-container">
        <div className="container-web">
          <div className="content">
            <h1>Explore Web Development</h1>
            <p>
              In a world where technology bridges gaps and brings people closer,
              we stand at the forefront. We specialize in enhancing business
              health through robust IT support and innovative SaaS applications.
              Solutions are designed to connect people, streamline processes,
              and empower companies to reach their full potential.
            </p>
            <div className="explore-button-container">
              {bussineesbutton.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={`${link.link}`}
                    className="network-learn-more-link explore-dev-link "
                    data-aos="fade-up"
                  >
                    {" "}
                    {link.name} <FaArrowRightLong className="" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="iamge">
            <FadeInUp className="web-hero-image-container">
              <img
                src={webdevelopmentgraphics}
                className="imagclasName"
                alt="Web Development"
              />
            </FadeInUp>
          </div>
        </div>
        <section className="web-developments-process">
          <div className="process-tops">
            <FadeInDown>
              <h2 className="web-dev-head">
                Welcome to our Website Development Services
              </h2>
              <p className="web-dev-sub">
                Our website development services provide your business with an
                online presence. We create a professional and responsive website
                for you that attracts your customers.
              </p>
              <p className="web-on-presence">
                Transform Your Online Presence With Our Expert Solutions
              </p>
            </FadeInDown>
            <AnimatedCardList
              containerVariants={ContainerVariants}
              className="process-steps-container"
            >
              {onlinePreserveSolution.map((data) => (
                <AnimatedCard variants={cardvarientlefttoright}>
                  <div
                    key={data.id}
                    className="process-steps-card"
                    style={{ background: data.background }}
                  >
                    <h3 className="steps-heading">{data.name}</h3>
                    <img src={data.icon} alt="show related icon" />
                  </div>
                </AnimatedCard>
              ))}
            </AnimatedCardList>
          </div>
        </section>
        <div className="transformic-container">
          <div className="our-vision">
            <h1 className="transformic-heading">Transforming The Sector</h1>
          </div>

          <div className="transform-body">
            <FadeInFromLeft className="transform-body-left">
              <div className="img-transform-container">
                <img src={bankingSolution} alt="Our Services" />
              </div>
            </FadeInFromLeft>
            <FadeInFromRight className="transform-body-right">
              <h1 className="transformic-heading">Banking</h1>
              <p className="transformic-subtitle">
              In a world where technology bridges gaps and connects people, we lead the way in transforming the banking sector. Our expertise in IT support and SaaS solutions empowers financial institutions to enhance security, streamline operations, and drive growth.
              </p>
            </FadeInFromRight>
          </div>
        </div>
        <HoveringTestContent data={clouddata} />
        <div className="transform-body-second">
          <FadeInFromLeft className="transform-body-second-left">
            <div className="img-container">
              <img src={businessIm} alt="Our Services" />
            </div>
          </FadeInFromLeft>
          <FadeInFromRight className="transform-body-second-right">
            <p className="transform-subtitle">
              In a world where technology bridges gaps and brings people closer,
              we stand at the forefront. We specialize in enhancing business
              health through robust IT support and innovative SaaS applications.
              Solutions are designed to connect people, streamline processes,
              and empower companies to reach their full potential.
            </p>
            <div className="text-center transform-btn">
              <Button
                name="Explore Web Solution"
                icon={<FaArrowRight />}
                redirect="/services/explore-technologies"
              />
            </div>
          </FadeInFromRight>
        </div>
        z<div></div>
      </div>
    </>
  );
};

export default WebDevelopmentupdate;
