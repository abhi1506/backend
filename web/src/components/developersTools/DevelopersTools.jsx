import React from 'react';
import "./DeveloperTools.css"
// Import icon images
import dropboxIcon from '../../assets/dropbox-1.svg';
import githubIcon from '../../assets/github-icon-1.svg';
import trelloIcon from '../../assets/trello.svg';
import slackIcon from '../../assets/slack-new-logo.svg';
import jiraIcon from '../../assets/jira-3.svg';
import bugzillaIcon from '../../assets/Buggie.svg';
import evernoteIcon from '../../assets/evernote-icon.svg';
import gitlabIcon from '../../assets/gitlab.svg';

const DevelopersTools = () => {
  const tools = [
    { name: 'Dropbox', icon: dropboxIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Trello', icon: trelloIcon },
    { name: 'Slack', icon: slackIcon },
    { name: 'Jira', icon: jiraIcon },
    { name: 'Bugzilla', icon: bugzillaIcon },
    { name: 'Evernote', icon: evernoteIcon },
    { name: 'GitLab', icon: gitlabIcon },
  ];

  return (
    <div className="developers-tools-section">
      <h2>Our Developers Employ Top-Tier Technological Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopersTools;