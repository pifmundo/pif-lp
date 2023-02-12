import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/sections/banner";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Benefits from "@/sections/benefits";
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
    // const theme = useTheme();

    const themeSwitch = () => {
        setSelectedTheme(selectedTheme === lightTheme ? darkTheme : lightTheme);
    }
  //   const [hasScrolled, setHasScrolled] = useState(false);

  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     setHasScrolled(offset > 80);
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <>
      <ThemeProvider theme={selectedTheme} >
        <Head>
          <title>Midas</title>
        </Head>

        <Header />

        <Banner
            themeSwitch={() => {
                console.log(selectedTheme);
                themeSwitch();
            }}
        />
        <Benefits />
      </ThemeProvider>
    </>
  );
}