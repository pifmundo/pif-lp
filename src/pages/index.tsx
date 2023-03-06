import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/sections/banner";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Contract from "@/sections/contract";
import Savings from "@/sections/savings";
import Footer from "@/sections/footer";
import { useMediaQuery } from "@mui/material";
import Diagonal from "@/sections/diagonal";
import React from "react";
// import Benefits from "@/sections/benefits";
// import WhyToInvest from "@/sections/whyToInvest";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import * as theme from "../styles/Theme.styled";

const darkTheme = {
  primary: "#000",
  secondary: "#fff",
  main: "#888",
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
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Banner />
        {/* <Diagonal /> */}
        {/* <Benefits /> */}
        {/* <WhyToInvest /> */}
        <Savings />
        <Contract />
        <Footer />
      </ThemeProvider>
    </>
  );
}
