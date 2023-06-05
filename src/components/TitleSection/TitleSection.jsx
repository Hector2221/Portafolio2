import { styled } from "styled-components";

const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
  background: none;
  margin-bottom: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

const StyledBarra = styled.div`
  width: 124px;
  height: 10px;
  background: #2c66c3;
  box-shadow: 0px 0px 14px rgba(44, 102, 195, 0.5);
  border-radius: 50px;
`;

// eslint-disable-next-line react/prop-types
export const TitleSection = ({ title }) => {
  return (
    <Content>
      <Title>{title}</Title>
      <StyledBarra />
    </Content>
  );
};
