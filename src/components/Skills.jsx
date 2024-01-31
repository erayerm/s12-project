import styled from "styled-components";
import Skill from "./Skill";

const Container = styled.div`
  width: 100vw;
  
`;
const ContentContainer = styled.div`
  padding: 80px 0 130px 0;
  max-width: 1000px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
`;
const SkillsTitle = styled.h2`
  color: #0a0a14;
  font-family: Inter;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 0.48px;
  margin: 58px;
`;

const skills = [
  {
    name: "JAVASCRIPT",
    photo: "./js-logo.png",
  },
  {
    name: "REACT",
    photo: "./react-logo.png",
  },
  {
    name: "REDUX",
    photo: "./redux-logo.jpeg",
  },
  {
    name: "NODE",
    photo: "./node-logo.png",
  },
  {
    name: "VS CODE",
    photo: "./vs-logo.png",
  },
  {
    name: "FIGMA",
    photo: "./figma-logo.png",
  },
];
export default function Skills() {

  return (
    <Container>
      <ContentContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsContainer>
          {skills.map((item, index) => {
            return <Skill key={index} name={item.name} photo={item.photo} />;
          })}
        </SkillsContainer>
      </ContentContainer>
    </Container>
  );
}
