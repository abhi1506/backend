import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import "./LeadershipSectionn.css";

const leaderBios = [
  {
    quote:
      "A specialist in cloud infrastructure, DevOps, and scalable architectures, ensuring secure, high-performance, and agile technology solutions.",
    description:
      "An expert in cloud computing, DevOps, and scalable infrastructure, Abhishek Singh oversees the technological advancements at Ambispine Technologies. His expertise in cloud-native solutions, security, and system architecture helps businesses achieve agility, performance, and reliability. Passionate about innovation, he ensures that our cloud solutions remain cutting-edge and future-ready.",
    achievements: [
      "Cloud Infrastructure Excellence – Designed and implemented scalable, secure, and high-performance cloud solutions, ensuring reliability and agility.",
      "Tech-Led Product Success – Led the technical execution of multiple digital products, optimizing backend infrastructure for speed and scalability.",
    ],
  },
  {
    quote:
      "A results-driven marketing leader, crafting data-powered brand strategies, digital engagement, and customer acquisition plans to maximize business growth.",
    description:
      "A strategic marketing leader, Mayank Shrivastava specializes in brand positioning, digital marketing, and customer acquisition. With a data-driven approach, he crafts powerful marketing strategies that enhance business visibility and establish Ambispine Technologies as a leader in AI, cloud computing, and automation. His focus on growth-driven marketing ensures maximum engagement and business impact.",
    achievements: [
      " Brand & Market Expansion – Engineered data-driven marketing strategies that increased brand visibility and customer acquisition.",
      "Revenue & Customer Growth – Developed performance-driven campaigns, leading to higher conversions and sustained business growth.",
      "Industry Positioning & Engagement – Established Ambispine Technologies as a thought leader in AI, cloud computing, and automation through strategic branding and outreach.",
    ],
  },
  {
    quote: " A pioneering leader in artificial intelligence, automation, and machine learning, driving digital transformation with innovative, data-driven solutions.",
    description:
      "A visionary entrepreneur and AI expert, Aditya Shrivastava leads Ambispine Technologies with a mission to revolutionize businesses through AI-driven automation and intelligent solutions. With a deep understanding of machine learning and digital transformation, he focuses on building innovative, scalable technologies that drive efficiency and long-term growth. His leadership ensures that Ambispine stays ahead in the rapidly evolving tech landscape.",
    achievements: [
      " Pioneering AI & Automation – Led the development of intelligent automation solutions that optimize business processes and decision-making.",
      "Driving Digital Transformation – Spearheaded the integration of machine learning and AI to revolutionize industries and enhance efficiency.",
      "Business Growth & Innovation – Built and scaled Ambispine Technologies, positioning it as a leader in AI-driven automation and digital solutions.",
    ],
  },
];

const BioModal = ({ leader, bioIndex, onClose }) => {
  const staticBio = leaderBios[bioIndex] || leaderBios[0];

  return (
    <div className="bio-modal-overlay" onClick={onClose}>
      <div className="bio-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-bio" onClick={onClose}>
          <p style={{ color: "#fff", fontSize: "18px" }}>x</p>
        </button>
        <div className="bio-header">
          <div className="bio-image-container">
            <img
              src={leader.avatar?.url || "/api/placeholder/400/400"}
              alt={leader.name}
              className="bio-image"
            />
          </div>
          <div className="bio-title">
            <h2>{leader.name}</h2>
            <p className="bio-role">{leader.role}</p>
            <div className="bio-social-icons">
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {leader.twitter && (
                <a
                  href={leader.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="bio-content">
          <h3>About</h3>
          <div className="bio-quote">
            <blockquote>{staticBio.quote}</blockquote>
          </div>
          <div className="bio-description">{staticBio.description}</div>
          <div className="bio-achievements">
            <h4>Key Achievements</h4>
            <ul>
              {staticBio.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedBioIndex, setSelectedBioIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const handleOpenBio = (leader, index) => {
    setSelectedLeader(leader);
    setSelectedBioIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseBio = () => {
    setSelectedLeader(null);
    document.body.style.overflow = "unset";
  };

  // Filter leader members
  const leaders = teamMembers.filter((member) => member.leader);

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <p className="team-description">
        Even the best technology needs the best people with the right spirit
        behind it. Right across the world, we have a team of dreamers and doers
        just like you, ready to help bring your ideas to life. Here are the
        folks leading the charge.
      </p>

      <h2 className="visionary-title">Meet the Visionary Leader</h2>

      <div className="leaders-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <div className="card-image">
              <img
                src={leader.avatar?.url || "/api/placeholder/400/400"}
                alt={leader.name}
                className="leader-image"
              />
            </div>
            <div className="card-content">
              <h3>{leader.name}</h3>
              <p className="role">{leader.role}</p>
              <div className="social-icons-leader">
                <a
                  href={leader.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href={leader.twitter || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper"
                >
                  <FaTwitter className="icon" />
                </a>
              </div>
              <button
                className="read-bio-btn"
                onClick={() => handleOpenBio(leader, index % leaderBios.length)}
              >
                Read Bio
                <span className="arrow-leader">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedLeader && (
        <BioModal
          leader={selectedLeader}
          bioIndex={selectedBioIndex}
          onClose={handleCloseBio}
        />
      )}
    </div>
  );
};

export default LeadershipSection;