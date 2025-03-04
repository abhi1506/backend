import React, { Fragment } from "react";
import "./SearchEngine.css";
import cloudServicesImage from "../../assets/cloud-services.jpg";
import SeoProcess from "./SeoProcess";
import ConsultNow from "../ConsultNow/ConsultNow";
import Comprehensive from "./Comprehensive";
import WhyUsSection from "./WhyUsSection";
import FaqSection from "../FAQSection/FaqsSection";
import MarketingPage from "./MarketingPage";
import Optimization from "./Optimization";
import seoImg from "../../assets/seo-hero.jpg"

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, driving more organic traffic to your site and improving visibility.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO results typically take 3-6 months to become noticeable, depending on the competition, target keywords, and your website’s current SEO health.",
  },
  {
    question: "Do I need SEO if my website already gets traffic?",
    answer:
      "Yes! Even if you are receiving traffic, SEO can help you further optimize your website for better conversion rates, increased visibility, and sustained growth over time.",
  },
  {
    question: "Can SEO help my local business?",
    answer:
      "Absolutely! Local SEO is essential for businesses aiming to attract customers within a specific geographic area. It helps improve visibility in local search results.",
  },
  {
    question: "Will SEO work for any business?",
    answer:
      "Yes, SEO is beneficial for businesses across all industries. Whether you're in e-commerce, healthcare, or real estate, SEO can help you reach a wider audience and drive quality traffic.",
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer:
      "We measure SEO success through metrics like keyword rankings, organic traffic growth, conversion rates, and return on investment (ROI). Regular reports are provided to track progress.",
  },
];
const cardsData = [
  {
    title: "Content SEO",
    description:
      "We provide top-notch content writing services tailored to your needs.",
    imageSrc: cloudServicesImage,
  },
  {
    title: "Web Development",
    description:
      "Build modern, responsive, and user-friendly websites with our team.",
    imageSrc: cloudServicesImage,
  },
  {
    title: "SEO Links",
    description:
      "Boost your online presence with our digital marketing solutions.",
    imageSrc: cloudServicesImage,
  },
];

const SearchEngine = () => {
  return (
    <Fragment>
    <div className="hero-container-seo">
  <div className="overlay-seo"></div>
  <div className="content-seo">
    <h1 className="title-seo">
      Boost Your Online Visibility with Our SEO Services
    </h1>
    <p className="description-seo">
      Technology helps things get better! It helps things get smaller,
      faster, and easier much and much better. Your Android app has to be
      one that boosts the image of your company. It should have those
      features that your audience can use with ease. Android applications
      help in boosting revenue and gaining maximum growth.
    </p>
  </div>
</div>

      <Comprehensive />

      <div className="seo-main-container">
        <section className="Content-writing-container ">
          <div className=""></div>
        </section>
        <div className="search-engine-seo-process">
        <SeoProcess />
        </div>
     
        {/* <SEOProcess /> */}

        <MarketingPage/>
        <Optimization/>
        <WhyUsSection />

        <FaqSection faqs={faqs} />

        <ConsultNow />
      </div>
    </Fragment>
  );
};

export default SearchEngine;
