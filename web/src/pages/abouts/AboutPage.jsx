import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong, FaTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import "./AboutPage.css";
import AboutusSlider1 from "../../assets/AboutusSlider1.png";
import AboutusSlider2 from "../../assets/AboutusSlider2.png";
import AboutusHero from "../../assets/AboutusHero.png";

const TeamMember = ({ name, role, avatar, socialMedia }) => (
  <div className="team-card">
    <div className="profile-image-container">
      <img
        src={avatar?.url || "/api/placeholder/400/400"}
        alt={`${name}'s profile`}
      />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          {socialMedia.instagram && (
            <a href={socialMedia.instagram}>
              <BiLogoInstagram />
            </a>
          )}
          {socialMedia.facebook && (
            <a href={socialMedia.facebook}>
              <LiaFacebook />
            </a>
          )}
          {socialMedia.twitter && (
            <a href={socialMedia.twitter}>
              <TiSocialTwitterCircular />
            </a>
          )}
          {socialMedia.linkedin && (
            <a href={socialMedia.linkedin}>
              <TiSocialLinkedinCircular />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const visionData = [
    {
      title: "Empowering Tomorrow",
      description:
        "Innovating Today for a Smarter Future. We believe in the power of human connection and the transformative potential of technology.",
      image: AboutusSlider1,
    },
    {
      title: "Building Connections",
      description:
        "Creating meaningful relationships through technology. Our solutions bridge gaps and bring communities together.",
      image: AboutusSlider2,
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  useEffect(() => {
    dispatch(fetchTeamMembers());

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={AboutusHero} alt="Company hero" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1>About Our Company</h1>
          <p>
            In a world where technology bridges gaps and brings people closer,
            we stand at the forefront of innovation.
          </p>
        </div>
      </section>

      {/* Enhanced Vision Section with Carousel */}
      <section className={`vision-section ${isVisible ? "fade-in" : ""}`}>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <div className="vision-carousel">
            <div className="vision-slide">
              <div className="vision-image">
                <img src={visionData[currentSlide].image} alt="Vision" />
              </div>
              <div className="vision-details">
                <h3>{visionData[currentSlide].title}</h3>
                <p>{visionData[currentSlide].description}</p>
                <div className="carousel-controls">
                  <button onClick={handlePrevSlide} className="carousel-btn">
                    <FaArrowLeftLong />
                  </button>
                  <button onClick={handleNextSlide} className="carousel-btn">
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section className="leadership-section">
        <div className="leadership-header">
          <h2>Our Leadership</h2>
          <p className="leadership-intro">
            Meet the visionaries who guide our company towards excellence and
            innovation. Our leadership team brings decades of combined
            experience in technology, business strategy, and digital
            transformation.
          </p>
        </div>
        <div className="leadership-grid">
          {teamMembers
            .filter((member) => member.leader)
            .map((leader, index) => (
              <div key={index} className="leadership-card">
                <div className="leadership-content">
                  <div className="leadership-image">
                    <img
                      src={leader.avatar?.url || "/api/placeholder/400/400"}
                      alt={leader.name}
                    />
                  </div>
                  <div className="leadership-info">
                    <h3>{leader.name}</h3>
                    <p className="leader-role">{leader.role}</p>
                    <p className="leader-description">
                      {leader.description ||
                        "A visionary leader with extensive experience in driving innovation and growth."}
                    </p>
                    <div className="leader-stats">
                      <div className="stat">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Projects Led</span>
                      </div>
                    </div>
                    <div className="social-links">
                      {leader.socialMedia.linkedin && (
                        <a href={leader.socialMedia.linkedin}>
                          <RiLinkedinBoxFill />
                        </a>
                      )}
                      {leader.socialMedia.twitter && (
                        <a href={leader.socialMedia.twitter}>
                          <FaTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers
            .filter((member) => !member.leader)
            .map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
