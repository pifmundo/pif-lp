import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useMediaQuery } from "@mui/material";

const Savings = () => {
  const [counterOn, setCounterOn] = useState(false);

  const [counter, setCounter] = useState(0);

  const precoDesigner = 2508.43;
  const precoCopy = 3556.62;
  const precoGestor = 2583.85;
  const precoFront = 9094.35;
  const precoTotal = precoDesigner + precoCopy + precoGestor + precoFront;

  const [font, setFont] = useState(false);

  const isNonMobileScreen = useMediaQuery("(min-width: 768px)");

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounterOn(true);
        }
        else {
          setCounterOn(false);
          setCounter(0);
        }
      });
    });
    ref.current && observer.observe(ref.current);//oh god how I hate html elements
    return () => (ref.current && observer.unobserve(ref.current)) || console.log("fail");
  }, []);

  return (
    <Section id="benefits" ref={ref} isNonMobileScreen={isNonMobileScreen}>
      <h2>
        Com a midas, você <mark>ECONOMIZA</mark>
      </h2>
        <div>
          <h2>
            <mark>
              R${" "}
              {counterOn && (
                <CountUp
                  delay={0}
                  duration={1.2}
                  start={0}
                  end={precoDesigner}
                  decimals={2}
                  decimal=","
                  separator=" "
                  onEnd={() => setCounter(counter + 1)}
                />
              )}
            </mark>
            {" um designer"}
          </h2>
          {counter > 0 && (
            <h2>
              <mark>
                R${" "}
                {counterOn && (
                  <CountUp
                    delay={0}
                    duration={1.2}
                    start={0}
                    end={precoCopy}
                    decimals={2}
                    decimal=","
                    separator=" "
                    onEnd={() => setCounter(counter + 1)}
                  />
                )}
              </mark>
              {" um copywritter"}
            </h2>
          )}
          {counter > 1 && (
            <h2>
              <mark>
                R${" "}
                {counterOn && (
                  <CountUp
                    delay={0}
                    duration={1.2}
                    start={0}
                    end={precoGestor}
                    decimals={2}
                    decimal=","
                    separator=" "
                    onEnd={() => setCounter(counter + 1)}
                  />
                )}
              </mark>
              {" um gestor de tráfego"}
            </h2>
          )}
          {counter > 2 && (
            <h2>
              <mark>
                R${" "}
                {counterOn && (
                  <CountUp
                    delay={0}
                    duration={1.2}
                    start={0}
                    end={precoFront}
                    decimals={2}
                    decimal=","
                    separator=" "
                    onEnd={() => setCounter(counter + 1)}
                  />
                )}
              </mark>
              {" um desenvolvedor de software front-end"}
            </h2>
          )}
          {counterOn && (
            <Price>
              <mark>
                {"R$ "}
                <CountUp
                  delay={0}
                  duration={4.8}
                  start={0}
                  end={precoTotal}
                  decimals={2}
                  decimal=","
                  separator=" "
                  onEnd={() => setFont(true)}
                />
              </mark>
              {font && isNonMobileScreen && <p>por mês</p>}
            </Price>
          )}
          {font && <h3>(fonte: Glassdoor)</h3>}
        </div>
    </Section>
  );
};
const Section = styled.section<{ isNonMobileScreen: boolean }>`
  padding : 2rem 0 0 0;
  scroll-snap-align: start;
  background-color: ${(p) => p.theme.primary};
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  mark {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.alt};
  }
  h1 {
    margin: 0;
    font-size: ${(p) => (p.isNonMobileScreen ? "7rem" : "16.7vw")};
    color: ${(p) => p.theme.text};
  }
  h2 {
    font-size: 1.4rem;
    margin: 1rem 0 1rem 0;
    color: ${(p) => p.theme.text};
  }
  div {
    margin: 4rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    text-align: left;
  }
  h3 {
    margin: 0;
    color: ${(p) => p.theme.main};
  }
  p {
    font-size: 1rem;
    margin-top: 4rem;
  }
`;
const Price = styled.h1`
  font-size: 5rem;
  display: flex;
`;

export default Savings;
