import { useMediaQuery } from "@mui/material";
import styled from "styled-components";

const contract = () => {
  const displaySize = useMediaQuery("(max-width: 768px)");
  return (
    <Section displaySize={displaySize}>
      <Wrapper displaySize={displaySize}>
        <Card>
          <List>
            <Title>Midas Growth</Title>
            <Description>
              O plano básico para o crescimento de uma empresa, um plano enxuto,
              com os principais benefícios
            </Description>
            <Benefit>Até 3 landing pages</Benefit>
            <Benefit>Analytics e teste A/B para otimização</Benefit>
            <Benefit>Analytics e teste A/B para otimização</Benefit>
            <Benefit>Analytics e teste A/B para otimização</Benefit>
            <Benefit>
              Suporte em até 12 horas via whatsapp de um dos nossos conselheiros
            </Benefit>
          </List>
          <Confirm>
            <Price cut> ㅤR$ 2.219,90ㅤ</Price>
            <Price>R$ 1.719,99/mês</Price>
            <Discount>(Você economiza R$400,00/mês)</Discount>
          </Confirm>
          <Button displaySize={displaySize}>Contratar</Button>
        </Card>
        <Card>
          <List>
            <Title>Midas Pro</Title>
            <Description>
              O Plano Premium é uma opção para empresas que precisam de um
              suporte personalizado e mais recursos para suas campanhas de
              marketing online.
            </Description>
            <Benefit mark>Lançamento de produto incluso</Benefit>
            <Benefit>
              Suporte prioritário em até 6 horas via whatsapp de um dos nossos
              conselheiros
            </Benefit>
            <Benefit>Analytics avançado e aplicação de testes A/B</Benefit>
            <Benefit>Dedicated account manager</Benefit>
            <Benefit>Personalized strategy development</Benefit>
            <Benefit>
              Priority support with a turnaround time of six hours or less
            </Benefit>
          </List>
          <Confirm>
            <Price>R$ 2.769,99/mês</Price>
          </Confirm>
          <Button displaySize={displaySize}>Contratar</Button>
        </Card>
        <Card>
          <List>
            <Title>Midas Elite</Title>
            <Description>
              O Plano Elite é a opção mais completa para empresas que procuram
              um suporte personalizado e sob medida. Com todos os recursos do
              Plano Premium, além de design e desenvolvimento personalizados.
            </Description>
            <Benefit mark>Lançamentos e landing pages ilimitadas</Benefit>
            <Benefit mark>Cliente único</Benefit>
            <Benefit>Inclui todos os benefícios do Midas Pro</Benefit>
            <Benefit>Design e desenvolvimento customizados à demanda</Benefit>
            <Benefit>Suporte personalizado</Benefit>
            <Benefit>Estratégia de marketing unica para cada case</Benefit>
          </List>
          <Confirm>
            <Price>R$ 5.235,99/mês</Price>
          </Confirm>
          <Button displaySize={displaySize}>Contratar</Button>
        </Card>
      </Wrapper>
    </Section>
  );
};
const Section = styled.section<{ displaySize: boolean }>`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(p) => (p.displaySize ? "120rem" : "35rem")};
  background-color: ${(p) => p.theme.primary};
`;
const Wrapper = styled.div<{ displaySize: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.displaySize ? "column" : "row")};
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Card = styled.div`
  scroll-snap-align: start;
  scroll-padding-top: 5rem;
  opacity: 0.9;
  -webkit-backdrop-filter: blur(2em);
  backdrop-filter: blur(1rem);
  display: flex;
  padding: 2rem 1.5rem 2rem 1.5rem;
  z-index: 10;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #0a0a0a; */
  background-image: linear-gradient(230deg, #050505 0%, #14110f 100%);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  width: 20rem;
  height: 34rem;
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
const List = styled.ul`
  color: ${(p) => p.theme.main};
  font-size: 0.9rem;
  font-weight: 500;
`;
const Benefit = styled.li<{ mark?: boolean }>`
  margin: 1rem 0 1rem 0;
  color: ${(p) => (p.mark ? p.theme.alt : p.theme.main)};
`;
const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Price = styled.h2<{ cut?: boolean }>`
  color: ${(p) => (p.cut ? p.theme.main : p.theme.text)};
  text-decoration: ${(p) => (p.cut ? "line-through" : "none")};
  font-size: ${(p) => (p.cut ? "1rem" : "1.5rem")};
  font-weight: ${(p) => (p.cut ? 400 : 500)};
  margin: ${(p) => (p.cut ? "0rem" : ".3rem")};
`;
const Discount = styled.h3`
  font-weight: 400;
  font-size: 0.6rem;
  margin: 0.5rem;
  color: ${(p) => p.theme.alt};
`;
const Button = styled.button<{ displaySize?: boolean }>`
  background-color: ${(p) => (p.displaySize ? p.theme.alt : p.theme.secondary)};
  color: ${(p) => p.theme.primary};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  height: 3rem;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default contract;
