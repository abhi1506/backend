import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import "./TeamSection.css";

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="icon-wrapper">
      <Icon className="icon" />
    </div>
  </a>
);

const TeamMember = ({ name, role, avatar, socialMedia }) => (
  <div className="team-member" data-aos="fade-up">
    <div className="member-image-container">
      <div className="image-overlay"></div>
      <img
        src={avatar?.url || "/api/placeholder/400/400"}
        alt={name}
        className="member-image"
      />
      <div className="social-icons">
        {socialMedia?.linkedin && (
          <SocialIcon href={socialMedia.linkedin} icon={FaLinkedin} />
        )}
        {socialMedia?.twitter && (
          <SocialIcon href={socialMedia.twitter} icon={FaTwitter} />
        )}
        {socialMedia?.instagram && (
          <SocialIcon href={socialMedia.instagram} icon={FaInstagram} />
        )}
        {socialMedia?.facebook && (
          <SocialIcon href={socialMedia.facebook} icon={FaFacebook} />
        )}
      </div>
    </div>
    <div className="member-info">
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
    </div>
  </div>
);

const TeamSection = () => {
  const dispatch = useDispatch();
  const { teamMembers, loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const filteredTeamMembers = teamMembers.filter((member) => {
    const lowerRole = member.role.toLowerCase();
    return (
      !member.leader &&
      !lowerRole.includes("founder") &&
      !lowerRole.includes("cmo") &&
      !lowerRole.includes("cloud engineer")
    );
  });

  if (loading) return <div className="loading">Loading team...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="team-sectionn">
      <div className="container">
        <h2 className="section-title">Our Amazing Team</h2>
        <div className="section-subtitle">
          Meet the talented individuals behind our success
        </div>
        <div className="team-grid">
          {filteredTeamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
