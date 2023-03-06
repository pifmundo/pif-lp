import { Analytics } from "@vercel/analytics/react";
import GlobalStyle from "../styles/globals";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import Script from "next/script";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Midas </title>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="description" content="Midas é uma agência de marketing especializada em lançamentos e conteúdo digital."/>
      </Head>
      <main className={roboto.className}>
        <GlobalStyle />
        <Component {...pageProps} />
        {/* <Analytics id="G-2JQZQZJZ2G" /> */}
        <Analytics />
      </main>
    </>
  );
}
