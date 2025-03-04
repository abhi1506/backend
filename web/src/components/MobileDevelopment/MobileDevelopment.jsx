import React, {useState} from "react";
import "./MobileDevelopment.css";
import heroBackground from "../../assets/mobileHero.png";
import ConsultNow from "../ConsultNow/ConsultNow";
import Herosection2 from "./Herosection2";
import crmupate5 from '../../images/software-custom1.png';
import TechnologyComponent from "../../future/TechnologyComponent";
import FaqSection from "../FAQSection/FaqsSection";
import { FaProjectDiagram, FaPencilRuler, FaCode, FaBug } from "react-icons/fa";
import { ScaleAnimation, FadeInUp, FadeInFromRight, AnimatedCardList,ContainerVariants , AnimatedCard } from '../animation/animation';
import useIntersectionObserver from "../animation/useIntersectionObserver";
const faq = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Project timelines vary depending on complexity. Simple apps take 2-3 weeks, while feature-rich solutions take 2+ months.",
    },
    {
      question: "How much will my mobile app cost?",
      answer: "Costs depend on features, platform, and development time. Contact us for a personalized quote.",
    },
    {
      question: "Can I update my app in the future?",
      answer: "Yes! We offer ongoing support and updates to keep your app competitive.",
    },
    {
      question: "Do you offer post-launch maintenance?",
      answer: "Absolutely! We provide continuous monitoring, updates, and security patches.",
    },
    {
      question: " Can you integrate third-party services like payment gateways?",
      answer: "Yes, we seamlessly integrate payment gateways, APIs, and third-party services.",
    },
  ];
  const procesData = [
    {
      title: "iOS App Development",
      subtitle: "Build powerful, user-friendly iOS apps that captivate customers with seamless performance and an intuitive design",
    },
    {
      title: "Android App Development",
      subtitle: "Innovative, scalable Android solutions designed to accelerate your business growth and efficiency",
    },
    {
      title: "Hybrid App Development",
      subtitle: "Accelerate market entry with innovative, versatile, cross-platform hybrid apps engineered for success",
    },
    {
      title: "App Design & Prototyping",
      subtitle: "Transform concepts into interactive prototypes and intuitive, user-friendly app designs that captivate and inspire your audience",
    },
    
  ];
 
const processSteps = [
  {
    title: "Planning",
    subtitle: "Defining project goals, requirements, and strategy to ensure a solid foundation.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Design",
    subtitle: "Creating intuitive UI/UX designs that enhance user engagement and experience.",
    icon: <FaPencilRuler />,
  },
  {
    title: "Development",
    subtitle: "Building high-performance, scalable mobile applications with the latest technologies.",
    icon: <FaCode />,
  },
  {
    title: "Testing",
    subtitle: "Ensuring quality, security, and performance through rigorous testing before launch.",
    icon: <FaBug />,
  },
];

  
const features = [
  { 
    title: "Certified Experts", 
    subtitle: "Our mobile app developers, designers, and QA specialists are certified and skilled in the latest technologies.", 
    bgColor: "#FF0C0C" 
  },
  { 
    title: "Innovative Solutions", 
    subtitle: "Driving digital transformation with innovative, creative, and scalable technology solutions.", 
    bgColor: "#F5940C" 
  },
  { 
    title: "User-Centric Design", 
    subtitle: "Crafting intuitive, engaging, and responsive designs that enhance user experience, boost engagement.", 
    bgColor: "#01237F" 
  },
  { 
    title: "Timely Delivery", 
    subtitle: "Guaranteed on-time project completion with efficient workflows, streamlined processes, and commitment to excellence.", 
    bgColor: "#627205" 
  },
  { 
    title: "Customer Support", 
    subtitle: "Reliable 24/7 assistance to ensure seamless operations, quick issue resolution, and uninterrupted business performance.", 
    bgColor: "#63CAD1" 
  }
];


const MobileDevelopment = () => {
  const mobiAppDeVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const mobileCardVariants = {
    hidden: { opacity: 0, scale:  1},
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  
  const CardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -10, skewX: -10 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      skewX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  

  return (
    <div className="mob-dev-container">
    
      <Herosection2 heading="Mobile App Development Delivered Securely On Time & On Budget"
      subtitle=" Launch or scale your mobile application with expertly developed solutions tailored to your business needs.Our team leverages cutting-edge technology and industry insights to deliver secure, scalable, and engaging mobile experiences that drive growth, enhance user engagement, and set you apart in today’s competitive market."
      className=" "
      heroimg={heroBackground}
      imagclasName='imagclasName'
      />
      <section className="mob-dev-wrapper">
  <div className="mob-dev-process-grid">
    
    <div className="mob-dev-content-right">
      <h2>Custom Mobile App Solutions For Every Business Need</h2>
      <p>Transform your digital presence with our tailored mobile app solutions whether building from scratch or enhancing existing apps, we drive innovation, create engaging experiences, and boost business growth and customer satisfaction.</p>
    </div>


    <AnimatedCardList className="mob-dev-col-left" containerVariants={ContainerVariants}>
      {procesData.map((step, index) => (
        <AnimatedCard  variants={mobileCardVariants}
        scaleAmount={1.1}
          key={index} 
          className={`mob-dev-card ${index % 2 === 0 ? "even-card" : "odd-card"}`}
        >
          <h3>{step.title}</h3>
          <p>{step.subtitle}.</p>
        </AnimatedCard>
      ))}
    </AnimatedCardList>

  </div>
</section>



  <section className="mobile-dev-process">
  <div className="process-header">
    <h2>Our Mobile App Development Process</h2>
  </div>
  <FadeInUp className="process-steps">
    <h1>Delivering High-Performance Mobile Solutions with a Data-Driven Approach</h1>

    <AnimatedCardList className="steps-container" containerVariants={ContainerVariants}>
  {processSteps.map((step, index) => (
    <AnimatedCard key={index} variants={mobiAppDeVariants} className="step-card" style={{ "--delay": index + 1 }} aria-label={`Step ${index + 1}: ${step.title}`}>
      <div className="step-icon-wrapper">
        <div className="step-icon">{step.icon}</div>
      </div>
      <h3>{step.title}</h3>
      <p>{step.subtitle}</p>
    </AnimatedCard>
  ))}
</AnimatedCardList>

  </FadeInUp>
</section>


      <TechnologyComponent/>
      {/* Why Choose Us? */}
      <section className="mob-dev-why">
        <h2>Why Choose Us? Proven Expertise, Fast Delivery & Custom Solutions</h2>
        <p>
        Develop engaging, user-friendly mobile applications that empower your business to reach new heights. Our innovative mobile solutions are designed to enhance customer satisfaction, drive business growth, and create intuitive experiences that set your brand apart in the competitive digital marketplace.</p>
        <AnimatedCardList className="mob-dev-flex" containerVariants={ContainerVariants}>
          {features.map((feature, index) => (
    <AnimatedCard 
      key={index} 
      variants={mobiAppDeVariants}
      
    >
      <div 
      className={`mob-dev-feature ${index % 2 === 0 ? "mob-dev-up" : "mob-dev-down"}`}
      
      style={{ backgroundColor: feature.bgColor }}>
      <h3>{feature.title}</h3>
      <p>{feature.subtitle}</p>
      </div>

    </AnimatedCard>
  ))}
</AnimatedCardList>

      </section>

      <FaqSection faqs={faq}/>
      <ConsultNow/>
    </div>
  );
};

export default MobileDevelopment;
