import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <section className="about">
      <h2>Get in Touch</h2>
      <div className="socials">
        {/* <i class="fa-brands fa-linkedin-in"></i> */}
        <a href="https://www.linkedin.com/in/kashish-sondhiya-969120198/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/K-ash-ish">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/KashishSo">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  );
}
export default About;
