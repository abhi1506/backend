import React, { Fragment } from 'react';
import "./Process.css";

const ProcessCard = ({ cardsData }) => {
  return (
    <Fragment>
      <section className="development-process">
  <div className="container">
  <div className="process-cards-container">
  {/* Left Section: Title and Subtitle */}
  <div className="process-left">
    <h1 className="section-process-title">
      Why Choose Us for Mobile App Development Solutions?
    </h1>
    <p className="section-process-subtitle fw-normal">
     Mobile app development is becoming increasingly popular for its various benefits such as:
    </p>
  </div>
  
  {/* Right Section: Cards */}
  <div className="process-right">
    {cardsData.map((card, index) => (
      <div className="process-cards" key={index}>
         <p className='process-cards-iicons' style={{color:'#007bff'}}> {card.icon}</p>
        <h5 className="process-cards-title">
          {card.title}
        </h5>
        <p className="process-cards-d">
          {card.description}
        </p>
      </div>
    ))}
  </div>
</div>

  </div>
</section>

      
    </Fragment>
  );
};

export default ProcessCard;
