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

const Main = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-padding-top: 4rem;
  scroll-behavior: smooth;
  height: 100vh;
`;
export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState(darkTheme);

  const themeSwitch = () => {
    setSelectedTheme(selectedTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Main>
          <Head>
            <title>Midas</title>
          </Head>
          Ï
          <Header />
          <Banner />
          <Benefits />
          <WhyToInvest />
          <Savings />
          <Contract />
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  );
}
