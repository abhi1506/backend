import React, { useRef, useEffect } from "react";
import "./CareerWithUs.css";
import careerImg1 from "../../images/career/c-1.png";
import careerImg2 from "../../images/career/c-2.png";
import careerImg3 from "../../images/career/c-3.png";
const CareerWithUs = () => {
  const contentRef = useRef(null);

  const contentItems = [
    {
      icon: careerImg1,
      num: 1,
      heading: "Culture",
      description:
        "Our culture fosters individual talent, mutual trust and lifelong learning. We support our people so they can master their career journeys, go further, reach higher, and realize their greatest potential.",
    },
    {
      icon: careerImg2,
      num: 2,
      heading: "Values",
      description:
        "We truly believe that if we grow together, we achieve more as a society. At Digital Janet, we let every individual shape the journey.",
    },
    {
      icon: careerImg3,
      num: 3,
      heading: "Work at the Latest Frontier",
      description:
        "From cloud to AI and everything in between, our people work with today’s most cutting-edge technologies to bring innovative solutions to solve complex challenges facing our clients—and our communities.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    const elements = contentRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div>
      <section ref={contentRef} className="career-features-section">
        <h2 className="career-section-title">Why Career with Us</h2>
        <p className="career-section-para">
          We're shaping the future of freight and logistics. If you're excited
          by the prospect of unlocking the world's potential by speeding up the
          way goods move, join us
        </p>
        <div className="career-features-grid">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="career-feature-card animate-on-scroll"
              aria-label={`Feature: ${item.heading}`}
            >
              <div className="c-container">
                <div className="big-icons-circle-relative">
                  <img
                    src={item.icon}
                    alt={item.heading}
                    className="career-feature-icon"
                  />
                  <div className="small-num-circle-absolute">{item.num}</div>
                </div>
              </div>
              <h3 className="career-feature-heading">{item.heading}</h3>
              <p className="career-feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerWithUs;
