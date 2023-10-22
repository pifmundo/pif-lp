import { styled } from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <Section>
      <Logo>
        <Image height={50} width={50} src="/logo.svg" />
        <h1>PIF</h1>
      </Logo>
      <ul>
        <li>
          <a>INÍCIO</a>
        </li>
        <li>
          <a>SOBRE</a>
        </li>
        <li>
          <a>SERVIÇOS</a>
        </li>
        <li>
          <a>CASES</a>
        </li>
        <li>
          <a>CONTATO</a>
        </li>
      </ul>
      <p>#EDUCACAO</p>
    </Section>
  );
}

const Logo = styled.div`
  display: flex;
  h1 {
    color: #000000;
    font-weight: black;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 
  @media (max-width: 1200px) {
  } */
  @media (max-width: 1200px) {
    justify-content: center;
    ul,
    p,
    li {
      display: none;
    }
  }

  padding: 20px calc((100vw - 1200px) / 2);
  @media (max-width: 1200px) {
    padding: 20px 20px;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    font-weight: 600;
  }
  a {
    cursor: pointer;
  }
  color: #faf6f7;
`;
