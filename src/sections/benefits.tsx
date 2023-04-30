import { useMediaQuery } from "@/components/useMediaQuery";
import styled from "styled-components";
import Image from "next/image";

const Benefits = () => {
  const isNonMobileScreen = useMediaQuery(1000);
  const imageSize = 100;
  return (
    <Wrapper isNonMobileScreen={isNonMobileScreen}>
      <h1>Benefícios</h1>
      <div className="benefitsContainer">
        <div className="benefit">
          <h3>Marketing eficiente</h3>
          <Image
            src="/target.png"
            alt="alvo"
            width={imageSize}
            height={imageSize}
          />
          <p>
            você consegue gastar menos para atingir o público mais qualificado
            para comprar o seu produto
          </p>
        </div>
        <div className="benefit">
          <h3>Maior alcance</h3>
          <Image
            src="/target.png"
            alt="alvo"
            width={imageSize}
            height={imageSize}
          />
          <p>
            Criamos toda sua estratégia de vendas, onde usamos as maneiras mais
            eficazes para converter o máximo de clientes
          </p>
        </div>
        <div className="benefit">
          <h3>Treinamos sua equipe de vendas</h3>
          <Image
            src="/target.png"
            alt="alvo"
            width={imageSize}
            height={imageSize}
          />
          <p>
            Assim você converterá mais clientes tanto pelas redes sociais quanto
            presencialmente.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div<{ isNonMobileScreen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  outline: 1px dashed red;
  div {
    outline: 1px dashed blue;
  }
  font-family: "Gotham", sans-serif;
  font-weight: 600;
  width: 100%;
  background: linear-gradient(48deg, #fddd00 0%, #ffdd00 100%);
  .benefitsContainer {
    align-items: center;
    justify-content: center;
    color: #faf7f6;
    display: flex;
    flex-direction: ${(p) => (p.isNonMobileScreen ? "row" : "column")};
    width: 90vw;
    max-width: 1000px;
  }
  .benefit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 250px;
    background-color: #000;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
  }
  img {
    margin: 1rem;
  }
`;
export default Benefits;
