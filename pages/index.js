import Head from "next/head";
import { Montserrat, Manrope } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Banner from "@/components/Banner";
import WhatWeDo from "@/components/WhatWeDo";
import Project from "@/components/Project";
import Nav from "@/components/Nav";
import Phrase from "@/components/Phrase";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "-montserrat",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "-manrope",
});

const GlobalStyle = createGlobalStyle`
    html {
      font-display: swap;
      scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        p {
          font-family: var(-montserrat);
        }
        user-select: none;
        h1, h2, h3, h4, h5, h6 {
          margin: 0;padding: 0;
          
          font-family: var(-manrope);
        }
        /* h1 {
          font-family: 'PPAgrandir-GrandHeavy';
        } */
        p {
          margin: 0;
          padding: 0;
        }
        i {
          font-family: inherit;
        }
        background-color: #000;
        box-sizing: border-box;
        * {
          box-sizing: border-box;
        }
    }

    ul {
      padding-inline-start: 0;
      margin: 0;
    }

    button {
        color: #222;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #faf6f7;
    }

    ::-webkit-scrollbar-thumb {
      background: #000;
    }

`;

export default function Home() {
  return (
    <>
      <Head>
        <title>PIF</title>
        <meta name="description" content="Desenvolvimento pessoal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <StyledMain className={`${montserrat.className} ${manrope.className}`}>
        <Banner />
        <WhatWeDo />
        <Project />
        <Nav />
        <Phrase />
        <Footer />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  /* background-color: red; */
`;
