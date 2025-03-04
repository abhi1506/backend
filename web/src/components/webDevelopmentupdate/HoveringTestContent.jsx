import React from 'react';
import './HoveringTextContent.css';

export default function HoveringTestContent({ data = [] }) {
  return (
    <div className="HoveringContent-Container">
      <div className="hovering-container-2">
        {data.map((item) => (
          <div className="hovering-main-container" key={item.id || item.src}>
            <div className="Hovering-wrapper-img">
              <img src={item.src} alt={item.alt} />
              <div className="Hovering-content">
                <h4 className="hoverin-content-header">{item.content}</h4>
                <p className="hovering-content-subtitle">
                  {item.hoverContent2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}