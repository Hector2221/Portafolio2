import { styled } from "styled-components";
import fb from "../../assets/foto.png";
import { Button } from "../../components";

const StyledAbout = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-left: 10%;
  gap: 40px;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 115px;
`;

const Titleh1 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 35px;
`;

const Titleh2 = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(29, 255, 86, 0.5);
`;

const Parrafo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  width: 650px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContentImg = styled.div`
  width: 358px;
  height: 358px;
  border-radius: 50%;
  background: #030e19;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 331px;
  height: 331px;
  border-radius: 50%;
`;

export const About = () => {
  return (
    <StyledAbout>
      <ContentImg>
        <Img
          src="https://peru21.pe/resizer/yNu6EZADMOnCY-YGevBD84tCoSM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6RDFP4F6QNCN7FYPLOTLM2IQ5M.jpg"
          alt=""
        />
      </ContentImg>
      <StyledContent>
        <Titleh2>Desarrollador Web</Titleh2>
        <Titleh1>Hector Alejandro</Titleh1>
        <Parrafo>
          Soy estudiante de Ingeniería en Sistemas Computacionales en mis
          últimos años de carrera. Con actitud proactiva y autodidacta, siempre
          en busca de aprender nuevas habilidades y tecnologías, como en
          participar en nuevos proyectos. Como parte de mi formación he
          estudiado en Platzi, Oracle ONE y Touch of Tech, donde me he
          especializado en desarrollo web y tecnologías Front- end.
        </Parrafo>
        <Button title="Descargar CV" />
      </StyledContent>
    </StyledAbout>
  );
};
