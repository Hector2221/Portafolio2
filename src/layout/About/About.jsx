import { styled } from "styled-components";
// import fb from "../../assets/foto.png";
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
  @media (max-width: 1115px) {
    gap: 0px;
    padding-left: 0;
    margin-bottom: 50px;
    flex-direction: column;
  }
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
  width: 500px;
  @media (max-width: 770px) {
    width: 300px;
  }
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
  @media (max-width: 770px) {
    width: 280px;
    height: 280px;
  }
`;
const Img = styled.img`
  width: 331px;
  height: 331px;
  border-radius: 50%;
  @media (max-width: 770px) {
    width: 260px;
    height: 260px;
  }
`;

// eslint-disable-next-line react/prop-types
export const About = ({ ListAbout }) => {
  // eslint-disable-next-line react/prop-types
  const { title, name, img, text } = ListAbout;
  return (
    <StyledAbout>
      <ContentImg>
        <Img src={img} alt={name} />
      </ContentImg>
      <StyledContent>
        <Titleh2>{title}</Titleh2>
        <Titleh1>{name}</Titleh1>
        <Parrafo>{text}</Parrafo>
        <Button title="Descargar CV" />
      </StyledContent>
    </StyledAbout>
  );
};
