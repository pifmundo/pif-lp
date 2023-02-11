import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/sections/banner";
import { createTheme } from "@mui/material/styles";
// import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111",
      dark: "#000",
      contrastText: "#fddd00",
      light: "#fff",
    },
    secondary: {
      main: "#bbb",
      dark: "#fff",
      contrastText: "#fddd00",
      light: "#000",
    },
  },
});

export default function Home() {
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
      <Head>
        <title>Midas</title>
      </Head>

      <Header />

      <Banner />
      {/* <Banner />
      <Banner />
 */}
      {/* <Benefits /> */}
    </>
  );
}
