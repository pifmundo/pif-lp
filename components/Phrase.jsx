import { styled } from "styled-components";

export default function Phrase() {
  return (
    <Section>
      <h2>
        {'"'}A educação é o nosso passaporte para o futuro, pois o amanhã
        pertence às pessoas que se preparam hoje.{'"'}
      </h2>
      <h3>-Malcon X</h3>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #faf6f7;
  padding: 30px;
  @media (min-width: 1200px) {
    padding: 60px calc(50% - 600px);
  }
  h2 {
    max-width: 700px;
  }
`;
