import React from "react";
import "./Footer.scss";
import Logo from "../nav/Logo";
import { GitHub } from "@material-ui/icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-img-container">
          <div className="footer-img">
            <Logo />
          </div>
          <div className="footer-icon">
            <a
              href="https://github.com/KFig21/blog_client"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repo"
            >
              <GitHub />
            </a>
          </div>
        </div>
        <span className="project-desc">
          Built with React, NodeJs, Express, and Mongo Db, this blog was made
          for The Odin Project's NodeJs curriculum by <strong>KFig21</strong>.
          Find me on{" "}
          <a
            href="https://github.com/KFig21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ,{" "}
          <a
            href="https://leetcode.com/KFig21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          , or check out{" "}
          <a
            href="https://kfig21.github.io/portfolio_2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my portfolio
          </a>
        </span>
      </div>
    </footer>
  );
}
