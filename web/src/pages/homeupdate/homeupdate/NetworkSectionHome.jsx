import React from "react";
// import "./HomeSection.css";
import "./NetworkSectionHome.css";

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";

// import officediscussingImg from "../../assets/office-discussing.avif";
import empowerImg1 from "../../../assets/empowerImg1.jpg";
import learnImg from "../../../assets/learn.jpg";
import connectedImg from "../../../assets/connect.avif";
import maximize from "../../../assets/maximize.jpg";
// import maximi from "../../assets/maximi.png";
import cmsimg from "./../../../assets/homeWing.png";
import ImgContRightHeroSection from "./ImgContRightHeroSection";
import { BottomToTop } from "../../../components/animate/AnimatedComponent";
export default function NetworkSectionHome() {
  const spreadsServices = [
    {
      src: empowerImg1,
      Icon: <HiMiniUserGroup />,
      alt: "Image 2",
      text: "Discover how you can empower your life by accessing valuable resources and expert support through a strong network. Follow your passion and make choices that truly resonate with your goals.",
      headText: "Empower your life",
    },
    {
      src: learnImg,
      alt: "Image 3",
      Icon: <MdLeaderboard />,
      headText: "Learn New Skills",
      text: "Embrace a journey of continuous growth where every new skill has an infinite impact. Never stop learning—together, we can reach new heights and build a network that drives success.",
    },
    {
      src: connectedImg,
      alt: "Image 4",
      Icon: <RiShareForwardFill />,
      headText: "Connect, Capture And Share",
      text: "Experience a world at your fingertips. Connect with global communities, capture your unique ideas, and share your vision with the world. Spread your wings and soar to new heights—feel the power of genuine connection today!",
    },
  ];

  return (
    <div className="">
      <div className="home-spread-services-container">
        <ImgContRightHeroSection
          leftImg={cmsimg}
          rheading="Spread Your Wings, Expand Your Network"
          rsubtitle="Expand your reach and influence. Grow your connections, increase your opportunities, and access new resources. Forge bonds with emerging possibilities and horizons."
          imgclss=""
          redirect="/product/spreads"
        />
        <div className="home-spread-service-section">
          <div className="home-spread-services-header">
            <div className="hom-services-title-col-left">
              <h2 className="home-services-main-title">
                <span className="home-services-connect-learn">Connect, Learn, Grow</span> <br/>
                Your premier destination for professional growth and networking
              </h2>
            </div>
            <div className="hom-services-title-col-right">
              <p className="home-right-services-subtitle">
                Implies that a stronger network can provide valuable support and
                tools highlights the potential for new experiences and
                possibilities
              </p>
            </div>
          </div>
          <div className="home-spread-service-line"></div>

          <div className="home-services-grid">
            {spreadsServices.map((data, index) => (
              <div key={index} className="home-services-grid-card2">
                {/* <div className="service-icon"></div> */}
                <h4 className="home-services-grid-card2-header ">
                  <span className="home-spread-service-grid-icon">
                    {data.Icon}
                  </span>
                  {data.headText}
                </h4>
                <p className="home-services-grid-card2-description">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="maximize-section-update">
       

        <div className="maximize-home-header">
          <BottomToTop delay={0.4}>
            <h2 className="maximize-home-header-title ">
              Maximize efficiency with <br /> intelligent automation
            </h2>
          </BottomToTop>
          <BottomToTop delay={0.6}>
            <p className="maximize-home-header-subtitle">
            <span style={{ fontWeight: "600", color: "#007BFF", fontSize: "25px" }}>
               AMBISPINE TECHNOLOGIES
            </span>{" "}

              <span style={{ fontSize: "20px" }}>
                invites you to join our vibrant digital community platform
              </span>
            </p>
          </BottomToTop>
        </div>

        <div className="maximize-content-section">
          <ImgContRightHeroSection
            leftImg={maximize}
            rheading={
              <span
                dangerouslySetInnerHTML={{
                  __html: "Elevate Your Business with <br /> Cloud Expertise",
                }}
              />
            }
            rsubtitle="AMBISPINE TECHNOLOGIES invites you to join our vibrant digital community platform, where you can connect, collaborate, and drive creativity and innovation. Join us to unlock endless possibilities and experience the transformative power of limitless potential!"
            imgclss=""
            redirect="/services/cloud-solution"
          />
        </div>
      </div>
    </div>
  );
}
