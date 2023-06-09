import { styled } from "styled-components";

const StyleBtn = styled.button`
  position: relative;
  cursor: pointer;
  height: 50px;
  width: 150px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.5s;
  border: none;
  background: #111827;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(29, 255, 86, 0.281);
    border-radius: 5px;
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.7, 0.7);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    border: 1px solid rgba(29, 255, 86, 0.281);
    border-radius: 5px;
    transform: scale(1.5, 1.5);
    opacity: 0;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;
const StyleEnlace = styled.a`
  height: 50px;
  width: 150px;
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ title }) => {
  return (
    <StyleEnlace href="./downloads/CV-2023.pdf" download>
      <StyleBtn>{title}</StyleBtn>
    </StyleEnlace>
  );
};
