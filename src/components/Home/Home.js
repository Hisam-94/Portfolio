import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";
// import projectIcon from "../../assets/icons/project-icon.svg";
// import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Resume, ResumeLink } from "../styles/About.styled";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Title>Hello 👋.</Title>
        <Name>
          I'm <span style={{ color: "#e64e04" }}>Hisamuddin Shaikh</span>
        </Name>
        {/* <Title>Full Stack Developer</Title> */}
        <Title>
          <Typewriter
            options={{
              strings: ["Full Stack Developer."],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </Title>
        <p style={{ color: "#e64e04" }}>
          I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
        </p>
        {/* <StyledButtonsContainer> */}
        {/* <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton> */}
        {/* <Resume>
            <ResumeLink href={resume}
              icon={downloadIcon}
              download="resume-hisamuddin-shaikh">Download Resume</ResumeLink>
          </Resume> */}

        <Resume>
          <ResumeLink
            href={
              "https://drive.google.com/file/d/1IdTax8BQOzpIvRMgtRgBx4B1mS8RC-n4/view"
            }
            target="_blank"
            icon={downloadIcon}>
            Download Resume
          </ResumeLink>
        </Resume>
        {/* </StyledButtonsContainer> */}
        {/* <Line /> */}
        <Greeting>
          have a great
          <span style={{ color: "#e64e04" }}>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="mailto:hisamuddin94@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/Hisam-94"
            target="_blank"
            rel="noopener noreferrer">
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/hisamuddin-shaikh"
            target="_blank"
            rel="noopener noreferrer">
            <GrLinkedinOption />
          </Social>
        </Socials>
        <Quote>Don't wish for it! Work for it!</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
