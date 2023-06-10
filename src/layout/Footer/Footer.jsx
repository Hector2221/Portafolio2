import { styled } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
import foto from "../../assets/2323.jpeg";

const StyledFooter = styled.footer`
  width: 100%;
  height: 120px;
  padding: 20px;
  background: #030e19;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  @media (max-width: 770px) {
    gap: 20px;
    height: min-content;
    background: #030e19;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: none;
  &:nth-child(1) {
    gap: 2px;
    color: #fff;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const Enlace = styled.a`
  text-decoration: none;
  background: none;
`;

const ImgAnime = styled.img`
  width: 80px;
  border-radius: 50%;
`;

export const Footer = () => {
  const iconStyle = {
    color: "white",
    fontSize: "32px",
    background: "none",
  };

  const iconStyle2 = {
    color: "#08213B",
    fontSize: "21px",
    background: "none",
  };

  return (
    <>
      <StyledFooter>
        <StyledContent>
          <FaCopyright style={iconStyle2} />
          <span>2023</span>
          <span>Hector.Alejandro</span>
        </StyledContent>
        <StyledContent>
          <ImgAnime src={foto} alt="Logo" />
        </StyledContent>
        <StyledContent>
          <Enlace
            href="https://www.linkedin.com/in/hector-alejandro-rodriguez-hernandez/"
            target="_black"
          >
            <AiFillLinkedin style={iconStyle} />
          </Enlace>
          <Enlace href="https://github.com/Hector2221" target="_black">
            <AiFillGithub style={iconStyle} />
          </Enlace>
          <Enlace href="https://github.com/Hector2221" target="_black">
            <AiFillTwitterCircle style={iconStyle} />
          </Enlace>
        </StyledContent>
      </StyledFooter>
    </>
  );
};
