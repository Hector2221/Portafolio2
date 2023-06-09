import { styled } from "styled-components";

const InputText = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid #293548;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px;
  outline: none;
  color: #ffff;
  background: #111827;
`;

// eslint-disable-next-line react/prop-types
export const Inputs = ({ title, type }) => {
  return <InputText type={type} placeholder={title} required />;
};
