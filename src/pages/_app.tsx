import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <main className={roboto.className}>
        <Component {...pageProps} />
        {/* <Analytics id="G-2JQZQZJZ2G" /> */}
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
