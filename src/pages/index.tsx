import Header from "@/components/Header";
import Banner from "@/sections/banner";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Email from "@/sections/email";
import Savings from "@/sections/savings";
import Footer from "@/sections/footer";
import React from "react";

const darkTheme = {
  primary: "#000",
  secondary: "#faf7f6",
  main: "#888",
  text: "#faf7f6",
  alt: "#fddd00",
};

export default function Home() {
  console.log("api key: ", process.env.API_KEY);
  console.log("server prefix: ", process.env.SERVER_PREFIX);
  return (
    <>
      <Head>
        <title>Midas </title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Banner />
        <Savings />
        {/* <Contract /> */}
        <Email />
        <Footer />
      </ThemeProvider>
    </>
  );
}
