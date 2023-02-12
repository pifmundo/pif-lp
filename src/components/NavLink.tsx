import Link from "next/link";
import styled from "styled-components";

type NavLinkProps = {
  padding: string;
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ padding, to, children }: NavLinkProps) => {
  return (
    <Wrapper padding={padding}>
      <StyledLink href={to}>
        {children}
      </StyledLink>
    </Wrapper>
  );
};
const StyledLink = styled(Link)`
    font: inherit;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${(p) => p.theme.main};
    text-decoration: none;
`;
const Wrapper = styled.div<{ padding: string }>`
  padding: ${(e) => e.padding};
`;

export default NavLink;
