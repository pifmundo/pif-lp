import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const Diagonal = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 768px");
  const picturePath = "/JF.jpg";
  return (
    <Section isNonMobileScreen={isNonMobileScreen}>
      <TextWrapper isNonMobileScreen={isNonMobileScreen}>
        <h1>Algum texto</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam
          eaque tempora temporibus facilis laborum recusandae. Quisquam, quod ea
          amet consectetur.
        </h2>
      </TextWrapper>
      {/* <Carousel /> */}
      <Card isNonMobileScreen={isNonMobileScreen}>
        <Image
          src={"/JF.jpg"}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-image"
        />
        <div>
          <h1>José Fernando</h1>
          <h2>CEO</h2>
        </div>
      </Card>
    </Section>
  );
};
const Section = styled.section<{ isNonMobileScreen: boolean }>`
  z-index: 0;
  height: ${(p) => (p.isNonMobileScreen ? "60rem" : "45rem")};
  position: relative;
  margin: ${(p) => (p.isNonMobileScreen ? "10vw 0 0 0" : "10vw 0 15vw 0")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(p) => (p.isNonMobileScreen ? "row" : "column-reverse")};
  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(70deg, #ffb700, #fddd00);
    transform: skewY(-10deg);
  }
  .rounded-image {
    border-radius: 2rem 2rem 0 0;
    width: 25rem;
    height: 25rem;
    max-width: 80vw;
    max-height: 80vw;
  }
`;

const TextWrapper = styled.div<{ isNonMobileScreen: boolean }>`
  margin-right: ${(p) => (p.isNonMobileScreen ? "2rem" : "0")};
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.isNonMobileScreen ? "30%" : "90%")};
  transform: ${(p) => (p.isNonMobileScreen ? "none" : "translateY(-6rem)")};

  h1 {
    color: #000;
    font-size: 3rem;
  }
  h2 {
    font-size: 1.4rem;
  }
`;

const Card = styled.div<{ isNonMobileScreen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(p) => p.theme.secondary};
  width: 25rem;
  height: 32rem;
  max-height: 100vw;
  max-width: 80vw;
  border-radius: 4rem 4rem 2rem 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transform: ${(p) => (p.isNonMobileScreen ? "none" : "translateY(-10rem)")};
  h1 {
    color: ${(p) => p.theme.primary};
    height: 0.1rem;
    font-size: 2rem;
    margin: 0.5rem 0 1rem 0;
  }
  h2 {
    color: #2d2d2d;
    font-size: 1rem;
    height: 0.1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 2.8rem;
    margin-top: ${(p) => (p.isNonMobileScreen ? "0.8rem" : "0")};
    padding-left: 2.1rem;
  }
`;
export default Diagonal;
