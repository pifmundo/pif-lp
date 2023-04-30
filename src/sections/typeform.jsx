import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import Router from "next/router";

const handleSubmit = async (answers) => {
  const [firstName, email, telephone, lastName, address] = answers;

  fetch("/api/hello", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      telephone: "+55" + telephone,
      address: address.toLowerCase(),
    }),
  });
};

const TypeForm = () => {
  const [queries, setQueries] = useState([
    "Qual o seu melhor email?",
    "Qual o seu Whatsapp para contato?(com ddd)",
    "Qual o nome da sua empresa?",
    "Qual a média de faturamento mensal?",
  ]);
  const [query, setQuery] = useState("Qual o seu nome?");

  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const [input, setInput] = useState(true);

  return (
    <Section done={input} id={"email"}>
      <h1>Se interessou? Conta pra a gente.</h1>
      <div className="wrapper">
        <div className="textWrapper">
          <h1>{query}</h1>
        </div>
        {input ? (
          <div className="inputWrapper">
            <input
              placeholder="Digite aqui sua resposta."
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={() => {
                if (answer.length <= 0) return;
                setQueries(queries.slice(1));
                setQuery(queries[0]);
                setAnswers([...answers, answer]);
                if (queries.length <= 0) {
                  answers[answers.length] = answer;
                  setQuery("Obrigado por responder!");
                  setInput(false);
                  handleSubmit(answers);
                }
                setAnswer("");
              }}
            >
              Enviar
            </button>
          </div>
        ) : (
          <>
            <div className="social">
              <button
                style={{
                  backgroundColor: "#faf7f6",
                }}
                onClick={() =>
                  Router.push("https://www.instagram.com/midasads/")
                }
              >
                <Image alt="instagram" src="/instagram.png" width={20} height={20} />
                Siga-nos
              </button>
              <button
                style={{
                  backgroundColor: "#fddd00",
                }}
                onClick={() => Router.push("https://wa.link/ifyvwo")}
              >
                <Image alt="whatsapp" src="/whatsapp.png" width={20} height={20} />
                Entre em contato
              </button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

const Section = styled.section`
  h1 {
    font-size: 2.5rem;
  }
  font-family: "Gotham", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: #faf7f6;
  .social {
    width: 100%;
    height: 50%;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-family: "Gotham", sans-serif;
      width: 100%;
      height: 50%;
      border-radius: 2rem;
      color: #000;
    }
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    z-index: 1;
  }
  .wrapper {
    h1 {
      color: ${(props) => (props.done ? "#000" : "#fddd00")};
    }
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 80vw;
    max-width: 500px;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    border-radius: 2rem;
    background-color: ${(props) => (props.done ? "#fddd00" : "#000")};
    border: 3px solid #000;
    box-shadow: 0 10px 10px #0008;
    padding: calc(10px + 1vw);
  }
  .inputWrapper {
    display: flex;
    justify-content: center;
    background-color: #000;
    border-radius: 3rem;
    width: 100%;
    height: 15%;
    border: 3px solid #000;
    overflow: hidden;
  }
  .textWrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: left;
    width: 100%;
  }
  button {
    border-radius: 0 3rem 3rem 0;
    font-weight: 700;
    border: none;
    width: 20%;
    background-color: #000;
    color: #faf7f6;
  }
  input {
    font-weight: 600;
    border-radius: 3rem;
    color: #000;
    background-color: #faf7f6;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    &:focus {
      outline: none;
    }
  }
`;

export default TypeForm;
