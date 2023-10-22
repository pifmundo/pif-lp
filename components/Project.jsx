import { styled } from "styled-components";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

export default function Project() {
  return (
    <Section>
      <Container>
        <h2>O projeto</h2>
        <RevealWrapper>
          <Image src="/image4.jpg" width={800} height={450} />
        </RevealWrapper>
        <h3>Como o nosso projeto impacta o ensino básico</h3>
        <p>
          O método recompensa o aluno a cada tarefa concluída, aumentando a
          conexão e fixação do aprendizado
        </p>
      </Container>
    </Section>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 20px;
  /* width: fit-content; */
  h2 {
    font-size: 3rem;
    /* color: red; */
    z-index: 2;
  }
  .asterisk {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 10%;
    right: 10%;
    z-index: 0;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    max-width: 100%;
    aspect-ratio: 16/9;
    height: auto;
  }
`;

const Section = styled.section`
  position: relative;
  background-color: #faf6f7;
  padding: 30px;
  @media (min-width: 1200px) {
    padding: 60px calc(50% - 600px);
  }
`;
