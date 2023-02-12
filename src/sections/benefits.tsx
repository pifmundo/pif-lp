import { useEffect, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import styled from "styled-components";

// const useMediaQuery = (query: string): boolean => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const mediaQueryList = window.matchMedia(query);
//     setMatches(mediaQueryList.matches);
//     const handleChange = (event: MediaQueryListEvent) =>
//       setMatches(event.matches);
//     mediaQueryList.addEventListener("change", handleChange);
//     return () => {
//       mediaQueryList.removeEventListener("change", handleChange);
//     };
//   }, [query]);

//   return matches;
// };

const Benefits = () => {
//   const isNonMobileScreen = useMediaQuery("(min-width: 768px)");
    const isNonMobileScreen = true;
  return (
    <BenefitsContainer displaySize={isNonMobileScreen}>
      <BenefitCard displaySize={isNonMobileScreen}>
        <RocketLaunchIcon sx={{ fontSize: "4rem" }} />
        Lançamento de campanhas digitais
      </BenefitCard>
      <BenefitCard displaySize={isNonMobileScreen}>
        <BusinessIcon sx={{ fontSize: "4rem" }} />
        Beneficio
      </BenefitCard>
      <BenefitCard displaySize={isNonMobileScreen}>
        <StoreIcon sx={{ fontSize: "4rem" }} />
        Encontre o melhor comprador para sua empresa
      </BenefitCard>
      <BenefitCard displaySize={isNonMobileScreen}>
        <AttachMoneyIcon sx={{ fontSize: "3.5rem", margin:"0.1rem" }} />
        Aumentar sua receita e lucratividade
      </BenefitCard>
    </BenefitsContainer>
  );
};
const BenefitCard = styled.div<{ displaySize: Boolean }>`
  height: 20rem;
  width: ${({ displaySize = true }) => (displaySize ? "10%" : "80%")};
  background-color: ${(p) => p.theme.secondary};
  border-radius: 0.5rem;
  border: 0.1rem solid ${(p) => p.theme.main};
  margin: ${({ displaySize = true }) =>
    displaySize ? "0 1rem 0 1rem" : ".5rem 0 .5rem 0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
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
