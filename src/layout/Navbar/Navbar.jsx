import { styled } from "styled-components";

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
    color: #ff0000; /* Cambia el color al hacer hover */
    text-decoration: underline; /* Agrega subrayado al hacer hover */
  }
`;

const Logo = styled.img`
  background: none;
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

export const Navbar = () => {
  return (
    <StyledHeader>
      <StyledContent>
        <Logo href="" />
        <StyledSpace>
          <StyledLink href="">Inicio</StyledLink>
          <StyledLink href="">Proyectos</StyledLink>
          <StyledLink href="">Habilidades</StyledLink>
          <StyledLink href="">Contacto</StyledLink>
        </StyledSpace>
      </StyledContent>
    </StyledHeader>
  );
};
