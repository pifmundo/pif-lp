import { Analytics } from "@vercel/analytics/react";
import GlobalStyle from "../styles/globals";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import Script from "next/script";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      {/* <Script
        src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Script
        src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      /> */}

      <GlobalStyle />
      <Component {...pageProps} />
      {/* <Analytics id="G-2JQZQZJZ2G" /> */}
      <Analytics />
    </main>
  );
}
