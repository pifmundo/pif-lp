import { useEffect, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import styled from "styled-components";

const Benefits = () => {
  const isNonMobileScreen = true;
  return (
    <Wrapper>
      <h1>Benefícios</h1>
      <BenefitsContainer displaySize={isNonMobileScreen}>
        <BenefitCard displaySize={isNonMobileScreen}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "6rem" }}
          >
            rocket_launch
          </span>
          Lançamento de campanhas digitais
        </BenefitCard>
        <BenefitCard displaySize={isNonMobileScreen}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "6rem" }}
          >
            business_center
          </span>
          Planejamento estratégico e branding
        </BenefitCard>
        <BenefitCard displaySize={isNonMobileScreen}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "6rem" }}
          >
            cycle
          </span>
          Investimento que gera retorno que gera investimento. Um ciclo
          retroalimentado de crescimento.
        </BenefitCard>
        <BenefitCard displaySize={isNonMobileScreen}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "6.5rem" }}
          >
            monitoring
          </span>
          Impulsionar seu negócio e maximizar suas vendas com estratégias
          eficazes e inovadoras.
        </BenefitCard>
      </BenefitsContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  scroll-snap-align: start;
  height: 45rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const BenefitCard = styled.div<{ displaySize: Boolean }>`
  height: 15rem;
  // width: ${({ displaySize = true }) => (displaySize ? "10%" : "80%")};
  width: 10rem;
  background-color: ${(p) => p.theme.secondary};
  border-radius: 0.5rem;
  border: 0.1rem solid ${(p) => p.theme.main};
  margin: ${({ displaySize = true }) =>
    displaySize ? "0 1rem 0 1rem" : ".5rem 0 .5rem 0"};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem 1rem 4rem 1rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const BenefitsContainer = styled.div<{ displaySize: Boolean }>`
  height: 100%;
  width: 100%;
  padding: ${({ displaySize = true }) =>
    displaySize ? "1rem 0 1rem 0" : ".5rem 0 .5rem 0"};
  background-color: ${(p) => p.theme.secondary};
  display: flex;
  flex-direction: ${({ displaySize = true }) =>
    displaySize ? "row" : "column"};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
`;
export default Benefits;
