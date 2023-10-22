import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  return (
    <StyledFooter>
      <div className="center">
        <Contact>
          <h2>Não perca</h2>
          <p>
            Se inscreva e garanta os mais novos lançamentos, projetos e novidades.
          </p>
          <form>
            <div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu endereço de email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button>Inscrever</button>
            </div>
          </form>
          <p className="terms">
            Ao inserir meu e-mail, eu expressamente concordo em receber notícias
            exclusivas e oportunidades de interação da PIF, e concordo com a{" "}
            <Link href="/privacy">
              <u>Política de Privacidade</u>
            </Link>{" "}
            e os{" "}
            <Link href="/terms">
              <u>Termos de Uso</u>
            </Link>{" "}
            da PIF.
          </p>
          <Social>
            <Image
              alt="instagram"
              width={30}
              height={30}
              src="/instagram.svg"
              onClick={() => Router.push("https://www.instagram.com/pifmundo/")}
            />
            <Image alt="facebook" width={40} height={40} src="/facebook.svg" />
            <Image
              alt="youtube"
              width={30}
              height={30}
              src="/youtube.svg"
              onClick={() => Router.push("")}
            />
            <Image
              alt="twitter"
              width={30}
              height={30}
              src="/twitter.svg"
              onClick={() => Router.push("")}
            />
            <Image
              alt="pinterest"
              width={30}
              height={30}
              src="/pinterest.svg"
              onClick={() => Router.push("https://br.pinterest.com/lifbrand/")}
            />
          </Social>
        </Contact>
        <Links>
          <Nav>
            <h3>O PROJETO</h3>
            <NavLink href="/">Sobre</NavLink>
            <NavLink href="/">Objetivo</NavLink>
            <NavLink href="/">Impacto</NavLink>
            <NavLink href="/">Escopo</NavLink>
          </Nav>
          <Nav>
            <h3>CONECTE-SE</h3>
            <NavLink href="/">Instagram</NavLink>
            <NavLink href="/">Facebook</NavLink>
            <NavLink href="/">Linkedin</NavLink>
            <NavLink href="/">Youtube</NavLink>
          </Nav>
          <Nav>
            <h3>SUPORTE</h3>
            <NavLink href="/">Contato</NavLink>
            <NavLink href="/">Faq</NavLink>
            <NavLink href="/">Termos</NavLink>
            <NavLink href="/">Privacidade</NavLink>
          </Nav>
        </Links>
      </div>
      <div className="lowFooter">
        <div className="lowFooterCenter">
          <h4>© 2023 PIF. Todos os direitos reservados.</h4>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h4>DE VOLTA AO TOPO</h4>
          </button>
        </div>
      </div>
    </StyledFooter>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: #aaa;
  padding: 0;
  margin: 0;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  gap: 20px;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  font-family: sans-serif;
  h3 {
    font-size: 0.9rem;
    font-weight: black;
  }
  nav {
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const StyledFooter = styled.div`
  padding: 0 5px;
  max-width: 100vw;
  margin-top: 50px;
  color: #faf6f7;
  background-color: #040404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  .center {
    padding: 0 10px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    gap: 20px;
    color: #faf6f7;
    a {
      color: #faf6f7;
    }
  }
  .lowFooter {
    div {
      align-items: center;
    }
    p {
      margin-left: 10px;
    }
    margin-top: 50px;
    color: #aaa;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    font-family: sans-serif;
    font-weight: bold;

    button {
      font-family: sans-serif;
      font-weight: bold;
      background: none;
      color: #aaa;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      div {
        width: 50%;
      }
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  form {
    display: flex;
    flex-direction: column;
    div {
      display: grid;
      grid-template-columns: 2fr 1fr;
      div {
        display: flex;
        flex-direction: column;
      }
      gap: 5px;
    }
    gap: 5px;
    input {
      color: #222;
      padding: 10px;
      border-radius: 0;
      //disable safari input
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
      border: none;
      height: 100%;
      &::placeholder {
        opacity: 1;
      }
      &:focus {
        outline: none;
      }
    }
  }
  button {
    font-family: sans-serif;
    font-weight: bold;
    padding: 10px;
    border: 3px solid #faf6f7;
    background-color: #040404;
    color: #faf6f7;
    cursor: pointer;
    &:hover {
      background-color: #faf6f7;
      color: #040404;
    }
  }
  .terms {
    font-size: 0.7rem;
    font-weight: 500;
    margin-top: 10px;
    color: #aaa;
  }
`;
