import React from 'react';
import { FaChartLine, FaMobileAlt, FaEnvelope } from "react-icons/fa"; 
import "./MarketingPage.css";
import marketingImg from "../../assets/content/marketing.png";
import { AnimatedCardList, AnimatedCard, ContainerVariants, cardvarienttoptobottom, FadeInFromRight } from '../animation/animation';
const MarketingPage = () => {
    const marketing = [
        {
            name: "SEO Consulting",
            description: "Get expert advice on improving your website’s search engine rankings.",
            icon: <FaChartLine />,
        },
        {
            name: "Social Media Marketing",
            description: "Increase engagement and reach your target audience through social media channels.",
            icon: <FaMobileAlt />,
        },
        {
            name: "Email Marketing",
            description: "Drive customer retention and conversions through personalized email campaigns.",
            icon: <FaEnvelope />,
        },
    ];

    return (
        <div className='marketing-container'>
            <div className="marketing-grid">
                <div className="m-left">
                    <img src={marketingImg} alt="Marketing Illustration" className='m-img' />
                </div>
                <div  className='m-right'>
                    {marketing.map((item, index) => (
                        <div  className="m-item" key={index}>
                            <div className="m-icon">{item.icon}</div>
                            <div className="m-content">
                                <h4 className="m-title">{item.name}</h4>
                                <p className="m-subtitle">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketingPage;
