import { BiCodeAlt } from "react-icons/bi";
import { useEffect, useRef } from "react";
import "./ExploreServices.css";

const services = [
  { id: 1, title: "Custom Software Development" },
  { id: 2, title: "Mobile App Development" },
  { id: 3, title: "Web Application Development" },
  { id: 4, title: "Consultancy & Strategy" },
  { id: 5, title: "UX/UI Design" },
];

const ExploreServices = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
          }
        }
      });
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="explore-services-container">
      <h2 className="explore-services-title">Our Software Development Services</h2>
      <div className="explore-services-card-container">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className={`explore-service-card explore-card-${index}`}
            aria-label={`Service: ${service.title}`}
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <div className="service-icon" role="img" aria-label="Code Icon">
              <BiCodeAlt />
            </div>
            <p className="service-text">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;

