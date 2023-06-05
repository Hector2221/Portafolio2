import { styled } from "styled-components";
import { TitleSection } from "../../components";

const StyledContact = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const Contact = () => {
  return (
    <StyledContact>
      <TitleSection title="Contacto" />
    </StyledContact>
  );
};
