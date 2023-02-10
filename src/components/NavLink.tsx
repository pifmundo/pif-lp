import Link from "next/link";
import styled from "styled-components";

type NavLinkProps = {
  color: string;
  padding: string;
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ color = "black", padding, to, children }: NavLinkProps) => {
  const Wrapper = styled.div`
    padding: ${padding};
  `;
  return (
    <Wrapper>
      <Link
        href={to}
        style={{
          font: "inherit",
          fontWeight: 400,
          fontSize: "1.2rem",
          color: color,
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </Wrapper>
  );
};

export default NavLink;
