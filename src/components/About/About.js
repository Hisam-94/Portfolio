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
import myImage from "../../assets/Hisam.png";
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
            I'm a passionate Developer, with a strong administrative and communication skills, good attention to details and ability to write efficient code using MERN Stack.
          </StyledParagraph>
          <StyledParagraph>
            My Interest in web development started back when I was in my final year of Engineering, I was trying to build some web pages using wordpress.
          </StyledParagraph>
          {/* <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph> */}
          <StyledParagraph>
            As I grow and flourish as a Developer, one thing whick keeps me going is my inquisitiveness for discovering new things every day.
          </StyledParagraph>
          <StyledParagraph>
            Fast forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigiros training, here I am looking for an opportunity as a Full Stack Web Developer.
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
