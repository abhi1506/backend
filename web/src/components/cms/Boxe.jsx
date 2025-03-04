import React from 'react';
import './Boxe.css';
import { FadeInFromLeft, FadeInFromRight, FadeInDown, FadeInUp, ScaleAnimation } from "../animation/animation";

const Boxes = () => {

  const contentTypes = [
    { id: 1, title: 'Article', className: 'box1' },
    { id: 2, title: 'Blog Post', className: 'box2' },
    { id: 3, title: 'Case Study', className: 'box3' },
    { id: 4, title: 'White Paper', className: 'box4' },
  ];

  return (
    <div className="content-types">
      <h1 className="content-types-title">Types of Content We Offer</h1>

      <div className="box-main-container">
        <div className="box-container">
          {contentTypes.map((item, index) => (
            <FadeInUp
              key={item.id}
              className={`box-content ${index % 2 === 0 ? 'box-left' : 'box-right'} ${item.className}`}
            >
              <FadeInFromRight className={item.className === 'box1' ? 'box-content-cms' : ''}>{item.title}</FadeInFromRight>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
