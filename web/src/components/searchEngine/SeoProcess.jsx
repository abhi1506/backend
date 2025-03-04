// import React from "react";
// import "./SeoProcess.css";
// import { motion } from "framer-motion";

// const seoSteps = [
//   "Website Audit",
//   "Keyword Research",
//   "Competitor Analysis",
//   "On-Page Optimization",
//   "Technical SEO",
//   "Content Creation",
//   "Link Building",
//   "Local SEO",
//   "Mobile Optimization",
//   "Performance Monitoring",
// ];

// const scaleVariants = {
//   hidden: { scale: 0.8, opacity: 0 },
//   show: {
//     scale: 1.2,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//       repeat: Infinity,
//       repeatType: "mirror",
//     },
//   },
// };
// const SeoProcess = () => {
//   const leftSteps = seoSteps.slice(0, 5);
//   const rightSteps = seoSteps.slice(5);

//   return (
//     <section className="seo-process">
//       <div className="seo-process-container">
//         {/* Left Side */}
//         <div className="seo-process-left">
//           {leftSteps.map((step, index) => {
//             // Adjust margin for "(" curve shape
//             const curveSpacingLeft = `${
//               Math.pow(
//                 Math.abs(index - Math.floor(leftSteps.length / 2)),
//                 1.5
//               ) * 20
//             }px`;

//             const leftStepStyle = {
//               marginLeft: curveSpacingLeft,
//               marginRight: `calc(${curveSpacingLeft} + 20px)`, // Push outward
//               backgroundColor: index % 2 === 0 ? "skyblue" : "orange",
//               color: "white",
//             };

//             return (
//               <div key={index} className="seo-process-step">
//                 <div className="seo-step-box-card" style={leftStepStyle}>
//                   <div className="seo-step-box-card-body">
//                     <h5 className="text-center">{step}</h5>
//                   </div>
//                   <div className="seo-step-number-circle">{index + 1}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

       

//         <motion.div
//           className="seo-process-middle-circle"
//           initial="hidden"
//           animate="show"
//           variants={scaleVariants}
//         >
//           <div>
//             <h3>Our SEO Process</h3>
//           </div>
//         </motion.div>

//         {/* Right Side */}
//         <div className="seo-process-right">
//           {rightSteps.map((step, index) => {
//             // Adjust margin for ")" curve shape
//             const curveSpacingRight = `${
//               Math.pow(
//                 Math.abs(index - Math.floor(rightSteps.length / 2)),
//                 1.5
//               ) * 10
//             }px`;

//             const rightStepStyle = {
//               marginLeft: `calc(${curveSpacingRight} + 30px)`, // Push outward
//               marginRight: curveSpacingRight,
//               backgroundColor: index % 2 === 0 ? "skyblue" : "orange",
//               color: "white",
//             };

//             return (
//               <div key={index} className="seo-process-step">
//                 <div className="seo-step-box-card" style={rightStepStyle}>
//                   <div className="seo-step-box-card-body">
//                     <h5>{step}</h5>
//                   </div>
//                   <div className="seo-step-number-circle-left">{index + 6}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeoProcess;
import React from "react";
import "./SeoProcess.css";
import { motion } from "framer-motion";

const seoSteps = [
  "Website Audit",
  "Keyword Research",
  "Competitor Analysis",
  "On-Page Optimization",
  "Technical SEO",
  "Content Creation",
  "Link Building",
  "Local SEO",
  "Mobile Optimization",
  "Performance Monitoring",
];

const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1.2,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const SeoProcess = () => {
  const leftSteps = seoSteps.slice(0, 5);
  const rightSteps = seoSteps.slice(5);

  return (
    <section className="seo-process">
      <div className="seo-process-container">
        {/* Left Side */}
        <div className="seo-process-left">
          {leftSteps.map((step, index) => {
            const curveSpacing = `${Math.pow(
              Math.abs(index - Math.floor(leftSteps.length / 2)),
              1.5
            ) * 10}px`;

            const stepStyle = {
              marginLeft: curveSpacing,
              marginRight: `calc(${curveSpacing} + 20px)`,
              backgroundColor: index % 2 === 0 ? "skyblue" : "orange",
              color: "white",
            };

            return (
              <div key={index} className="seo-process-step">
                <div className="seo-step-box-card" style={stepStyle}>
                  <div className="seo-step-box-card-body">
                    <h5 className="text-center">{step}</h5>
                  </div>
                  <div className="seo-step-number-circle">{index + 1}</div>
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          className="seo-process-middle-circle"
          initial="hidden"
          animate="show"
          variants={scaleVariants}
        >
          <div>
            <h3>Our SEO Process</h3>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="seo-process-right">
          {rightSteps.map((step, index) => {
            const curveSpacing = `${Math.pow(
              Math.abs(index - Math.floor(rightSteps.length / 2)),
              1.5
            ) * 10}px`;

            const stepStyle = {
              marginRight: curveSpacing,
              marginLeft: `calc(${curveSpacing} + 20px)`,
              backgroundColor: index % 2 === 0 ? "skyblue" : "orange",
              color: "white",
            };

            return (
              <div key={index} className="seo-process-step">
                <div className="seo-step-box-card" style={stepStyle}>
                  <div className="seo-step-box-card-body">
                    <h5>{step}</h5>
                  </div>
                  <div className="seo-step-number-circle-left">{index + 6}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeoProcess;
