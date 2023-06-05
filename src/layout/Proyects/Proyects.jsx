import { styled } from "styled-components";
import { TitleSection } from "../../components";

const StyledProyects = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const Proyects = () => {
  return (
    <StyledProyects>
      <TitleSection title="Proyectos" />
    </StyledProyects>
  );
};
