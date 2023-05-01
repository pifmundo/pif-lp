import styled from "styled-components";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Section>
      <div className="wrapper">
        <Image src="/duckbill.png" height={100} width={100} alt="duckbill" />
        <div className="textWrapper">
          <p>
            "A equipe da Midas foi essencial para a expansão do meu negócio.
            Eles são altamente profissionais, competentes e estão sempre em
            busca das melhores estratégias para atingir os objetivos da minha
            empresa. Além disso, o atendimento é excepcional, personalizado e atencioso."
          </p>
          <div className="author">
            <Image src="/polly.jpg" height={50} width={50} alt="polly" />
            <div className="textWrapper">
              <h1>Pollyanna Coimbra</h1>
              <h2>Proprietária duckbill Delmiro Gouveia</h2>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  font-family: "Gotham", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  background-color: #faf7f6;
  padding: 2rem 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vh;
    max-width: 900px;
    .textWrapper {
      display: flex;
      flex-direction: column;
      width: 90%;
      h2 {
        font-size: 0.8rem;
        font-weight: 500;
      }
      p {
        font-size: calc(1rem + 1vw);
        margin: 1rem 0;
      }
    }
    .author {
      display: flex;
      img {
        border-radius: 50%;
        border: 2px solid #000;
        margin-right: .5rem;
      }
    }
  }
`;

export default Testimonials;
