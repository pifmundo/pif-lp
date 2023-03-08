import { useMediaQuery } from "@mui/material";
import Router from "next/router";
import styled from "styled-components";

const contract = () => {
  const displaySize = useMediaQuery("(max-width: 1100px)");
  return (
    <Section id="contract" displaySize={displaySize}>
      <Wrapper displaySize={displaySize}>
        <Card>
          <List>
            <Title>Midas Growth</Title>
            <Description>
              O plano básico para o crescimento de uma empresa, um plano enxuto,
              com os principais benefícios
            </Description>
            <Benefit mark>Landing page</Benefit>
            <Benefit>Análise e planejamento de marketing digital</Benefit>
            <Benefit>Estratégias de marketing de conteúdo</Benefit>
            <Benefit>Otimização de mecanismos de busca(SEO)</Benefit>
            <Benefit>
              Relatórios e apresentações de resultados mensais e recomendações
              para melhoria contínua
            </Benefit>
          </List>
          <Button
            onClick={() => Router.push("https://wa.link/ifyvwo")}
            displaySize={displaySize}
          >
            Contratar
          </Button>
        </Card>
        <Card>
          <List>
            <Title>Midas Pro</Title>
            <Description>
              O Plano Premium é uma opção para empresas que precisam de um
              suporte personalizado e mais recursos para suas campanhas de
              marketing online.
            </Description>
            <Benefit mark>Todos os benefícios do Midas Growth</Benefit>
            <Benefit mark>Para investimentos a partir de 10 mil reais</Benefit>
            <Benefit>Suporte VIP via whatsapp de um de nossos conselheiros</Benefit>
          </List>
          <Button
            onClick={() => Router.push("https://wa.link/ifyvwo")}
            displaySize={displaySize}
          >
            Contratar
          </Button>
        </Card>
        <Card>
          <List>
            <Title>Midas Launch</Title>
            <Description>
              Um plano personalizado para quem quer lançar serviços,
              treinamentos ou produtos no mercado
            </Description>
            <Benefit mark>Tráfego para lançamento</Benefit>
            <Benefit>Assessoria completa direcionada para lançamentos</Benefit>
            <Benefit>Estratégias de marketing de conteúdo</Benefit>
            <Benefit>Sites necessários para seu lançamento</Benefit>
            <Benefit>Suporte personalizado</Benefit>
          </List>
          <Button
            onClick={() => Router.push("https://wa.link/ifyvwo")}
            displaySize={displaySize}
          >
            Contratar
          </Button>
        </Card>
      </Wrapper>
    </Section>
  );
};
const Section = styled.section<{ displaySize: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(p) => (p.displaySize ? "115rem" : "40rem")};
  background-color: ${(p) => p.theme.primary};
  /* background-color: red; */
`;
const Wrapper = styled.div<{ displaySize: boolean }>`
  height: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: ${(p) => (p.displaySize ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  opacity: 0.9;
  /* -webkit-backdrop-filter: blur(2em);
  backdrop-filter: blur(1rem); */
  display: flex;
  padding: 2rem 1.5rem 2rem 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-image: linear-gradient(230deg, #050505 0%, #14110f 100%); */
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  height: 30rem;
  max-height: 80%;
  width: 80%;
  margin: 2rem;
  border-radius: 1rem;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.005);
    Button {
      background-color: #fddd00;
    }
  }
`;
const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  text-align: center;
  margin: 1.5rem 0 2.5rem 0;
  font-weight: 700;
  font-size: 2rem;
  color: ${(p) => p.theme.alt};
`;
const Description = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  font-weight: 400;
`;
const List = styled.div`
  color: ${(p) => p.theme.main};
  font-size: 0.9rem;
  font-weight: 500;
`;
const Benefit = styled.div<{ mark?: boolean }>`
  margin: 1rem 0 1rem 0;
  color: ${(p) => (p.mark ? p.theme.alt : p.theme.main)};
`;
const Button = styled.button<{ displaySize?: boolean }>`
  //use a fonte DM Sans
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  background-color: ${(p) => (p.displaySize ? p.theme.alt : p.theme.secondary)};
  color: ${(p) => p.theme.primary};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  width: 100%;
  height: 3rem;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default contract;
