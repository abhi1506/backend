import React from "react";
import "./FormAnimation.css";

const AnimatedForm = ({ children, className = "", onSubmit }) => {
  // Convert children to array to handle both single and multiple children
  const childrenArray = React.Children.toArray(children);

  return (
    <form className={`animated-form ${className}`} onSubmit={onSubmit}>
      {childrenArray.map((child, index) => {
        // Clone the child element to add animation properties
        return React.cloneElement(child, {
          className: `${child.props.className || ""} form-element`,
          style: {
            ...child.props.style,
            animationDelay: `${index * 0.1 + 0.3}s`,
          },
        });
      })}
    </form>
  );
};

export default AnimatedForm;
