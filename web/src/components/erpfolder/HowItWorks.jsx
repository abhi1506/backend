// import React, { useState, useEffect } from "react";

// const HowItWorks = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const segments = [
//     { value: 60, color: "linear-gradient(45deg, #4361EE, #3A0CA3)" },
//     { value: 40, color: "linear-gradient(45deg, #3A0CA3, #7209B7)" },
//     { value: 80, color: "linear-gradient(45deg, #7209B7, #F72585)" },
//     { value: 50, color: "linear-gradient(45deg, #F72585, #4361EE)" },
//     { value: 70, color: "linear-gradient(45deg, #4361EE, #3A0CA3)" },
//   ];

//   const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0);

//   return (
//     <div className="section-container">
//       <h1 className={`title ${isVisible ? "animate" : ""}`}>
//         ERP Functionality
//       </h1>

//       <div className="content-wrapper">
//         <div className="text-content">
//           <p>
//             Streamlined, automated, and data-driven ERP processes for business
//             growth.
//           </p>
//         </div>

//         <div className="charts-container">
//           {/* Stick Chart */}
//           <div className={`stick-chart ${isVisible ? "animate" : ""}`}>
//             {segments.map((segment, index) => (
//               <div
//                 key={index}
//                 className="stick"
//                 style={{
//                   height: `${segment.value}%`,
//                   background: segment.color,
//                   animationDelay: `${index * 0.2}s`,
//                 }}
//               >
//                 <span className="stick-value">{`${segment.value}%`}</span>
//               </div>
//             ))}
//           </div>

//           {/* Circle Chart */}
//           <div className={`circle-chart ${isVisible ? "animate" : ""}`}>
//             {segments.map((segment, index) => {
//               const rotation =
//                 (360 / totalValue) *
//                 segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
//               return (
//                 <div
//                   key={index}
//                   className="circle-segment"
//                   style={{
//                     transform: `rotate(${rotation}deg)`,
//                     background: segment.color,
//                     animationDelay: `${index * 0.2}s`,
//                   }}
//                 />
//               );
//             })}
//             <div className="circle-label">
//               {segments.map((segment, index) => {
//                 const startAngle =
//                   (360 / totalValue) *
//                   segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
//                 const endAngle =
//                   startAngle + (360 / totalValue) * segment.value;
//                 const midAngle = (startAngle + endAngle) / 2;

//                 const radius = 120; // Distance from the center
//                 const x = Math.cos((midAngle * Math.PI) / 180) * radius;
//                 const y = Math.sin((midAngle * Math.PI) / 180) * radius;

//                 return (
//                   <span
//                     key={index}
//                     className="segment-label"
//                     style={{
//                       left: `calc(50% + ${x}px)`,
//                       top: `calc(50% + ${y}px)`,
//                       transform: `translate(-50%, -50%)`,
//                       animationDelay: `${index * 0.2}s`,
//                     }}
//                   >
//                     {`${segment.value}%`}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .section-container {
//           background-color: #1a1a2e;
//           min-height: 100vh;
//           padding: 60px 20px;
//           color: white;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           font-family: "Poppins", sans-serif;
//         }

//         .title {
//           font-size: 3rem;
//           margin-bottom: 50px;
//           text-align: center;
//           opacity: 0;
//           transform: translateY(-20px);
//           transition: all 0.8s ease;
//           background: linear-gradient(45deg, #4361ee, #f72585);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .title.animate {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .content-wrapper {
//           max-width: 1200px;
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 60px;
//         }

//         .text-content {
//           max-width: 800px;
//           text-align: center;
//           background: rgba(255, 255, 255, 0.1);
//           padding: 30px;
//           border-radius: 15px;
//           backdrop-filter: blur(10px);
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeInUp 0.8s ease forwards;
//           animation-delay: 0.3s;
//         }

//         .text-content p {
//           font-size: 1.2rem;
//           line-height: 1.6;
//           margin: 0;
//         }

//         .charts-container {
//           display: flex;
//           justify-content: center;
//           gap: 80px;
//           flex-wrap: wrap;
//           width: 100%;
//         }

//         /* Stick Chart Styles */
//         .stick-chart {
//           display: flex;
//           justify-content: space-around;
//           align-items: flex-end;
//           width: 100%;
//           max-width: 600px;
//           height: 300px;
//           gap: 20px;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.8s ease;
//         }

//         .stick-chart.animate {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .stick {
//           width: 40px;
//           border-radius: 5px 5px 0 0;
//           position: relative;
//           opacity: 0;
//           transform: scaleY(0);
//           transform-origin: bottom;
//           animation: revealStick 0.5s ease forwards;
//           box-shadow: 0 0 10px rgba(67, 97, 238, 0.5);
//         }

//         .stick-value {
//           position: absolute;
//           bottom: -30px;
//           left: 50%;
//           transform: translateX(-50%);
//           font-size: 1rem;
//           color: white;
//         }

//         @keyframes revealStick {
//           to {
//             opacity: 1;
//             transform: scaleY(1);
//           }
//         }

//         /* Circle Chart Styles */
//         .circle-chart {
//           position: relative;
//           width: 300px;
//           height: 300px;
//           border-radius: 50%;
//           opacity: 0;
//           transform: scale(0.8);
//           transition: all 0.8s ease;
//           box-shadow: 0 0 20px rgba(67, 97, 238, 0.5);
//         }

//         .circle-chart.animate {
//           opacity: 1;
//           transform: scale(1);
//         }

//         .circle-segment {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           clip-path: polygon(50% 50%, 100% 0, 100% 100%);
//           opacity: 0;
//           transform-origin: center;
//           animation: revealSegment 0.5s ease forwards;
//         }

//         @keyframes revealSegment {
//           to {
//             opacity: 1;
//           }
//         }

//         .circle-label {
//           position: absolute;
//           top: 46%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 100%;
//           height: 100%;
//         }

//         .segment-label {
//           position: absolute;
//           font-size: 0.9rem;
//           color: white;
//           opacity: 0;
//           animation: fadeIn 0.5s ease forwards;
//           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
//         }

//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//           }
//         }

//         @media (max-width: 768px) {
//           .title {
//             font-size: 2.5rem;
//           }

//           .stick-chart {
//             height: 250px;
//           }

//           .circle-chart {
//             width: 250px;
//             height: 250px;
//           }

//           .text-content {
//             padding: 20px;
//           }

//           .text-content p {
//             font-size: 1.1rem;
//           }

//           .charts-container {
//             gap: 40px;
//           }
//         }

//         @media (max-width: 480px) {
//           .title {
//             font-size: 2rem;
//           }

//           .stick-chart {
//             height: 200px;
//           }

//           .circle-chart {
//             width: 200px;
//             height: 200px;
//           }

//           .stick-value {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HowItWorks;

// ====================

import React, { useState, useEffect } from "react";
import "./HowItWorks.css"; // Import the CSS file

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const segments = [
    { value: 60, color: "linear-gradient(45deg, #4361EE, #3A0CA3)" },
    { value: 40, color: "linear-gradient(45deg, #3A0CA3, #7209B7)" },
    { value: 80, color: "linear-gradient(45deg, #7209B7, #F72585)" },
    { value: 50, color: "linear-gradient(45deg, #F72585, #4361EE)" },
    { value: 70, color: "linear-gradient(45deg, #4361EE, #3A0CA3)" },
  ];

  const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <div className="how-it-works-container">
      <h1 className={`how-it-works-title ${isVisible ? "animate" : ""}`}>
        ERP Functionality
      </h1>

      <div className="how-it-works-content-wrapper">
        <div className="how-it-works-text-content">
          <p style={{ color: "#fff" }}>
            Streamlined, automated, and data-driven ERP processes for business
            growth.
          </p>
        </div>

        <div className="how-it-works-charts-container">
          {/* Stick Chart */}
          <div
            className={`how-it-works-stick-chart ${isVisible ? "animate" : ""}`}
          >
            {segments.map((segment, index) => (
              <div
                key={index}
                className="how-it-works-stick"
                style={{
                  height: `${segment.value}%`,
                  background: segment.color,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <span className="how-it-works-stick-value">{`${segment.value}%`}</span>
              </div>
            ))}
          </div>

          {/* Circle Chart */}
          <div
            className={`how-it-works-circle-chart ${
              isVisible ? "animate" : ""
            }`}
          >
            {segments.map((segment, index) => {
              const rotation =
                (360 / totalValue) *
                segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
              return (
                <div
                  key={index}
                  className="how-it-works-circle-segment"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    background: segment.color,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              );
            })}
            <div className="how-it-works-circle-label">
              {segments.map((segment, index) => {
                const startAngle =
                  (360 / totalValue) *
                  segments.slice(0, index).reduce((sum, s) => sum + s.value, 0);
                const endAngle =
                  startAngle + (360 / totalValue) * segment.value;
                const midAngle = (startAngle + endAngle) / 2;

                const radius = 120; // Distance from the center
                const x = Math.cos((midAngle * Math.PI) / 180) * radius;
                const y = Math.sin((midAngle * Math.PI) / 180) * radius;

                return (
                  <span
                    key={index}
                    className="how-it-works-segment-label"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%)`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {`${segment.value}%`}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
