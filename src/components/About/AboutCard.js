import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lakshit Sharma </span>
            from <span className="purple"> Dungarpur, India.</span>
            <br />I am a B.TECH in Computer Science & Engineering PIET Vadodara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Esports
            </li>
            <li className="about-activity">
              <ImPointRight /> Clubbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lakshit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
