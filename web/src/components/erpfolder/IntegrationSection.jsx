import React, { useEffect, useState } from "react";
import "./IntegrationSection.css";
import ERPBusiness from "../../assets/erpTeam-1.png";
import { FadeInFromLeft } from "../animation/animation";

const IntegrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      title: "Unified Business Management",
      description:
        "Seamlessly integrate core business functions for enhanced efficiency and streamlined operations.",
    },
    {
      title: "Streamlined Business Operations",
      description: "Enhance efficiency, automate workflows, and improve business operations effortlessly",
    },
    {
      title: "Data-Driven Insights",
      description: "Centralized, real-time data access for accurate insights and improved business efficiency",
    },
    {
      title: "Enhance Customer Experience",
      description:
        "Seamless data flow and instant access to customer information for superior satisfaction",
    },
  ];

  return (
    <div className="integration-container">
      <div className="content-left">
        <h1 className={`${isVisible ? "animate" : ""}`}>
        Transform Your Business with Absolute ERP Software
        </h1>
        <FadeInFromLeft className="steps-container-integration">
          {steps.map((step, index) => (
            <div
              className={`step ${isVisible ? "animate" : ""}`}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="arrow"></div>
              <div className="step-content">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </FadeInFromLeft>
      </div>
      <div className="content-right">
        <img
          src={ERPBusiness}
          alt="Team collaboration illustration"
          className={`illustration ${isVisible ? "animate" : ""}`}
        />
      </div>
    </div>
  );
};

export default IntegrationSection;

// import React, { useEffect, useState } from "react";
// import "./IntegrationSection.css";

// const IntegrationSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const steps = [
//     {
//       title: "Sign Up",
//       description:
//         "Create an account with AmbiSpine Technologies to get started.",
//     },
//     {
//       title: "Connect Systems",
//       description: "Integrate your existing systems with our platform.",
//     },
//     {
//       title: "Customize Workflow",
//       description: "Tailor the platform to fit your team's unique needs.",
//     },
//     {
//       title: "Go Live",
//       description:
//         "Start using AmbiSpine Technologies to streamline your operations.",
//     },
//   ];

//   return (
//     <section className="integration-container">
//       <div className="integration-wrapper">
//         <div className="content-left">
//           <h1 className={isVisible ? "animate" : ""}>
//             Seamless Integration Across Departments and Functions
//           </h1>
//           <div className="steps-container-integration">
//             {steps.map((step, index) => (
//               <div
//                 className={`step ${isVisible ? "animate" : ""}`}
//                 key={index}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="arrow"></div>
//                 <div className="step-content">
//                   <h2>{step.title}</h2>
//                   <p>{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="content-right">
//           <img
//             src="/integration-illustration.svg"
//             alt="Team collaboration illustration"
//             className={`illustration ${isVisible ? "animate" : ""}`}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntegrationSection;
