import Button from "@/components/Button";
import Section from "@/components/Section";
import { css, fontSize } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Text = styled.h1`
  display: inline-block;
  font-size: 7.5rem;
  text-align: center;
  font-weight: 700;
  margin: 0;
  width: 100%;
  animation: gradient 8s ease-in-out infinite;
  background: linear-gradient(
    48deg,
    #ea5308 0%,
    rgba(253, 221, 0, 1) 50%,
    rgba(228, 117, 5, 1) 100%
  );
  animation-delay: var(delay);
  -webkit-text-fill-color: white;
  background-clip: text;
  -webkit-background-clip: text;

  @keyframes gradient {
    0%,
    50% {
      background-position: 0% 50%;
      -webkit-text-fill-color: white;
    }
    100% {
      -webkit-text-fill-color: transparent;
      background-position: 100% 50%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  width: 100%;
`;
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
    const animateButton = css`
    from {
        background-position: 0% 50%;
    }
    to {
        background-position: 100% 50%;
    }
`;

  const isNonMobileScreen = useMediaQuery("(min-width: 800px)");

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Section height="80vh" color="#010101" fd="column">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
          width: "100vw",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: isNonMobileScreen ? "7.5rem" : "5rem",
            animationDelay: "0s",
          }}
        >
          Transforme.
        </Text>
        <Text
          style={{
            fontSize: isNonMobileScreen ? "7.5rem" : "5rem",
            animationDelay: "2.5s",
          }}
        >
          Otimize.
        </Text>
        <Text
          style={{
            fontSize: isNonMobileScreen ? "7.5rem" : "5rem",
            animationDelay: "5s",
          }}
        >
          Cresça.
        </Text>
        <div
          style={{
            width: isNonMobileScreen ? "40%" : "50%",
            marginTop: "4rem",
            color: "gray",
            fontSize: isNonMobileScreen ? "2rem" : "1.3rem",
            textAlign: "center",
          }}
        >
          Transforme sua empresa com o toque de Midas. Nós somos uma assessoria
          de marketing altamente capacitada para maximizar suas vendas a apenas
          um clique.
        </div>
      </div>
      <ButtonWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: isNonMobileScreen ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10% 0 10%",
            width: "100%",
            marginTop: "0",
          }}
        >
          <Button
            style={{
              margin: isNonMobileScreen ? "0 10px 0 10px" : "0 0 10px 0",
              display: "block",
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "1.5rem",
              fontWeight: 500,

              borderRadius: "0.5rem",
              cursor: "pointer",
              height: "7vh",
              width: isNonMobileScreen ? "20rem" : "100%",
              border: "none",
              backgroundImage: isHovered
                ? "linear-gradient(315deg, #ea5308 0%, #f5d100 74%)"
                : "none",

            //animate button
              animation: `${animateButton} 2s ease-in-out infinite alternate`,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
              //make the background move
            //   backgroundPosition: "0 0",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Clique aqui
          </Button>
          <button
            style={{
              display: "inline-block",
              height: "7vh",
              borderRadius: "50%",
              fontSize: "1.25rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              background: "black",
              border: "0.15rem solid",
              width: isNonMobileScreen ? "20rem" : "100%",
              color: "#fff",
              borderImage:
                "linear-gradient(to right, rgba(255, 240, 98, 1) 0%, rgba(253, 221, 0, 1) 50%, rgba(253, 174, 0, 1) 100%) 1",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
              animation: "shine 2s ease-in-out infinite alternate",
              cursor: "pointer",
            }}
          >
            Clique aqui
          </button>

          {/* <Button
            style={{
              margin: isNonMobileScreen ? "0 10px 0 10px" : "0 0 10px 0",
              display: "block",
              cursor: "pointer",
              height: "7vh",
              width: isNonMobileScreen ? "20rem" : "100%",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
              borderWidth: "0.5rem",
              background: "linear-gradient(48deg, #ea5308 0%, rgba(253, 221, 0, 1) 50%, rgba(228, 117, 5, 1) 100%)",
              backgroundClip: "border-box",
                WebkitBackgroundClip: "text",
            }}
          >
            Clique aqui
          </Button> */}
        </div>
      </ButtonWrapper>
    </Section>
  );
};

export default Banner;
