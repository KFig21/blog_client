import React, { useEffect } from "react";
import { Person, Mail, GitHub, Code } from "@material-ui/icons";
import logo from "../../assets/images/logo1TransparentSec.png";
import "./About.scss";

export default function About() {
  useEffect(() => {
    const scrollToTop = async () => {
      await document.getElementById("container").scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="mobile-img-container">
          <img src={logo} alt="" />
        </div>
        <h2 className="mobile">Kevin Figenshu</h2>
        <div className="left">
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
          <div className="info">
            <h2>Kevin Figenshu</h2>
            <div className="item-container">
              <Mail className="icon" />
              <span>Kevin.Figenshu@gmail.com</span>
            </div>
            <a
              href="https://github.com/KFig21"
              target="_blank"
              rel="noopener noreferrer"
              className="item-container"
            >
              <GitHub className="icon" />
              <span>github.com/KFig21</span>
            </a>
            <a
              href="https://kfig21.github.io/portfolio_2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="item-container"
            >
              <Person className="icon" />
              <span>Portfolio</span>
            </a>
            <a
              href="https://leetcode.com/KFig21/"
              target="_blank"
              rel="noopener noreferrer"
              className="item-container"
            >
              <Code className="icon" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            {/* <div class="scroll-fade-top"></div> */}
            <h4 className="mobile-horizontal-title">About Me</h4>
            <p>
              Welcome! My name is Kevin Figenshu, I am a self-taught developer
              and web designer.
            </p>
            <div className="break"></div>
            <p>
              Starting from no-code in January of 2020 I became obsessed with
              the world of programming. Poring through resources such as The
              Odin Project, FreeCodeCamp, and Codecademy I have been developing
              the necessary skills for becoming a full stack developer.
            </p>
            <div className="break"></div>
            <p>
              Prior to programming I graduated with a bachelors in business
              administration with a focus in accounting from Temple University
              and spent 6 years working in the field. I have also been working
              as a free-lance graphic designer since 2017 being self-taught in
              Adobe photoshop & illustrator.
            </p>
            <div className="break"></div>
            <p className="last-p">Let's work together!</p>
            <div className="info mobile">
              <div className="break"></div>
              <div className="item-container">
                <Mail className="icon" />
                <span>Kevin.Figenshu@gmail.com</span>
              </div>
              <a
                href="https://github.com/KFig21"
                target="_blank"
                rel="noopener noreferrer"
                className="item-container"
              >
                <GitHub className="icon" />
                <span>github.com/KFig21</span>
              </a>
              <a
                href="https://kfig21.github.io/portfolio_2021/"
                target="_blank"
                rel="noopener noreferrer"
                className="item-container"
              >
                <Person className="icon" />
                <span>Portfolio</span>
              </a>
              <a
                href="https://leetcode.com/KFig21/"
                target="_blank"
                rel="noopener noreferrer"
                className="item-container"
              >
                <Code className="icon" />
                <span>LeetCode</span>
              </a>
            </div>
            {/* <div class="scroll-fade-bottom"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
