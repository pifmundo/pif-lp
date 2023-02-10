import Section from "@/components/Section";
import styled from "styled-components";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useEffect, useState } from "react";

const Text = styled.h1`
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin: 0;
`;

const BenefitsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 10rem;
`;

const Benefit = styled.div`
    color: #fff;
    padding: 20rem;
`;

const Benefits = () => {
  return (
    <Section height="60rem" color="#000" fd="column">
      <div
        style={{
            display: "flex",
            padding: "10rem"
        }}
      >
        <Text>Nosso negócio é vender o seu.</Text>
      </div>
      <BenefitsWrapper>
        <Benefit>
            <RocketLaunchIcon />
            <h1>Benefício 1</h1>
        </Benefit>
        <Benefit>
            <h1>Benefício 2</h1>
        </Benefit>
        <Benefit>
            <h1>Benefício 3</h1>
        </Benefit>
        <Benefit>
            <h1>Benefício 4</h1>
        </Benefit>
      </BenefitsWrapper>
    </Section>
  );
};

export default Benefits;
