import React from "react";
import Logo from "@/components/Logo";
import styled from "styled-components";
import NavLink from "@/components/NavLink";
import { useMediaQuery } from "@/components/useMediaQuery";

const Header = () => {
    const isNonMobileScreen = useMediaQuery(1100);
  return (
    <HeaderContainer>
      <Logo />
      {isNonMobileScreen && (
        <NavLinkWrapper>
          <NavLink padding="1rem" to="#benefits">
            Vantagens
          </NavLink>
          <NavLink padding="1rem" to="#email">
            Entre em contato
          </NavLink>
        </NavLinkWrapper>
      )}
    </HeaderContainer>
  );
};

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15rem;
  width: 20%;
  height: 100%;
`;
const HeaderContainer = styled.div`
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.primary};
  width: 100%;
  padding: 1rem 0;
`;

export default Header;
