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
`;
const ContentList = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-direction: column;
  &:nth-child(1) {
    align-items: end;
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

export const Proyects = () => {
  return (
    <StyledProyects id="proyects">
      <TitleSection title="Proyectos" />
      <ListProyect>
        <ContentList>
          <ImgProyect
            src="https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/solar-orbiter-toma-imagenes-del-sol-como-nunca-antes/9437612-1-esl-MX/Solar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg"
            alt=""
          />
        </ContentList>
        <ContentList>
          <StyledTitle>Croquis Virtual</StyledTitle>
          <TextDescribe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            lorem non feugiat egestas amet.
          </TextDescribe>
          <Tecnologi>HTML, CSS Y JAVASCRIPT</Tecnologi>
          <DivBtn>
            <Btnview>
              <AiFillGithub />
              Repositorio
            </Btnview>
            <Btnview>
              <TbWorld />
              Demo
            </Btnview>
          </DivBtn>
        </ContentList>
      </ListProyect>
    </StyledProyects>
  );
};
