import styled from "styled-components";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

const WhyToInvest = () => {
  const graphPath = "/graph.svg";
  const [isNonMobileScreen, setIsNonMobileScreen] = useState(false);

  useEffect(() => {
    setIsNonMobileScreen(window.innerWidth > 1100);
  }, []);

  return (
    <Wrapper isNonMobileScreen={isNonMobileScreen}>
      <h1>Crescimento</h1>
      <h2>Cresça o faturamento de sua empresa junto de quem sabe.</h2>
      <div>
        <Image fill src={graphPath} alt={""} />
        {<div />}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ isNonMobileScreen: boolean }>`
  padding: 2rem 0 2rem 0;
  scroll-snap-align: start;
  height: 50rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  h1 {
    color: ${(p) => p.theme.alt};
    transform: translateY(10rem);
  }
  h2 {
    color: ${(p) => p.theme.secondary};
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    position: relative;
    background-color: ${(p) => p.theme.primary};
    width: 100%;
    height: 40rem;
    margin: 2rem;
    div {
      background-color: ${(p) => p.theme.primary};
      animation: slideIn 5s ease-in-out infinite;
      @keyframes slideIn {
        0% {
          width: 100%;
        }
        100% {
          width: 0%;
        }
      }
    }
  }
`;

export default WhyToInvest;
