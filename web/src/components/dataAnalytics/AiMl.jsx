import React from "react";
import HeroSection from "../../layouts/HeroSection";
import AiImage from "../../assets/AI.jpg";
import { FaBrain, FaRobot, FaCloud, FaCogs } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import "./Ai.css";

const AiMl = () => (
  <div>
    <HeroSection
      icon="🤖"
      title="AI & ML Solutions"
      bgImage={AiImage}
      subtitle="Transforming businesses with cutting-edge AI and ML technologies."
    />

    <div className="ai-container">
    
      <div className="ai-intro-section">
        <div className="ai-intro-content">
          <h2 className="ai-heading">What Are AI & ML?</h2>
          <p>
            Artificial Intelligence (AI) and Machine Learning (ML) are technologies that
            allow systems to learn from data, identify patterns, and make decisions with minimal
            human intervention. AI & ML solutions can revolutionize industries by automating
            processes, improving customer experiences, and driving intelligent decision-making.
          </p>
        </div>
        <div className="ai-intro-image">
          <img src={AiImage} alt="AI & ML" />
        </div>
      </div>

    
      <div className="ai-content-section">
        <h2 className="ai-heading">Why Choose Our AI & ML Solutions?</h2>
        <p>
          At <strong>AmbiSpine Technologies</strong>, we specialize in delivering AI and ML solutions
          that help businesses unlock the full potential of their data. Our expertise in
          building intelligent systems empowers organizations to make smarter, data-driven decisions.
        </p>
        <ul className="ai-features-list">
          <li><strong>Automation:</strong> Automate repetitive tasks and processes.</li>
          <li><strong>Predictive Analytics:</strong> Forecast future trends accurately.</li>
          <li><strong>Personalization:</strong> Deliver tailored experiences.</li>
        </ul>
      </div>

   
      <div className="ai-tech-section">
        <h3 className="ai-subheading">Technologies We Use</h3>
        <p>
          Our AI & ML solutions leverage cutting-edge tools and technologies to deliver intelligent systems:
        </p>

        <div className="ai-tech-cards-container">
          <div className="ai-tech-card">
            <FaBrain className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>AI & ML Frameworks</h4>
              <p>TensorFlow, PyTorch, Scikit-learn, Keras</p>
            </div>
          </div>

          <div className="ai-tech-card">
            <SiTensorflow className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>Machine Learning Frameworks</h4>
              <p>TensorFlow, PyTorch, Keras</p>
            </div>
          </div>

          <div className="ai-tech-card">
            <FaRobot className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>Natural Language Processing</h4>
              <p>SpaCy, NLTK, GPT</p>
            </div>
          </div>

          <div className="ai-tech-card">
            <FaCloud className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>Cloud Platforms</h4>
              <p>AWS SageMaker, Google AI, Microsoft Azure AI</p>
            </div>
          </div>

          <div className="ai-tech-card">
            <SiGooglecloud className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>Big Data & Cloud</h4>
              <p>Google BigQuery, Apache Spark, Hadoop</p>
            </div>
          </div>

          <div className="ai-tech-card">
            <SiMicrosoftazure className="ai-tech-icon" />
            <div className="ai-tech-content">
              <h4>Cloud Services</h4>
              <p>Microsoft Azure AI, Google AI, AWS</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="ai-case-section">
        <h3 className="ai-subheading">Case Studies</h3>
        <p>
          <strong>Example 1: AI-Powered Chatbot for Customer Support</strong>
          <br />
          We developed a state-of-the-art AI-powered chatbot that helped a leading retailer
          reduce customer service response time by 40%, improve customer satisfaction, and
          automate 30% of support inquiries.
        </p>
        <p>
          <strong>Example 2: Predictive Maintenance for Manufacturing</strong>
          <br />
          Our ML model predicted equipment failures before they occurred, resulting in a 25%
          reduction in downtime and saving the company millions in repair costs.
        </p>

        <h3 className="ai-subheading">Why Partner with Us?</h3>
        <p>
          Partnering with <strong>AmbiSpine Technologies</strong> means accessing a team of AI/ML experts
          committed to delivering cutting-edge solutions. We ensure that each solution we provide
          is tailored to your specific business needs and delivers measurable results.
        </p>

        <h3 className="ai-subheading">Next Steps</h3>
        <p>
          Ready to leverage the power of AI & ML to transform your business? Let's work together
          to create a customized solution that drives innovation and accelerates growth. Contact us
          today to get started.
        </p>
        <button className="ai-cta-button">Get in Touch</button>
      </div>
    </div>
  </div>
);

export default AiMl;
