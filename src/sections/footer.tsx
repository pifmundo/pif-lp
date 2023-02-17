import DarkLogo from "@/components/DarkLogo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section>
      <DarkLogo />
      <h3>Midas - Soluções em Tecnologia
Rua do Ouro, 123 - São Paulo, SP
Telefone: 11 5555-5555 | E-mail: contato@midas.com.br</h3>
      <h2>© 2023 Midas. Todos os direitos reservados.</h2>
    </Section>
  );
};

const Section = styled.section`
scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.alt};
  height: 12rem;
  h1 {
  }
  h2 {
    font-weight: 400;
    font-size: 0.8rem;
  }
  h3 {
    text-decoration: none;
    margin: 1rem 0 1rem 0;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
export default Footer;
