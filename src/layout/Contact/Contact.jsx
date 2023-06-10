import { styled } from "styled-components";
import { Btnview, Inputs, TitleSection } from "../../components";
import Swal from "sweetalert2";

const StyledContact = styled.div`
  width: 95%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

const StyledForm = styled.form`
  width: 700px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const StyledText = styled.textarea`
  width: 100%;
  height: 80px;
  border: 2px solid #293548;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px;
  outline: none;
  color: #ffff;
  background: #111827;
`;

const FuncionForm = (event) => {
  event.preventDefault();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Mensaje Enviado",
  });
};

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <TitleSection title="Contacto" />
      <StyledForm onSubmit={FuncionForm}>
        <Inputs type="text" title="Asunto" />
        <Inputs type="email" title="Email" />
        <StyledText placeholder="Mensaje"></StyledText>
        <Btnview type="Submit">Enviar</Btnview>
      </StyledForm>
    </StyledContact>
  );
};
