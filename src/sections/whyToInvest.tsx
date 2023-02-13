import styled from "styled-components";

const WhyToInvest = () => {
  return (
    <Wrapper>
      <h1>Why to invest?</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  h1{
    color: ${(p) => p.theme.secondary};
  }
`;

export default WhyToInvest;