import React from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPhp,
  FaSwift,
  FaAndroid,
  FaVuejs,
  FaSass,
  FaDatabase,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import "./TechnologyComponent.css";
import { ScaleAnimationInfinite } from "../components/animation/animation";
const technologies = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "Swift", icon: <FaSwift />, color: "#FA7343" },
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "Vue.js", icon: <FaVuejs />, color: "#42B883" },
  { name: "Sass", icon: <FaSass />, color: "#CC6699" },
  { name: "Database", icon: <FaDatabase />, color: "#6C6C6C" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
];

const TechnologyComponent = () => {
  return (
    <div className="tech-container">
      <h1 className="tech-heading">Our Technologies</h1>
      <p className="tech-subheading">
        Leveraging cutting-edge frameworks and advanced tools, we craft
        innovative digital solutions that empower your business growth and
        competitive edge.
      </p>

      <div className="hex-grid">
        {technologies.map((tech, index) => (
          <ScaleAnimationInfinite>
            <div key={index} className="hex" style={{ background: tech.color }}>
              <div className="hex-inner">
                {tech.icon}
                <p className="tech-name">{tech.name}</p>
              </div>
            </div>
          </ScaleAnimationInfinite>
        ))}
      </div>
    </div>
  );
};

export default TechnologyComponent;
