import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.dark};
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size:40px
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;


export const TechnologyIcon = styled.img`
  height: 100px;
  width:100px;
  object-fit: contain;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24px;
  }
`;
