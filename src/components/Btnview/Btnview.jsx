import { styled } from "styled-components";

const StyledBoton = styled.button`
  cursor: pointer;
  background-color: #0b0c0d;
  padding: 10px;
  font-size: 17px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 150px;
  &:hover {
    background-color: #051729;
  }
`;

// eslint-disable-next-line react/prop-types
export const Btnview = ({ children }) => {
  return <StyledBoton>{children}</StyledBoton>;
};
