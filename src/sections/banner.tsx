import Router from "next/router";
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const Banner = () => {
  const ScreenSizeBool = useMediaQuery("(min-width: 1100px)");
  return (
    <Section displaySize={ScreenSizeBool}>
      <TextWrapper displaySize={ScreenSizeBool}>
        <Text displaySize={ScreenSizeBool} animationDelay={"0s"}>
          Transforme.
        </Text>
        <Text displaySize={ScreenSizeBool} animationDelay={"2s"}>
          Otimize.
        </Text>
        <Text displaySize={ScreenSizeBool} animationDelay={"4s"}>
          Cresça.
        </Text>
        <BrandDescription displaySize={ScreenSizeBool}>
          Transforme sua empresa com o toque de Midas.
          {ScreenSizeBool &&
            "  Somos a assessoria de marketing capacitada para maximizar suas vendas a apenas um clique."}
        </BrandDescription>
      </TextWrapper>
      <ButtonWrapper displaySize={ScreenSizeBool}>
        <WhiteButton
          displaySize={ScreenSizeBool}
          onClick={(_) => Router.push("/#benefits")}
        >
          Conheça a Midas
        </WhiteButton>
        <ColoredButton
          displaySize={ScreenSizeBool}
          onClick={(_) => Router.push("https://wa.link/ifyvwo")}
        >
          Alavanque seu negócio
        </ColoredButton>
      </ButtonWrapper>
      {/* {ScreenSizeBool || (
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      )} */}
    </Section>
  );
};
const Section = styled.section<{ displaySize: boolean }>`
  height: 80vh;
  min-height: 60rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  span {
    /* color: ${(p) => p.theme.alt}; */
    background: linear-gradient(
      48deg,
      #ea5308 20%,
      rgba(253, 221, 0, 1) 50%,
      rgba(228, 117, 5, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
  }
`;
const TextWrapper = styled.div<{ displaySize: boolean }>`
  min-height: ${({ displaySize = true }) => (displaySize ? "32.5rem" : "9vw")};
  height: ${({ displaySize = true }) => (displaySize ? "60vh" : "85vw")};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const Text = styled.h1<{ displaySize: boolean; animationDelay: string }>`
  min-height: ${({ displaySize = true }) => (displaySize ? "12vh" : "20vw")};
  width: 100%;
  font-size: ${({ displaySize = true }) => (displaySize ? "14.5vh" : "17vw")};
  text-align: center;
  font-weight: 700;
  height: ${({ displaySize = true }) => (displaySize ? "18.4vh" : "5rem")};
  background: linear-gradient(
    48deg,
    #ea5308 20%,
    rgba(253, 221, 0, 1) 50%,
    rgba(228, 117, 5, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;

  //animate
  transition: transform 0.01s linear;
  animation: textGradient 6s ${({ animationDelay = 0 }) => animationDelay}
    ease-in-out infinite;
  -webkit-text-fill-color: ${(p) => p.theme.text};
  @keyframes textGradient {
    0% {
      -webkit-text-fill-color: ${(p) => p.theme.text};
    }
    30% {
    }
    40% {
      -webkit-text-fill-color: ${(p) => p.theme.text};
      //make it bigger
      background-position: 0% 100%;
      transform: scale(1);
    }
    70% {
    }
    75% {
      transform: scale(1.005);
      -webkit-text-fill-color: transparent;
      background-position: 100% 100%;
    }
    100% {
      transform: scale(1);
      background-position: 0% 0%;
    }
  }
`;
const BrandDescription = styled.p<{ displaySize: boolean }>`
  color: ${(p) => p.theme.main};
  text-align: center;
  letter-spacing: 0.03rem;
  font-weight: 400;
  min-height: ${({ displaySize = true }) => (displaySize ? "5rem" : "15vw")};
  font-size: ${({ displaySize = true }) => (displaySize ? "1.4rem" : "5vw")};
  width: ${({ displaySize = true }) => (displaySize ? "50%" : "90%")};
  margin-top: ${({ displaySize = true }) => (displaySize ? "2rem" : "0rem")};
`;

const ButtonWrapper = styled.div<{ displaySize: boolean }>`
  display: flex;
  flex-direction: ${({ displaySize = false }) =>
    displaySize ? "row" : "column"};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  width: ${({ displaySize = true }) => (displaySize ? "55rem" : "95%")};
`;

const WhiteButton = styled.button<{ displaySize: boolean }>`
  height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3.4rem")};

  width: 100%;

  margin: ${({ displaySize = true }) =>
    displaySize ? "1rem 1rem 0 1rem" : "0 0 0 0"};

  color: ${(p) => p.theme.primary};
  border: 0.12rem solid ${(p) => p.theme.text};
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${(p) => p.theme.text};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.text};
  }
`;
const ColoredButton = styled.button<{ displaySize: boolean }>`
  height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3.4rem")};

  width: 100%;

  margin: ${({ displaySize = true }) =>
    displaySize ? "1rem 1rem 0 1rem" : "1rem 0 0 0"};
  color: ${(p) => p.theme.text};
  font-weight: 600;
  font-size: 1.1rem;
  border: 0.15rem solid #fddd00;
  //make border clear

  box-shadow: 0 0 0.8rem #fddd00, 0 0 1.3rem #ea5308,
    0 0 1.5rem rgba(0, 0, 0, 0.5);
  //make a big bright shadow like its burning
  /* box-shadow: 0 0 0.4rem #fddd00, 0 0 1.2rem #ea5308, 0 0 20rem #511e04; */
  border-radius: 0.5rem;
  background-image: none;
  background-color: ${(p) => p.theme.primary};
  transition: all 0.5s ease-in-out;
  &:hover {
    border: none;
    color: ${(p) => p.theme.primary};
    //animate gradient
    background-size: 400% 400%;
    background-color: #fddd00;

    background-image: conic-gradient(
      rgba(253, 221, 0, 0.5),
      rgba(253, 221, 0, 0.5),
      rgba(228, 117, 5, 0.5),
      rgba(228, 117, 5, 0.5),
      rgba(253, 221, 0, 0.5),
      rgba(228, 117, 5, 0.5),
      rgba(253, 221, 0, 0.5)
    );
    animation: gradient 40s ease-in-out alternate infinite;
    animation: hot 20s forwards;
  }
  @keyframes gradient {
    0% {
      background-position: 50% 0%;
    }
    20% {
      background-position: 0% 50%;
    }
    40% {
      background-position: 100% 100%;
    }
    80% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  @keyframes hot {
    20% {
      background-color: #fddd00;
    }
    50% {
      color: ${(p) => p.theme.primary};
    }
    100% {
      //make a fire effect with multiple shadows at least 10
      color: #000;
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 1.5rem #fddd00, 0 0 1.2rem #fddd00, 0 0 2rem #f00,
        0 0 2.5rem red, 0 0 2rem orange, 0 1rem 5rem yellow;
    }
  }
`;
export default Banner;
