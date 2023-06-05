import { styled } from "styled-components";

const StyledCard = styled.div`
  width: 180px;
  height: 60px;
  border: 3px solid #293548;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const StyledTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  background: none;
  color: #ffffff;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

// eslint-disable-next-line react/prop-types
export const CardSkill = ({ ListSkill }) => {
  console.log(ListSkill);
  return (
    <>
      {ListSkill.map((item, index) => (
        <StyledCard key={index}>
          <StyledImg src={item.img} alt={item.title} />
          <StyledTitle>{item.title}</StyledTitle>
        </StyledCard>
      ))}
    </>
  );
};
