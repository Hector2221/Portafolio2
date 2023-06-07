import { styled } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";

const StyledFooter = styled.footer`
  width: 100%;
  height: 120px;
  padding: 20px;
  background: #030e19;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const StyledContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #030e19;
  &:nth-child(1) {
    gap: 2px;
    color: #fff;
  }
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
        <StyledContent></StyledContent>
        <StyledContent>
          <AiFillLinkedin style={iconStyle} />
          <AiFillGithub style={iconStyle} />
          <AiFillTwitterCircle style={iconStyle} />
        </StyledContent>
      </StyledFooter>
    </>
  );
};
