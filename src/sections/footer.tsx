import DarkLogo from "@/components/DarkLogo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section>
      <DarkLogo />
      <h2>Contato: contato@pifmundo.com</h2>
      <h3>© 2023 Poupar Investir Frutificar. Todos os direitos reservados.</h3>
    </Section>
  );
};

const Section = styled.section`
  font-family: "Gotham", sans-serif;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.alt};
  height: 12rem;
  gap: 2rem;
  padding: 2rem 0;
  image {
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 500;
    font-size: .7rem;
  }
  h3 {
    text-decoration: none;
    margin: 1rem 0 1rem 0;
    font-weight: 700;
    font-size: .7rem;
  }
`;
export default Footer;
