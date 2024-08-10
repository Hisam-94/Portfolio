import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  // Resume,
  // ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "../../assets/my-image.jpg";
import myImage from "../../assets/Hisam.jpeg";
// import downloadIcon from "../../assets/icons/download-icon.svg";
// import resume from "../../assets/Resume.pdf";


const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />          
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            Hello! My name is Hisamuddin Shaikh
          </StyledParagraph>
          <StyledParagraph>
          I'm a passionate Developer with strong administrative and communication skills, a keen eye for detail, and the ability to write efficient code using the MERN Stack.
          </StyledParagraph>
          <StyledParagraph>
          My interest in web development began during my final year of Engineering, when I started building web pages using WordPress.
          </StyledParagraph>
          {/* <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph> */}
          <StyledParagraph>
          As I’ve grown as a Developer, my curiosity and drive to learn something new every day have kept me motivated.
          </StyledParagraph>
          <StyledParagraph>
          Over the past year, I have gained valuable experience as a MERN Full Stack Developer at Myulogic Solutions Pvt Ltd, where I’ve built several web applications and honed my teamwork, leadership, and communication skills. I am now excited to take on new challenges and continue my journey as a Full Stack Developer.
          </StyledParagraph>
          {/* <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-hisamuddin-shaikh"
            >
              Download Resume
            </ResumeLink>
          </Resume> */}
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
