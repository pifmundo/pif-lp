import { styled } from "styled-components";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

export default function WhatWeDo() {
  return (
    <Section>
      <FlexBox>
        <Box>
          <RevealWrapper delay={500}>
            <Image alt="Duas crianças usando um tablet" src="/image1.jpg" width={200} height={200} />
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <Image alt="Criança usando um tablet para estudar" src="/image2.jpg" width={200} height={200} />
          </RevealWrapper>
        </Box>
        <Box>
          <RevealWrapper>
            <Image alt="Criança feliz se divertindo com um tablet" src="/image3.jpg" width={200} height={410} />
          </RevealWrapper>
        </Box>
      </FlexBox>
      <Container>
        <img alt="asterisco" className="asterisk" src="/asterisk.svg" />
        <p>O que fazemos</p>
        <RevealWrapper>
          <h2>É nossa missão trazer tecnologia ao modo com que se ensina</h2>
        </RevealWrapper>
        <Wrapper>
          <RevealWrapper delay={200}>
            <Element>
              <h3>{">2000"}</h3>
              <p>alunos impactados</p>
            </Element>
          </RevealWrapper>
          <RevealWrapper delay={400}>
            <Element>
              <h3>{">500"}</h3>
              <p>escolas beneficiadas</p>
            </Element>
          </RevealWrapper>
          <RevealWrapper delay={600}>
            <Element>
              <h3>{">100"}</h3>
              <p>vidas transformados</p>
            </Element>
          </RevealWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  div {
    box-sizing: border-box;
  }
  gap: 10px;
  img {
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px #0002;
    object-fit: cover;
  }
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: fit-content;

  img {
    max-width: 100%;
  }
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* width: fit-content; */
  h2 {
    font-size: 3rem;
    @media (max-width: 768px)
    {
      font-size: 2rem;
    }
    /* color: red; */
    z-index: 2;
  }
  .asterisk {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 10%;
    right: 10%;
    z-index: 0;
    @media (max-width: 1200px) {
      width: 150px;
      height: 150px;
      top: 65%;
      right: 10%;

    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #faf6f7;
  padding: 30px;
  @media (min-width: 1200px) {
    padding: 60px calc(50% - 600px);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
`;
