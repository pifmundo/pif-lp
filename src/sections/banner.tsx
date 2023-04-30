import Router from "next/router";
import styled from "styled-components";
import { useMediaQuery } from "@/components/useMediaQuery";

const Banner = () => {
  const isNonMobileScreen = useMediaQuery(1100);

  return (
    <Section>
      <TextWrapper>
        <Text displaySize={isNonMobileScreen} animationDelay={"0s"}>
          Transforme.
        </Text>
        <Text displaySize={isNonMobileScreen} animationDelay={"2s"}>
          Otimize.
        </Text>
        <Text displaySize={isNonMobileScreen} animationDelay={"4s"}>
          Cresça.
        </Text>
        <BrandDescription displaySize={isNonMobileScreen}>
          Transforme sua empresa com o toque de Midas.
        </BrandDescription>
      </TextWrapper>
      <ButtonWrapper displaySize={isNonMobileScreen}>
        <WhiteButton onClick={() => Router.push("/#benefits")}>
          Conheça a Midas
        </WhiteButton>
        <ColoredButton onClick={() => Router.push("/#email")}>
          Alavanque seu negócio
        </ColoredButton>
      </ButtonWrapper>
    </Section>
  );
};
const Section = styled.div`
  font-family: "Gotham", sans-serif;
  button {
    font-family: "Gotham", sans-serif;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  padding: 3rem 0 6rem 0;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.h1<{ displaySize: boolean; animationDelay: string }>`
  width: 100%;
  font-size: ${({ displaySize = true }) =>
    displaySize ? "calc(6vw + 6vh)" : "16vw"};
  text-align: center;
  font-weight: 700;
  /* max-height: 15vw; */
  background: linear-gradient(
    48deg,
    #ea5308 20%,
    rgba(253, 221, 0, 1) 50%,
    rgba(228, 117, 5, 1) 90%
  );
  will-change: background-position;
  background-clip: text;
  -webkit-background-clip: text;

  color: ${(p) => p.theme.text};

  //animate
  animation: textGradient 6s ${({ animationDelay = 0 }) => animationDelay}
    ease-in-out infinite;
  @keyframes textGradient {
    0% {
      background-position: 0% 50%;
      -webkit-text-fill-color: ${(p) => p.theme.text};
    }
    40% {
      background-position: 100% 50%;
      -webkit-text-fill-color: ${(p) => p.theme.text};
    }
    75% {
      background-position: 100% 50%;
      -webkit-text-fill-color: transparent;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const BrandDescription = styled.p<{ displaySize: boolean }>`
  color: ${(p) => p.theme.main};
  text-align: center;
  letter-spacing: 0.03rem;
  font-weight: 400;
  font-size: ${({ displaySize = true }) => (displaySize ? "1.4rem" : "5vw")};
  width: 95%;
  margin: 2rem 0;
`;

const ButtonWrapper = styled.div<{ displaySize: boolean }>`
  display: flex;
  flex-direction: ${({ displaySize = true }) =>
    displaySize ? "row" : "column"};
  justify-content: center;
  align-items: center;
  max-width: 95%;
  width: 55rem;
`;

const WhiteButton = styled.button`
  height: 3.4rem;
  padding: 0;
  width: 100%;

  margin: 1rem;

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
const ColoredButton = styled.button`
  padding: 0;
  height: 3.4rem;
  width: 100%;
  margin: 1rem;
  color: ${(p) => p.theme.text};
  font-weight: 600;
  font-size: 1.1rem;
  border: 0.15rem solid #fddd00;
  //make border clear

  box-shadow: 0 0 0.8rem #fddd00, 0 0 1.3rem #ea5308,
    0 0 1.5rem rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.primary};
  transition: all 0.5s ease-in-out;
  &:hover {
    border: none;
    color: ${(p) => p.theme.primary};
    //animate gradient
    background-size: 400% 400%;
    background-color: #fddd00;
    /* animation: hot 20s forwards; */
  }
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
  /* @keyframes hot {
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
  } */
`;
export default Banner;
