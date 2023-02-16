import Logo from "@/components/Logo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Section>
      <Logo />
      <h2>midas ltda.©, 2023.</h2>
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
  height: 20rem;
  h1 {
  }
  h2 {
    font-size: 0.8rem;
  }
  h3 {
  }
`;
export default Footer;
