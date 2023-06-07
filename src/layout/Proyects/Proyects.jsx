import { styled } from "styled-components";
import { TitleSection } from "../../components";

const StyledProyects = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const ListProyect = styled.div`
  width: 100%;
  background-color: aqua;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Proyects = () => {
  return (
    <StyledProyects>
      <TitleSection title="Proyectos" />
      <ListProyect></ListProyect>
    </StyledProyects>
  );
};
