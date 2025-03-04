import React, { Fragment } from "react";
import cloudServicesImage from "../../assets/custom-software-development.gif";
import { FaArrowDown } from "react-icons/fa";
import softwareImage1 from "../../assets/softwareDevelopment1.jpg";
import softwareImage2 from "../../assets/Cloud-2.jpg";
import softwareImage3 from "../../assets/iot.jpg";
import softwareImage4 from "../../assets/integrations.jpg";
import softwareImage5 from "../../assets/learning-and-ai.jpg";
import softwareImage6 from "../../assets/api.jpg";
import softwareImage7 from "../../assets/enterprise1.png";
import "./CustomSoftwareDevelopment.css";
import {
  FaApple,
  FaClipboardCheck,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaUserTie,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import ProcessCard from "../card/ProcessCard";
import OurCustomersSection from "../card/OurCustomersSection";
import HeroSection from "../card/Hero/HeroSections";
import heroImg from "../../assets/software-development.jpg";
import styles from "../../common/common.module.css";

const works = [
  {
    Icon: <FaApple size={30} color="#fff" />,
    title: "Custom Software Development",
    description:
      "We develop tailored software solutions that align with your business needs, enhancing efficiency and driving growth.",
  },
  {
    Icon: <FaClipboardCheck size={30} color="#fff" />,
    title: "Software Consulting",
    description:
      "Our expert consultants help define your software requirements, assess technical needs, and recommend the best solutions for your business.",
  },
  {
    Icon: <FaPaintBrush size={30} color="#fff" />,
    title: "UI/UX Design",
    description:
      "Our talented designers create intuitive, user-friendly interfaces that enhance the user experience and reflect your brand identity.",
  },
  {
    Icon: <FaCode size={30} color="#fff" />,
    title: "Software Development",
    description:
      "We build scalable, secure, and high-performance software solutions using the latest technologies and frameworks.",
  },
  {
    Icon: <FaBug size={30} color="#fff" />,
    title: "Quality Assurance",
    description:
      "Our QA experts ensure your software is free from bugs, optimizing performance and ensuring a seamless user experience.",
  },
];

const boostCards = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop customized software solutions to solve your unique business challenges and drive success.",
    img: softwareImage1,
    Icon: <i className="fa fa-mobile-alt"></i>,
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide cloud-based solutions for secure, scalable, and cost-effective business operations.",
    img: softwareImage7,
    Icon: <i className="fa fa-building"></i>,
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Developing robust, scalable software solutions to meet the complex needs of enterprise-level businesses.",
    img: softwareImage4,
    Icon: <i className="fa fa-sync"></i>,
  },
  {
    title: "Software Integration",
    description:
      "We integrate new software seamlessly with your existing workflows, ensuring smooth transitions and efficiency.",
    img: softwareImage3,
    Icon: <i className="fa fa-wifi"></i>,
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop user-friendly mobile applications for iOS and Android platforms, tailored to meet your business goals.",
    img: softwareImage2,
    Icon: <i className="fa fa-cloud"></i>,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    img: softwareImage5,
    Icon: <i className="fa fa-brain"></i>,
  },
  {
    title: "API Development",
    description:
      "We build secure, efficient APIs to enable seamless communication between applications and services.",
    img: softwareImage6,
    Icon: <i className="fa fa-code"></i>,
  },
];
const cardsData = [
  {
    title: "Expert Team",
    description:
      "Our experienced software development team specializes in creating customized solutions that address your unique business needs.",
    icon: <FaUsers size={30} />,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your business goals and objectives, tailoring our services to meet your needs and ensure your success.",
    icon: <FaUserTie size={30} />,
  },
  {
    title: "Agile Methodology",
    description:
      "Our agile approach allows us to adapt to changing requirements and deliver efficient, high-quality solutions on time.",
    icon: <GiShakingHands size={30} />,
  },
  {
    title: "Cost-Effective",
    description:
      "We optimize resources to deliver high-quality solutions within your budget, ensuring maximum value for your investment.",
    icon: <FaDollarSign size={30} />,
  },
];

const CustomSoftwareDevelopment = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <HeroSection
        title="Software Development Service"
        subtitle=" Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help
          in boosting the revenue and gaining maximum growth. In this era of tec"
        onScrollDown={handleScrollDown}
        heroId="custom-hero"
        backgroundImage={heroImg}
        className="gradient-background"
      />
      <section className={styles.sectionGrid}>
        <div className={styles.sectionText}>
          <h2>Software Development Solutions</h2>
          <p>
            In today's fast-paced digital landscape, custom software development
            is crucial for businesses to stay ahead of the competition. Our
            software development services help you design, develop, and deploy
            robust software solutions that meet your unique needs and goals.
          </p>
        </div>
        <div className={styles.sectionImage}>
          <img src={cloudServicesImage} alt="Software Development" />
        </div>
      </section>
      <section className="solutions-section-wrapper wrapper">
        <div className="solutions-section1">
          <div className="wrapper-1000">
            <h2 className="service-heading">Software Development Solutions</h2>
            <p className="service-paragraph">
              In today's fast-paced digital landscape, custom software
              development is crucial for businesses to stay ahead of the
              competition. Our software development services help you design,
              develop, and deploy robust software solutions that meet your
              unique needs and goals.
            </p>
          </div>
          <div className="solutions-section-card ">
            {works.map((work, index) => (
              <div className="solutions-card" key={index}>
                <div className="">{work.Icon}</div>
                <div className="solutions-details">
                  <h4 className="fw-semibold">{work.title}</h4>
                  <p className="">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section-wrapper wrapper">
        <div className="solutions-section1">
          <div className="wrapper-1000">
            <h2 className="service-heading">
              Boost Your Business with Our Software Development Services
            </h2>
            <p className="service-paragraph">
              AmbiSpine Technologies, we specialize in providing cutting-edge
              software development services tailored to your business needs.
              From startups to enterprises, our expert team delivers scalable,
              high-performance solutions that empower your business to thrive in
              today’s digital landscape
            </p>
          </div>
          <div className="boost-card-container">
            {boostCards.map((card, index) => (
              <div className="boost-card" key={index}>
                <div className="boost-icon">{card.Icon}</div>
                <h4 className="boost-title">{card.title}</h4>
                <p className="boost-description">{card.description}</p>
                <img src={card.img} alt={card.title} className="boost-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessCard cardsData={cardsData} />

      <OurCustomersSection />
    </Fragment>
  );
};

export default CustomSoftwareDevelopment;
