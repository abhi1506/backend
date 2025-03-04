import "./DigitalMarketUpdate.css";
import Herosection2 from "../MobileDevelopment/Herosection2";
import SecondSection from "../MobileDevelopment/SecondSection";
import DigitalMarket1 from "./../../images/digitalmarket1.png";
import DigitalMarket2 from "./../../images/digitalmarket2.png";
import DigitalMarket3 from "./../../images/digitalmarket3.png";
import DigitalMarket4 from "./../../images/digitalmarket4.png";
import click1 from "./../../images/click-1.svg";
import click2 from "./../../images/click-2.svg";
import click3 from "./../../images/click-3.svg";
import click4 from "./../../images/click-4.svg";
import click5 from "./../../images/click-5.svg";
import click6 from "./../../images/click-6.svg";
import React from "react";
import "./DigitalMarketUpdate.css";
import ClicksToConversion from "./ClicksToConversion";
import ThirdSection from "./ThirdSection";
// import ExploreHeroTechnologi from '../ExploreTechnologie/ExploreHeroSection';
import ConsultNow from "../ConsultNow/ConsultNow";
import FaqSection from "../FAQSection/FaqsSection";
import ExploreHeroTechnologi from "./../ExploreTechnologie/ExploreHeroTechnologi";
import { FadeInFromLeft, FadeInFromRight, } from "../animation/animation";

export default function DigitalMarketUpdate() {
  const faqs = [
    {
      question:
        "How can digital marketing help grow my business?",
      answer:
        " Digital marketing helps your business increase brand visibility, attract the right audience, and boost conversions through strategic SEO, PPC, social media, and content marketing efforts. With targeted campaigns, you can drive quality traffic, generate leads, and maximize your return on investment (ROI).",
    },
    {
      question: "How long does it take to see results from SEO and digital marketing?",
      answer:
        "SEO is a long-term strategy that typically shows noticeable improvements within 3-6 months, while PPC and social media ads can deliver instant results. Our customized approach ensures a steady increase in website traffic, engagement, and sales over time.",
    },
    {
      question: "What makes Ambispine Technologies different from other digital marketing agencies?",
      answer:
        "At Ambispine Technologies, we provide data-driven, customized marketing strategies tailored to your business needs. Our expert team, proven track record, and advanced tools ensure that your business stands out in the competitive digital landscape.",
    },
  ];

  const data = [
    {
      id: 1,
      content: "Search Engine Optimization (SEO)",
      hoverContent1: `SEO encompasses various components such as on-page and off-page optimization, keyword research, content optimization, and link building.`,
      hoverContent2:
        "Through effective SEO practices, businesses can achieve higher rankings on search engine results pages, enhanced visibility, increased website traffic, and improved brand recognition.",
      Icon: click1,
      alt: "sco",
    },
    {
      id: 2,
      content: "Pay-per-click (PPC)",
      hoverContent1:
        "Pay-per-click (PPC) is an internet advertising model where advertisers only pay when users click on their ads.",
      hoverContent2:
        "This makes it an effective and cost-efficient method to drive traffic and generate leads for businesses making it a popular choice for digital marketing campaigns.",
      Icon: click2,
      alt: "pay-per-click",
    },
    {
      id: 3,
      content: "Conversion Rate Optimization (CRO)",
      hoverContent1:
        "Conversion Rate Optimization (CRO) is the process of making modifications to a website or web page to enhance its capability to convert visitors into customers or achieve a desired outcome.",
      hoverContent2:
        "CRO is crucial for a successful digital marketing strategy, as it increases the likelihood of visitors turning into customers.",
      Icon: click3,
      alt: "conversion rate optimization",
    },
    {
      id: 4,
      content: "Email Marketing ",
      hoverContent1:
        "Email marketing is a powerful digital marketing tool that allows businesses to nurture leads, build relationships, and drive sales by sending tailored messages and promotional content to current or potential customers via email.",
      hoverContent2:
        "It offers numerous advantages, such as cost-efficiency, easy measurement, and the ability to reach a broad audience.",
      Icon: click4,
      alt: "Email Marketing",
    },
    {
      id: 5,
      content: "Social Media Marketing",
      hoverContent1:
        "Social media marketing involves utilizing social media platforms to engage with customers, build brands, boost sales, and drive website traffic.",
      hoverContent2:
        "By leveraging social media marketing and social media management, businesses can connect with customers, enhance brand recognition, and drive website traffic effectively.",
      Icon: click5,
      alt: "social marketing",
    },
    {
      id: 6,
      content: "Web Design & Development",
      hoverContent1:
        "Web design and development services are essential for creating a user-friendly, visually appealing, and functional website that supports digital marketing efforts.",
      hoverContent2:
        "Web designers and developers are responsible for the full construction of a website, including the page structure and navigation.",
      Icon: click6,
      alt: "web desgin and developer",
    },
  ];

  return (
    <div className="digital-market-update">
      <div className="here-section-digital">
        <ExploreHeroTechnologi
          heading={
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "Developing a Digital<br /> Marketing Plan: See the <br/>  Magic!",
              }}
            />
          }
          subtitle={
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "Digital marketing refers to the promotion of products, brands, or<br />  services using digital channels. The goal of digital marketing <br/>  is to reach and engage with target audiences, drive traffic, generate<br/> leads, and ultimately convert them into customers. ",
              }}
            />
          }
          className="  "
          heroimg={DigitalMarket1}
          imagclasName="imagclasName"
        />
      </div>
      <div>
        <SecondSection
          heading="Let's Set Digital Marketing Goals & Objectives"
          subtitle="At Ambispine Technologies, we specialize in customizing your website to boost business growth, enhance online visibility, and help you stand out in a competitive global market. Let's unlock your business potential with expert digital marketing strategies."
          className=" "
          classNameheader="goal-obj-header"
          heroimg={DigitalMarket2}
          imagclasName="imagclasName"
        />
      </div>
      <div className="Clicks-to-Conversion-Container">
        <div className="clicks-conversion-left">
          <ClicksToConversion data={data} />
        </div>
        <FadeInFromRight className="clicks-conversion-right">
          <h3 className="clicks-conversion-right-header">
            From Clicks to Conversions
          </h3>
          <p className="clicks-conversion-right-sub">
            Digital Marketing MasteryWith Ambispine Technologies, discover the
            power of great work for your business. We help customize your
            products, brands, or services and ensure global visibility. Our
            tailored digital marketing strategies will help you stand out and
            reach your target audience effectively.
          </p>
        </FadeInFromRight>
      </div>
     
      <SecondSection
        heading="Using Data to Inform Digital Marketing Decisions"
        subtitle="Digital marketing services offer businesses of all sizes the chance to market their brand around the clock at an affordable cost. Digital marketing is a crucial component of modern marketing strategies, allowing businesses to connect with their audiences and achieve their goals in a rapidly changing digital landscape."
        className=" "
        imagclasName="imagclasName"
        // classNameheader='goal-obj-header'
        heroimg={DigitalMarket4}
      />
     
      <ThirdSection
        heading="Staying Ahead of the Competition with Digital Marketing"
        subtitle="Ambispine is a full-service digital marketing agency that offers a wide range of services to help your business succeed online. With our dedicated team of experts and a targeted approach to digital marketing, Ambispine ensures your business stays ahead in the competitive digital landscape."
        className=" "
        classNameheader="goal-obj-header"
        heroimg={DigitalMarket3}
        imagclasName="imagclasName"
      />
      <FaqSection faqs={faqs} />
      <ConsultNow />
    </div>
  );
}
