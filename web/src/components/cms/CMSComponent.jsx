import React from "react";
import "./CMS.css";
import cmsHero from "../../assets/contentHero.jpeg";
import cmsImg from "../../assets/content-4.png";
import cmsImg2 from "../../assets/content-5.jpeg";
import CmsCardSection from "./CmsCardSection";
import ContentTypes from "./ContentTypes";
import ConsultNow from "../ConsultNow/ConsultNow";
import FaqSection from "../FAQSection/FaqsSection";
import {Link} from 'react-router-dom'
import { Button } from './../button/Button'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Boxes from "./Boxe";
import { FaLongArrowAltRight } from "react-icons/fa";

import { FadeInFromLeft, FadeInFromRight, FadeInDown, ScaleAnimation } from "../animation/animation";

export const cardData = [
  { id: 1, title: "Development", content: "Streamline your content management process with our customizable and scalable CMS solutions." },
  { id: 2, title: "Integration", content: "Seamlessly integrate our CMS with your existing systems to enhance efficiency and collaboration." },
  { id: 3, title: "Migration", content: "Effortlessly migrate your data to a modern CMS while ensuring security and minimal downtime." },
  { id: 4, title: "Maintenance", content: "Keep your CMS running smoothly with regular updates, security patches, and performance optimizations." },
];

export const faqData = [
  { question: "How does your CMS improve SEO rankings?", answer: "Our CMS comes with built-in SEO tools, including meta tags, keyword optimization, fast loading speeds, mobile responsiveness, and structured data—helping your website rank higher in search engine results." },
  { question: " Can I migrate my existing website to your CMS without losing data?", answer: "Yes! Our seamless migration process ensures that all your content, media files, and SEO settings are transferred securely with minimal downtime, so your business operations remain uninterrupted." },
  { question: "Is your CMS suitable for eCommerce websites?", answer: "Absolutely! Our CMS integrates with eCommerce platforms like Shopify, WooCommerce, and Magento, allowing you to manage products, track orders, and optimize content for conversions effortlessly." },
  { question: "Can multiple team members collaborate on content creation?", answer: "Yes! Our CMS includes role-based access control, enabling teams to collaborate efficiently while maintaining content security and approval workflows." },
  { question: "How secure is your CMS against cyber threats?", answer: "We prioritize enterprise-grade security, offering SSL encryption, regular security updates, malware protection, and advanced user authentication to safeguard your data and ensure compliance with industry standards." }
];

const CMSystemComponent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="cms-hero-section">
        <div className="cms-hero-image">
          <img src={cmsHero} alt="Hero Background" />
        </div>
        <ScaleAnimation className="cms-hero-content">
          <h1 className="cms-hero-title">
            Empower Your Business with Our CMS Solutions
          </h1>
          <p className="cms-hero-subtitle">
            Simplify content management with our customizable and scalable CMS
            platform.
          </p>
        </ScaleAnimation>
      </div>
      <section className="cms-container-component">
      {/* Main CMS Section */}
      <section className="cms-card-solution-section-container">
      <div className="cms-content-section">
        <h1 className="centered-heading">Content Writing Service</h1>
        <br />
        <div className="cms-section">
          <motion.div
            className="cms-section-content"
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}    
            transition={{ duration: 0.5 }}
          >
            <h2 className="cms-section-heading">
              Take Control of Your Content with Our CMS Solutions
            </h2>
            <p className="text-white">
              Enhance efficiency with our customizable content management
              platform, tailored for businesses of all sizes.
            </p>
          </motion.div>
          <motion.div
            className="cms-section-image"
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}    
            transition={{ duration: 0.5 }}
          >
            <img src={cmsImg} alt="CMS Image" />
          </motion.div>
        </div>
      </div>
    </section>
  
        
        <Boxes />
        {/* <ContentTypes /> */}
        <CmsCardSection />

        {/* CMS Features Section */}
        <div className="cms-card-solution-section-container">
          <div className="cms-card-solution-section">
          <FadeInDown className="cms-card-solution-header">
            <h1 className="centered-solution-heading">CMS Solution</h1>
            <br />
            <h1 className="cms-solution-title">Features</h1>
            <p className="cms-solution-description">
            Streamline your content management process with our customizable, scalable, and user-friendly CMS solutions. Effortlessly manage, update, and optimize your website content while ensuring seamless performance, security, and flexibility.
            </p>
            {/* <Link className="solution-btn">Explore Solution</Link> */}
            <Button 
  name='Explore Solution' 
  icon={<FaLongArrowAltRight />} 
  className="cms-effortlessly-btn" 
  redirect='/services/explore-technologies' 
/>
          </FadeInDown>

          <div className="cms-card-solution-container">
          {cardData.map((card, index) => (
          <motion.div
          initial={{y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
            className="cms-solution-card"
            key={card.id}
            style={{ marginRight: `${index * 30}px` }}  
          >
            <h3 className="cms-solution-card-title">{card.title}</h3>
            <p className="cms-solution-card-content">{card.content}</p>
          </motion.div>
        ))}

          </div>
          </div>
        </div>

        {/* Effortlessly Manage Content Section */}
        <div className="cms-effortlessly-section">
          <FadeInFromLeft className="cms-effortlessly-image">
            <img src={cmsImg2} alt="Effortlessly Background" />
          </FadeInFromLeft>
          <FadeInFromRight className="cms-effortlessly-content">
            <h1 className="cms-effortlessly-title">
              Take Control of Your Content Strategy
            </h1>
            <p className="cms-effortlessly-subtitle">
              Experience a seamless content management journey with our
              all-in-one CMS.
            </p>
            <Button name='Explore Solution' icon={<FaArrowRight />} className="cms-effortlessly-btn" redirect='/services/explore-technologies' />

            {/* <Link to="/services/explore-technologies" className="solution-btn">Explore Solution</Link> */}
          </FadeInFromRight>
        </div>

        {/* FAQ Section */}
        <FaqSection faqs={faqData} />

        {/* Get Free Consultation Section */}
        <ConsultNow />
      </section>
    </>
  );
};

export default CMSystemComponent;