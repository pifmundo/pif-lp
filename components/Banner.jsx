import { styled } from "styled-components";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";
import Header from "@/components/Header";

export default function Banner() {
  return (
    <Section>
      <Header />
      <Container>
        <TextWrapper>
          <RevealWrapper>
            <h1>
              <b>Educação</b> na
              <br />
              era
              <b> digital</b>
            </h1>
          </RevealWrapper>
          <RevealWrapper>
            <p>Uma nova maneira de ensinar e preparar a nova geração</p>
          </RevealWrapper>
          <RevealWrapper>
            <button>Saiba mais</button>
          </RevealWrapper>
        </TextWrapper>
        <RevealWrapper>
          <Image
          alt="Criança utilizando um aparelho de realidade virtual"
            src="/banner.webp"
            width={600}
            height={600}
            priority
            quality={100}
          />
        </RevealWrapper>
      </Container>
    </Section>
  );
}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  color: #faf6f7;
  h1 {
    font-size: 3.3rem;
  }
  p {
    font-size: 2rem;
  }
  b,
  i {
    color: #ffde59;
  }
  button {
    box-sizing: border-box;
    width: 100%;
    background-color: #ffde59;
    border: none;
    padding: 15px;
    border-radius: 50px;
    font-size: 2rem;
    font-family: var(-montserrat);
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1rem;
    }
    b,
    i {
      color: #ffde59;
    }
    button {
      width: 100%;
      background-color: #ffde59;
      border: none;
      padding: 15px;
      border-radius: 50px;
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 calc((100vw - 1200px) / 2);
  @media (max-width: 1200px) {
    padding: 0 20px;
    flex-direction: column;
  }
  img {
    max-width: 90%;
    aspect-ratio: 1;
    height: auto;
  }
`;

const Section = styled.div`
  overflow: hidden;
  width: 100vw;
  background: radial-gradient(circle at 2.01% 45%, #191003, transparent 27%),
    radial-gradient(circle at 97.99% 15%, #292610, transparent 44%),
    radial-gradient(circle at 48.33% 4.86%, #ffcd59, transparent 94%),
    radial-gradient(circle at 50% 50%, #000000, #000000 100%);
`;
