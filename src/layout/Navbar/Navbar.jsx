import { styled } from "styled-components";
import { RiCodeSSlashLine } from "react-icons/ri";

const StyledHeader = styled.nav`
  width: 100%;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(5px);
  padding: 24px 0px;
`;

const StyledLink = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  background: none;
  &:hover {
    color: rgba(29, 255, 86, 0.5);
  }
`;

const StyledContent = styled.div`
  width: 95%;
  margin: 0 auto;
  background: none;
  display: flex;
  justify-content: space-between;
`;

const StyledSpace = styled.div`
  display: flex;
  gap: 26px;
  background: none;
`;
const StyledSpace2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
`;

export const Navbar = () => {
  const iconStyle = {
    color: "white",
    fontSize: "28px",
    background: "none",
  };
  const iconStyle2 = {
    color: "green",
    fontSize: "35px",
    background: "none",
  };

  return (
    <StyledHeader id="Home">
      <StyledContent>
        <StyledSpace2>
          <RiCodeSSlashLine style={iconStyle2} />
          <span style={iconStyle}>Hector</span>
        </StyledSpace2>
        <StyledSpace>
          <StyledLink href="#Home">Inicio</StyledLink>
          <StyledLink href="#proyects">Proyectos</StyledLink>
          <StyledLink href="#skill">Habilidades</StyledLink>
          <StyledLink href="#contact">Contacto</StyledLink>
        </StyledSpace>
      </StyledContent>
    </StyledHeader>
  );
};
