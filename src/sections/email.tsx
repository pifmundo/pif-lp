import styled from "styled-components";
import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import FlagIcon from "@/components/FlagIcon";

import countriesData from "@/data/countries.json";

interface Country {
  name: string;
  dial_code: string;
  code: string;
}

const countries: Country[] = countriesData as Country[];

const getCountry = (country: string): string => {
  const countryCode = countries.find((c) => c.dial_code === country);
  const code = countryCode?.code.toLowerCase() || "br";
  if (code === "ca") return "us";
  return code;
};

const telephoneMask = (input: string) => {
  // Remove todos os caracteres que não sejam números
  const phoneNumber = input.replace(/\D/g, "");

  // Formata o número de telefone com parênteses, espaços ou traços
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{2})(\d{4,5})(\d{4})/,
    "($1) $2-$3"
  );

  // Define o valor formatado no campo de entrada
  return formattedPhoneNumber;
};

const Email = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const apiKey = "9f0ef67cf75a4b39da4640fd2c840da5";
  const server = "us21";
  const audienceId = "74ac3b31a6";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        telephone: country + telephone,
      }),
    });
  };

  const [country, setCountry] = useState("+55");

  return (
    <>
      <Section>
        <div className="wrapper">
          <h1>Escale seu negócio!</h1>
          <form>
            <p>
              Preencha o formulário e receba novidades sobre a{" "}
              <span className="accent">MIDAS</span>.
            </p>
            <div className="name">
              <input
                type="name"
                placeholder="Nome"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="name"
                placeholder="Sobrenome"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="name">
              <input
                type="email"
                placeholder="Deixe seu melhor e-mail aqui."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="telephone">
              <div className="countryCode">
                <input
                  type="tel"
                  id="phone"
                  placeholder="+55"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    if (!country.includes("+")) {
                      setCountry("+" + country);
                    }
                  }}
                  maxLength={4}
                />
                <FlagIcon countryCode={getCountry(country)} />
              </div>
              <input
                type="tel"
                id="phone2"
                placeholder="Deixe seu whatsapp aqui. (com DDD)"
                value={telephoneMask(telephone)}
                onChange={(e) => {
                  setTelephone(e.target.value);
                  if (!country.includes("+")) {
                    setCountry("+" + country);
                  }
                }}
                maxLength={22}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Quero receber novidades
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  h1 {
    text-align: center;
    margin: 1rem 0;
    width: 80vw;
    max-width: 500px;
    font-weight: 600;
  }
  p {
    font-weight: 700;
    margin-top: 15px;
  }
  span {
    color: #fddd00;
    font-weight: 700;
  }
  background: linear-gradient(40deg, #1d1d1e 0%, #1a1a1d 100%);
  color: #faf7f6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 740px;
  margin: 2rem auto;
  border-radius: 2rem;
  padding: 2rem 0;
  font-family: "Gotham", sans-serif;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: #000;
    height: auto;
    width: 80vw;
    max-width: 500px;
    border-radius: 2rem;
    padding: 1rem;
    /* box-shadow: 0 0 50px #000; */
  }
  .name {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    input {
      width: 100%;
    }
  }
  input {
    width: 100%;
    border-radius: 1rem;
    height: 2.5rem;
    border: none;
    background: linear-gradient(40deg, #1d1d1e 0%, #1a1a1d 100%);
    color: #faf7f6;
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    text-decoration-color: #fddd00;
    :focus {
      outline: none;
    }
    :invalid {
      box-shadow: 0 0 5px #ff1d00e1;
      text-decoration: none;
    }
    padding-left: 1rem;
  }
  .telephone {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    .fi {
      width: 35px;
      position: absolute;
      left: 45px;
    }
    border-radius: 1rem;
    overflow: hidden;
    input {
      border-radius: 0;
      width: 150%;
    }
    .countryCode {
      position: relative;
      display: flex;
      align-items: center;
      input {
        width: 100%;
      }
    }
  }
  button {
    background-color: #fddd00;
    height: 55px;
    width: 100%;
    border-radius: 1rem;
    border: none;
    color: #000;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #faf7f6;
      border: 0.15rem solid #fddd00;
    }
  }
`;

export default Email;
