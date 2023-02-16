import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/sections/banner";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Benefits from "@/sections/benefits";
import WhyToInvest from "@/sections/whyToInvest";
import Contract from "@/sections/contract";
import Savings from "@/sections/savings";
import Footer from "@/sections/footer";
import { useMediaQuery } from "@mui/material";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import * as theme from "../styles/Theme.styled";

const darkTheme = {
  primary: "#000",
  secondary: "#fff",
  main: "#555",
  text: "#fff",
  alt: "#fddd00",
};

const lightTheme = {
  primary: "#fff",
  secondary: "#000",
  main: "#666",
  text: "#000",
  alt: "#fddd00",
};

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState(darkTheme);
  const isNonMobileScreen = useMediaQuery("(min-width: 768px");

  const themeSwitch = () => {
    setSelectedTheme(selectedTheme === lightTheme ? darkTheme : lightTheme);
  };
  
  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Main isNonMobileScreen={isNonMobileScreen}>
          <Head>
            <title>Midas</title>
          </Head>
          <Header />
          <Banner />
          {/* <Benefits /> */}
          <WhyToInvest />
          <Savings />
          <Contract />
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  );
}
const Main = styled.div<{isNonMobileScreen: boolean}>`
  overflow-x: hidden;
  scroll-padding-top: ${(isNonMobileScreen) => isNonMobileScreen ? "3rem" : "7rem"};
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100vh;
`;
