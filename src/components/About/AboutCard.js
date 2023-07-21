import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sohan Monies </span>
            from <span className="purple"> Hassan , Karnataka, India.</span>
            <br /> A top 1% TryHackMe achiever, skilled <span className="purple">full-stack web developer, Ethical hacker, and Flutter expert.</span> With a passion for pushing boundaries, My prowess in cybersecurity, web development, and Flutter app development is unmatched

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
