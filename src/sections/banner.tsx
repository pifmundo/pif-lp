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
        <Text displaySize={ScreenSizeBool} animationDelay={0}>
          Transforme.
        </Text>
        <Text displaySize={ScreenSizeBool} animationDelay={2.5}>
          Otimize.
        </Text>
        <Text displaySize={ScreenSizeBool} animationDelay={5}>
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
          displaySize={ScreenSizeBool} >
          Clique aqui
        </WhiteButton>
        <ColoredButton displaySize={ScreenSizeBool}>Clique aqui</ColoredButton>
      </ButtonWrapper>
    </Section>
  );
};
const Gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 100% 50%;
  }
`;
const TextWrapper = styled.div<{ displaySize: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-top: ${({ displaySize = true }) =>
    displaySize ? "1rem" : "2rem"}; */
  margin-top: "2rem";
`;
const Text = styled.h1<{ displaySize: boolean; animationDelay: number }>`
  width: 100%;
  font-size: ${({ displaySize = true }) => (displaySize ? "7.5rem" : "17vw")};
  text-align: center;
  font-weight: 700;
  height: ${({ displaySize = true }) => (displaySize ? "8.2rem" : "11vh")};
  animation: gradient 8s ease-in-out infinite;
  background: linear-gradient(
    48deg,
    #ea5308 20%,
    rgba(253, 221, 0, 1) 50%,
    rgba(228, 117, 5, 1) 90%
  );
  animation-delay: ${({ animationDelay = 0 }) => animationDelay}s;
  -webkit-text-fill-color: white;
  background-clip: text;
  -webkit-background-clip: text;

  @keyframes gradient {
    0%,
    50% {
        text-shadow: none;
        -webkit-text-fill-color: white;
    }
    80% {
        -webkit-text-fill-color: transparent;
        background-position: 0% 100%;
    }
    90% {
        text-shadow: 0 0 0.4rem #fddd00, 0 0 1.2rem #ea5308;
        //reduce the opacity of text-shadow
        -webkit-text-fill-color: rgba(255, 255, 255, 0.7);
    }
    100% {
        text-shadow: none;
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
  height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3rem")};

  width: ${({ displaySize = true }) => (displaySize ? "20rem" : "90%")};

  margin: ${({ displaySize = true }) =>
    displaySize ? "1rem 1rem 1rem 1rem" : "0 0 1rem 0"};

  color: #000;
  border: 0.12rem solid #fff;
  font-weight: 700;
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
  height: ${({ displaySize = true }) => (displaySize ? "4rem" : "3rem")};

  width: ${({ displaySize = true }) => (displaySize ? "20rem" : "90%")};

  margin: ${({ displaySize = true }) =>
    displaySize ? "1rem 1rem 1rem 1rem" : "0 0 1rem 0"};

  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: 0.12rem solid #fff;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    40deg,
    #ea7908 0%,
    rgba(253, 221, 0, 1) 40%,
    rgba(253, 221, 0, 1) 60%,
    rgba(228, 117, 5, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 80% 70%;
    animation: ${Gradient} 20s ease-in-out  alternate infinite;
`;
export default Banner;
