import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/lakshit-sharma.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [hackerrank, upadteHackerank] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR WEB DEVELOPER [INNOLABZ]"
              date="MARCH 2021 - PRESENT"
              content={[
                "Working as a FULL STACK DEVELOPER in Innolabz.",
                "Here I am building websites and apps using django framework.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [ Projections-2019 Technical Fest of PIET Vadodara ]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [ Projections-2020 Technical Fest of PIET Vadodara ]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="COMPUTER SCIENCE & ENGINEERING [ PIET, Vadodara ] "
              date="2017 - 2021"
              content={[`CGPA: ${cgpa}`]}
            />
            {/* sem variable hatana h */}
            <Resumecontent
              title="12TH BOARD [SHIV JYOTI SCHOOL, Kota]"
              date="2017"
              content={["Precentage: 62.4%"]}
            />
            <Resumecontent
              title="10TH BOARD [MODERN SCHOOL, Dungarpur] "
              date="2014"
              content={["Precentage: 76%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in HackerRank  ${hackerrank}`,
                `2nd in IDEATHON, Parul University`,                
                "Project selected for Smart India Hackathon (SIH)",
                "3rd Devpholio Hackathon",
                


              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
