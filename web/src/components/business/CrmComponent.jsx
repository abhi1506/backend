import React from 'react';
import businessImage from "../../assets/crm.png";
import leadImage from "../../assets/lead.jpg";
import salesImage from "../../assets/sale.jpg";
import customerImage from "../../assets/customer-1.jpg";
import FAQ from '../card/FaqsSection';

const faq=[
  { question: "What is CRM software?", answer: "CRM software helps businesses manage customer relationships, track leads, and automate workflows." },
  { question: "Is my data secure?", answer: "Yes, our platform uses industry-standard encryption to ensure data security." },
  { question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade or downgrade your plan at any time." },
]
const chooseData=[
  { 
    title: "24/7 Dedicated Support", 
    text: "Our expert team is available around the clock to assist with all your needs.", 
    icon: "headset"
  },
  { 
    title: "Fully Customizable Solutions", 
    text: "Adapt our CRM platform to align perfectly with your unique business processes.", 
    icon: "tools"
  },
  { 
    title: "Cost-Effective Plans", 
    text: "Flexible pricing models designed to suit enterprises of all sizes.", 
    icon: "dollar-sign"
  },
  { 
    title: "Scalability and Security", 
    text: "Future-proof your business with enterprise-grade scalability and secure systems.", 
    icon: "shield-alt"
  },
  { 
    title: "Global Expertise", 
    text: "Trusted by multinational corporations worldwide for superior CRM solutions.", 
    icon: "globe"
  },
  { 
    title: "Seamless Integration", 
    text: "Integrate our CRM seamlessly with your existing tools and platforms.", 
    icon: "sync-alt"
  },
]
const HeroSection = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".container-erp");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero_erp">
      <div className="hero-content_erp">
        <h1>Revolutionize Your Business with CRM Solutions</h1>
        <p>Manage customers, track sales, and boost productivity with ease.</p>
        <button className="cta-button_erp" onClick={handleScrollDown}>Read More</button>
      </div>
      <div className="hero-image_erp">
        <img
          src={businessImage}
          alt="Business professional"
          className="professional-image-erp"
        />
      </div>
    </section>
  );
};

const FeaturesSection = () => (
  <section className="my-5">
    <div className="container container-erp">
      <h2 className="text-center mb-5">CRM Features</h2>
      <div className="row">
        {[
          { title: "Lead Management", text: "Track and manage leads effectively.", img: leadImage },
          { title: "Sales Automation", text: "Automate repetitive sales tasks to save time.", img: salesImage },
          { title: "Customer Analytics", text: "Analyze customer data for better decision-making.", img: customerImage },
        ].map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-erp shadow-sm">
              <img src={feature.img} className="card-img-top card-erp-img-top" alt={feature.title} />
              <div className="card-body">
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="my-5 bg-primary text-white py-5">
    <div className="container text-center">
    <h2 className="mb-4 font-weight-bold">Why Choose AmbiSpine Technologies?</h2>
      <p className="lead mb-5">
        AmbiSpine Technologies Pvt Ltd, we’re committed to driving innovation, empowering businesses, and delivering exceptional value.
      </p>
      <div className="row">
        {chooseData.map((reason, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card bg-light text-dark shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className={`fas fa-${reason.icon} fa-3x text-primary`}></i>
                </div>
                <h5 className="card-title font-weight-bold">{reason.title}</h5>
                <p className="card-text">{reason.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const PlansAndPricingSection = () => (
  <section className="my-5">
    <div className="container text-center">
      <h2 className="mb-5">Strategic Partnership with Scalable Software Solutions </h2>
      <div className="row">
        {[
          { plan: "SAP ",  features: ["Ehance your business processes with SAP CRM solution that is efficient, scalable, and reliable. Optimize customer engagement, improve operational efficiency, and achieve seamless interactions with powerful tools designed to drive success."] },
          { plan: "Oracle", features: ["Optimize performance with OracleOptimize your operations and drive innovation with Oracle’s robust and scalable solutions. Enhance efficiency, ensure reliability, and unlock growth with cutting-edge technology tailored to your business needs. ERP Intelligent, adaptable, cloud-powered solutions."] },
          { plan: "NetSuite", features: ["Streamline operations and drive growth with NetSuite’s cloud-based ERP solutions. From financial management to CRM, experience unified and scalable tools designed to optimize your business processes and empower success."] },
        ].map((pricing, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{pricing.plan}</h5>
                <h6 className="card-price">{pricing.price}</h6>
                <ul className="list-unstyled mt-3 mb-4">
                  {pricing.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const CallToActionSection = () => (
  <section className="consultation_business-section">
    <div className="consultation1-box text-center">
      <h3>Get Free Consultation Now!</h3>
      <p>Let's create a powerful website that grows with your business</p>
      <button className="consult-btn">Get Free Consultation →</button>
    </div>
  </section>
);

const CRMComponent = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <WhyChooseUsSection />
    <PlansAndPricingSection />
    <FAQ faqs={faq} />
    <CallToActionSection />
  </div>
);

export default CRMComponent;
