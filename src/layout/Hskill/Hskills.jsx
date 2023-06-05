import { styled } from "styled-components";
import { CardSkill, TitleSection } from "../../components";

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 800px;
`;

const Skillsntent = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line react/prop-types
export const Hskills = ({ ListSkill }) => {
  return (
    <Skillsntent>
      <TitleSection title="Habilidades" />
      <StyledSkills>
        <CardSkill ListSkill={ListSkill} />
      </StyledSkills>
    </Skillsntent>
  );
};
