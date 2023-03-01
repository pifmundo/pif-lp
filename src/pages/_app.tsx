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
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <Analytics id="G-2JQZQZJZ2G" /> */}
      <Analytics />
    </main>
  );
}
