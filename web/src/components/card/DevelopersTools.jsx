
import React from "react";
import "./DeveloperTool.css";
// Import icon images
import dropboxIcon from "../../assets/dropbox-1.svg";
import githubIcon from "../../assets/github-icon-1.svg";
import trelloIcon from "../../assets/trello.svg";
import slackIcon from "../../assets/slack-new-logo.svg";
import jiraIcon from "../../assets/jira-3.svg";
import bugzillaIcon from "../../assets/Buggie.svg";
import evernoteIcon from "../../assets/evernote-icon.svg";
import gitlabIcon from "../../assets/gitlab.svg";
import reactIcon from '../../assets/react.svg';
import cssIcon from '../../assets/css-3.svg'
import htmlIcon from '../../assets/html-1.svg'
import nodejsIcon from '../../assets/nodejs-icon.svg'
import expressIcon from '../../assets/express-5.svg';
import bootstrapIcon from '../../assets/bootstrap-5-1.svg'
import javascriptIcon from '../../assets/javascript-1.svg';
import databaseIcon from '../../assets/amazon-database.svg';

const DevelopersTools = () => {
  const tools = [
    { name: "html", icon: htmlIcon },
    { name: "css", icon: cssIcon },
    { name: "javascript", icon: javascriptIcon },
    { name: "node js", icon: nodejsIcon },
    { name: "express", icon: expressIcon },
    { name: "bootstrap", icon: bootstrapIcon },
    { name: "database", icon: databaseIcon },
    { name: "GitHub", icon: githubIcon },
  ];

  return (
    <div className="developers-tools-section">
      <h2>Our Developers Employ Top-Tier Technological Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img
              src={tool.icon}
              alt={`${tool.name} logo`}
              className="tool-icon"
            />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopersTools;
