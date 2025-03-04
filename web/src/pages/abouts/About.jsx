import React, { Fragment, useEffect, useState } from "react";
import "./About.css";
// import OurTeam from "./OurTeamComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import { FaArrowRightLong } from "react-icons/fa6";
import connectgrow from "../../images/connect-grow.png";
import connect1 from "../../images/connect1.png";
import hereaabout1 from "../../images/VisionSection1.jpg";
import { Button } from "./../../components/button/Button";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

const AboutPage = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  const [isExpanded, setIsExpanded] = useState(false);
  const fulltext =
    "We are a dynamic community empowering individuals to achieve their goals, expand their network, and discover new opportunities. Through connection, growth, and support, we unlock potential, foster meaningful relationships, and create a ripple effect of success. Join us and transform your life!";

  const teamdata = [
    {
      id: 1,
      name: "Sanjay Kumar",
      role: "Full Stack Developer",
      socialMedia: {
        instagram: "intagram",
        linkedin: "intagram",
      },
    },
    {
      id: 2,
      name: "Sanjay Kumar",
      role: "Full Stack Developer",
      socialMedia: {
        instagram: "intagram",
        linkedin: "intagram",
      },
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      role: "Full Stack Developer",
      socialMedia: {
        instagram: "intagram",
        linkedin: "intagram",
        twitter: "twitter",
      },
    },
    {
      id: 4,
      name: "Sanjay Kumar",
      role: "Full Stack Developer",
      socialMedia: {
        instagram: "intagram",
        linkedin: "intagram",
      },
    },
    // {
    //   id: 5,
    //   name:"Sanjay Kumar",
    //   role :"Full Stack Developer",
    //   socialMedia: {
    //     instagram: "intagram",
    //     linkedin: "intagram",

    //   }
    // },
  ];

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedText = fulltext.split(" ").slice(0, 20).join(" ") + "...";
  console.log(teamMembers);
  return (
    <>
      <div className="about-container">
        <div className="about-here-section">
          <div className="about-here-section-left">
            <div className="about-left-content">
              <h1>About Our Company</h1>
              <p>
                In a world where technology bridges gaps and brings people
                closer, we stand at the forefront. We specialize in enhancing
                business health through robust IT support and innovative SaaS
                applications. Solutions are designed to connect people,
                streamline processes, and empower companies to reach their full
                potential.{" "}
              </p>
            </div>
          </div>
          <div className="about-hero-right-img">
            <img src={hereaabout1} alt="Our Services" />
          </div>

          <div></div>
        </div>

        <div className="about-connect-grow-section">
          <div className="about-connect-left">
            <img src={connectgrow} alt="Our Services" />
          </div>

          <div className="about-connect-right">
            <h1>Connect, grow and succeed with us!</h1>
            <p>
              Empower individual to achieve their goals expand their network and
              find new opportunity. We are a dynamic community empowering
              individuals to achieve their goals, expand their network, and
              discover new opportunities. Through connection, growth, and
              support, we unlock potential, foster meaningful relationships, and
              create a ripple effect of success. Join us and transform your
              life!{" "}
            </p>
            {/* <Link  to="#"  className="about-get-value" data-aos="fade-up">
            Get The Value
        </Link> */}
            <Button
              name="Get The Value"
              redirect="product-spread"
              className=""
            />
          </div>

          <div></div>
        </div>

        <div className="our-vision-conter">
          <div className="our-vision">
            <h1 className="vision-heading">Our Vision</h1>
            <p className="vision-subtitle">
              Empowering Tomorrow: Innovating Today for a Smarter Future.
            </p>
          </div>
          <div className="our-vision-body">
            <div className="about-vision-left">
              <img src={connect1} alt="Our Services" />
            </div>
            <div className="about-vision-right">
              <p>
                we believe in the power of human connection and the
                transformative potential of technology. Our mission is to bridge
                gaps and bring people together, solving real-world problems with
                innovative solutions. Whether it's through our cutting-edge
                software, intuitive platforms, or personalized support, we are
                dedicated to making a positive impact on lives around the globe.
                Join us in creating a better, more connected future, where
                technology meets human ingenuity to overcome challenges and
                unlock new opportunities
              </p>
              <p className="text-end">
                <FaArrowRightLong className="about-arrow" />
              </p>
            </div>
          </div>

          <div></div>
        </div>

        <div className="our-leader-container">
          <div className="our-vision">
            <h1 className="leader-heading">Our Leadership</h1>
            <p className="leader-ship-line"></p>
            <p className="leader-subtitle">
              Even the best technology needs the best people with the right
              spirit behind it. Right across the world, we have a team of
              dreamers and doers just like you, ready to help bring your ideas
              to life. Here are the folks leading the charge
            </p>
          </div>
          {teamMembers
            .filter((member) => member.leader) // First, filter only leaders
            .sort((a, b) => {
              // Sort leaders: Founder first, then Co-Founder & CMO, then others
              const roleOrder = {
                Founder: 1,
                "Co-Founder & CMO": 2,
              };
              return (roleOrder[a.role] || 3) - (roleOrder[b.role] || 3);
            })
            .map((member, index) => (
              <div
                key={index}
                className={`our-ceo-container ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
              >
                <div className="ceo-image-container">
                  <img src={member.avatar?.url} alt="leader" />
                  <p className="leader-name">{member.name}</p>
                </div>
                <div className="leader-description">
                  <p className="text-lead" style={{ color: "white" }}>
                    {member.content}
                  </p>
                  <div className="leader-social-icons">
                    {member.socialMedia.linkedin && (
                      <a href={member.socialMedia.linkedin}>
                        <RiLinkedinBoxFill className="social-media-team leader-social-media" />
                      </a>
                    )}
                    {member.socialMedia.twitter && (
                      <a href={member.socialMedia.twitter}>
                        <FaTwitter className="social-media-team leader-social-media" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

          <div></div>
        </div>

        <div className="team-page">
          <h1 className="com-subtitle">Meet Our Team</h1>

          <div className="com-team">
            {teamMembers
              .filter((member) => !member.leader)
              .map((member, index) => (
                <OurTeam key={index} {...member} />
              ))}
          </div>
        </div>
      </div>

      <section></section>
    </>
  );
};

export default AboutPage;
