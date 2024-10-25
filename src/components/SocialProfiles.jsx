import React from "react";
import "../resources/css/SocialProfiles.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import { socialprofils } from "../Utils/Constants";

function SocialProfiles() {
  return (
    <div className="lets_connect_section">
      <h2>Let's Connect</h2>

      <div className="stick_follow_icon">
        <ul>
          {socialprofils.twitter && (
            <li>
              <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </li>
          )}
          {socialprofils.github && (
            <li>
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </li>
          )}
          {socialprofils.facebook && (
            <li>
              <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </li>
          )}
          {socialprofils.linkedin && (
            <li>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </li>
          )}
           {socialprofils.reddit && (
            <li>
              <a href={socialprofils.reddit} target="_blank" rel="noopener noreferrer">
                <RedditIcon />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SocialProfiles;
