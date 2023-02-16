import React, { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import styled from "styled-components";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const Header = () => {
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
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return isNonMobileScreen ? (
    <HeaderContainer>
      <Logo />
      <NavLinkWrapper>
        <NavLink padding="1rem" to="/about">
          About
        </NavLink>
        <NavLink padding="1rem" to="/contact">
          Contact
        </NavLink>
        <NavLink padding="1rem" to="/login">
          Login
        </NavLink>
      </NavLinkWrapper>
      <DragHandle />
    </HeaderContainer>
  ) : (
    <MobileHeaderContainer>
      <Logo />
    </MobileHeaderContainer>
  );
};

const DragHandle = styled(DragHandleIcon)`
  color: #fff;
  font-size: 2rem;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15rem 0 15rem;
  width: 20%;
  height: 100%;
`;
const HeaderContainer = styled.header`
scroll-snap-align: start;
  opacity: 1;
  border: none;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: ${(p) => p.theme.primary};
  width: 100%;
  height: 4rem;
`;
const MobileHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.primary};
  padding: 0;
  margin: 0;
  width: 100%;
  height: 7rem;
`;

export default Header;
