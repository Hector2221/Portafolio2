/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Btnview, TitleSection } from "../../components";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { StyledTitle, Tecnologi, TextDescribe } from "../../components/UI";

const StyledProyects = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const ListProyect = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
`;

const ContentList = styled.div`
  width: 480px;
  height: 250px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  &:nth-child(1) {
    width: 400px;
    order: ${(props) => props.valor};
  }
`;

const DivBtn = styled.div`
  display: flex;
  gap: 10px;
`;

const ImgProyect = styled.img`
  width: 400px;
  border-radius: 12px;
`;

// eslint-disable-next-line react/prop-types
export const Proyects = ({ ListProyects }) => {
  const valor = -1;

  return (
    <StyledProyects id="proyects">
      <TitleSection title="Proyectos" />
      {ListProyects.map(
        ({ title, message, tecnologi, linkGith, linkDemo, img }, index) => {
          const dynamicValor = index % 2 === 0 ? 1 : -1;
          const alignItems = dynamicValor === -1 ? "center" : "start";

          return (
            <ListProyect key={index}>
              <ContentList valor={dynamicValor * valor}>
                <ImgProyect src={img} alt={title} />
              </ContentList>
              <ContentList alignItems={alignItems}>
                <StyledTitle>{title}</StyledTitle>
                <TextDescribe>{message}</TextDescribe>
                <Tecnologi>{tecnologi}</Tecnologi>
                <DivBtn>
                  <a href={linkGith} target="_black">
                    <Btnview>
                      <AiFillGithub />
                      Repositorio
                    </Btnview>
                  </a>
                  <a href={linkDemo} target="_black">
                    <Btnview>
                      <TbWorld />
                      Demo
                    </Btnview>
                  </a>
                </DivBtn>
              </ContentList>
            </ListProyect>
          );
        }
      )}
    </StyledProyects>
  );
};
