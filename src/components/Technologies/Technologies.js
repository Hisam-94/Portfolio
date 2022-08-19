import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";
import "../Technologies/tech.css"


const Technologies = () => {
  return (
    <TechnologiesContainer id="technologies">
      <TechnologiesHeader>My Technical Skills</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <div className="tech-icons">
              <div>
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
              </div>
              <div>{iconData.name}</div>
            </div>
          );
        })}
      </TechnologiesIcons>
      {/* <Techstack/> */}
    </TechnologiesContainer>
  );
};

export default Technologies;
