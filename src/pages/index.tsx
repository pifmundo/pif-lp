import Header from "@/components/Header";
import Banner from "@/sections/banner";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Contract from "@/sections/contract";
import Savings from "@/sections/savings";
import Footer from "@/sections/footer";
import React from "react";

const darkTheme = {
  primary: "#000",
  secondary: "#fff",
  main: "#888",
  text: "#fff",
  alt: "#fddd00",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Midas </title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Banner />
        <Savings />
        <Contract />
        <Footer />
      </ThemeProvider>
    </>
  );
}
