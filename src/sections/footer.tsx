import DarkLogo from "@/components/DarkLogo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section>
      <DarkLogo />
      <h2>Telefone: (82)99954-2481 | E-mail: contato@midasltda.co</h2>
      <h3>© 2023 Midas. Todos os direitos reservados.</h3>
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
  padding: 2rem;
  image {
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 500;
    font-size: 0.7rem;
  }
  h3 {
    text-decoration: none;
    margin: 1rem 0 1rem 0;
    font-weight: 700;
    font-size: 0.7rem;
  }
`;
export default Footer;
