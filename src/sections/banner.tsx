import Button from "@/components/Button";
import Section from "@/components/Section";
import { css } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

const Banner = () => {
  const ScreenSizeBool = useMediaQuery("(min-width: 1000px)");

  return (
    <Section height="60rem" width="100%" color="#010101" fd="column">
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
        <WhiteButton displaySize={ScreenSizeBool}>Conheça a Midas</WhiteButton>
          <ColoredButton displaySize={ScreenSizeBool}>
            Alavanque seu negócio
          </ColoredButton>
      </ButtonWrapper>
    </Section>
  );
};
const TextWrapper = styled.div<{ displaySize: boolean }>`
  width: 100%;
  height: ${({ displaySize = true }) => (displaySize ? "50%" : "85vw")};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* margin-top: ${({ displaySize = true }) =>
    displaySize ? "1rem" : "2rem"}; */
  margin-top: "2rem";
`;
const Text = styled.h1<{ displaySize: boolean; animationDelay: string }>`
  width: 100%;
  font-size: ${({ displaySize = true }) => (displaySize ? "7.5rem" : "17vw")};
  text-align: center;
  font-weight: 700;
  height: ${({ displaySize = true }) => (displaySize ? "8.2rem" : "11vh")};
  background: linear-gradient(
    48deg,
    #ea5308 20%,
    rgba(253, 221, 0, 1) 50%,
    rgba(228, 117, 5, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;

  //animate

  animation: textGradient 6s ${({ animationDelay = 0 }) => animationDelay}
    ease-in-out infinite;
  -webkit-text-fill-color: white;
  @keyframes textGradient {
    0% {
      -webkit-text-fill-color: white;
    }
    50% {
      -webkit-text-fill-color: white;
    }
    60% {
      -webkit-text-fill-color: transparent;
      background-position: 0% 100%;
    }
    90% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;
const BrandDescription = styled.p<{ displaySize: boolean }>`
  color: #555;
  text-align: center;
  letter-spacing: 0.03rem;
  font-weight: 400;
  font-size: ${({ displaySize = true }) => (displaySize ? "1.4rem" : "5vw")};
  width: ${({ displaySize = true }) => (displaySize ? "50%" : "90%")};
  margin-top: ${({ displaySize = true }) => (displaySize ? "2rem" : "2rem")};
`;

const ButtonWrapper = styled.div<{ displaySize: boolean }>`
  margin-top: 2rem;
  display: flex;
  flex-direction: ${({ displaySize = true }) =>
    displaySize ? "row" : "column"};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  width: 100%;
`;

const WhiteButton = styled.button<{ displaySize: boolean }>`
  height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3.4rem")};

  width: ${({ displaySize = true }) => (displaySize ? "20rem" : "90%")};

  margin: ${({ displaySize = true }) =>
    displaySize ? "1rem 1rem 1rem 1rem" : "0 0 1rem 0"};

  color: #000;
  border: 0.12rem solid #fff;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #fff;
  border-radius: 0.5rem;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #fff;
  }
`;
const ColoredButton = styled.button<{ displaySize: boolean }>`
height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3.4rem")};

width: ${({ displaySize = true }) => (displaySize ? "20rem" : "90%")};

margin: ${({ displaySize = true }) =>
  displaySize ? "1rem 1rem 1rem 1rem" : "0 0 1rem 0"};
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  border: 1rem solid rgba(255, 0, 0, 0);
  //make border clear

  box-shadow: 0 0 0.8rem #fddd00, 0 0 1.3rem #ea5308, 0 0 1.5rem rgba(0, 0, 0, 0.5);
  //make a big bright shadow like its burning
  /* box-shadow: 0 0 0.4rem #fddd00, 0 0 1.2rem #ea5308, 0 0 20rem #511e04; */
  border-radius: 0.5rem;
  background-image: none;
  background-color: #000;
  &:hover {
    border: none;
    color: #000;
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
    0% {
        background-color: #fddd00;
    }
    90% {
    }
    100% {
        //make a fire effect with multiple shadows at least 10
        background-color: #fff;
        background-image: none;
        box-shadow: 0 0 1rem yellow, 0 0 1.5rem orange, 0 0 2rem red, 0 0 2.5rem red, 0 0 2rem orange, 0 0 3rem yellow;
    }
    }
`;
export default Banner;
