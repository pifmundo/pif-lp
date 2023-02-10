import React, { useContext, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import styled from "styled-components";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const NavLinkWrapper = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 0;
  height: 100%;
`;
const HeaderContainer = styled.header`
  /* -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    opacity: 0.9; */
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25vw 0 25vw;
  background-color: #000;
  width: auto;
  height: 6vh;
`;
const MobileHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 0;
  width: 100vw;
  height: 7vh;
`;

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

const Header = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return isNonMobileScreen ? (
    <HeaderContainer>
      <Logo />
      <NavLinkWrapper>
        <NavLink color="gray" padding="1rem" to="/about">
          About
        </NavLink>
        <NavLink color="gray" padding="1rem" to="/contact">
          Contact
        </NavLink>
        <NavLink color="gray" padding="1rem" to="/login">
          Login
        </NavLink>
      </NavLinkWrapper>
      <DragHandleIcon style={{ color: "white", fontSize: "2rem" }} />
    </HeaderContainer>
  ) : (
    <MobileHeaderContainer>
      <Logo />
    </MobileHeaderContainer>
  );
};

export default Header;
