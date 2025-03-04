// // AnimatedComponent.js
// import React, { useEffect, useState } from "react";
// import "./Animated.css";

// // Bottom to Top Animation Component
// export const BottomToTop = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       className={`bottom-to-top ${isVisible ? "visible" : ""}`}
//       style={{ animationDelay: `${delay}s` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Left to Right Animation Component
// export const LeftToRight = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       className={`left-to-right ${isVisible ? "visible" : ""}`}
//       style={{ animationDelay: `${delay}s` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Form Animation Component
// export const AnimatedForm = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       className={`form-animation ${isVisible ? "visible" : ""}`}
//       style={{ animationDelay: `${delay}s` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Fade In Animation Component
// export const FadeIn = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       className={`fade-in ${isVisible ? "visible" : ""}`}
//       style={{ animationDelay: `${delay}s` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Scale Animation Component
// export const ScaleIn = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       className={`scale-in ${isVisible ? "visible" : ""}`}
//       style={{ animationDelay: `${delay}s` }}
//     >
//       {children}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import "./Animated.css";

// Bottom to Top Animation Component
export const BottomToTop = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bottom-to-top-pp ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Left to Right Animation Component
export const LeftToRight = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`left-to-right-tt ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Fade In Animation Component
export const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`fade-in-inn ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Scale Animation Component
export const ScaleIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`scale-in-inn ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
