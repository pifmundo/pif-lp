import { styled } from "styled-components";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/router";

export default function Nav() {
  const Router = useRouter();
  return (
    <Section>
      <Container>
        <Column>
          <RevealWrapper>
            <Profile>
              <Image src="/profile.jpg" width={70} height={70} />
              <ProfileCard
                onClick={() => Router.push("https://instagram.com/pifmundo")}
              >
                <h3>PIF</h3>
                <p>@pifmundo</p>
              </ProfileCard>
            </Profile>
          </RevealWrapper>
          <Card className="big">
            <h3>Por que o método PIF funciona?</h3>
          </Card>
        </Column>
        <Column>
          <Card className="black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Conheça nossos projetos sociais</h3>
          </Card>
          <Card>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Acesse o nosso calendário de eventos</h3>
          </Card>
        </Column>
        <Column>
          <Card>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Saiba quais são os nossos objetivos</h3>
          </Card>
          <Card className="yellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Contribua para uma causa maior</h3>
          </Card>
        </Column>
        <Column>
          <Card className="small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Calendário pró-educação</h3>
          </Card>
          <Card className="big imagefill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Conheça nossos projetos sociais</h3>
          </Card>
        </Column>
      </Container>
    </Section>
  );
}

const ProfileCard = styled.div`
  background-color: #ccc;
  padding: 25px;
  border-radius: 20px;
  box-sizing: border-box;
  margin-top: 35px;
  height: 100%;
  width: 200px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  align-items: center;
  /* aspect-ratio: 4/3; */
  img {
    position: absolute;
    border-radius: 100px;
  }
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const Card = styled(RevealWrapper)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  background-color: #ccc;
  padding: 25px;
  border-radius: 20px;
  aspect-ratio: 3/4;
  width: 200px;

  transition: 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  svg {
    width: 40px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 20px;
  padding-right: 20px;
  .yellow {
    background-color: #ffde59;
  }
  .black {
    background-color: #000;
    color: #faf6f7;
  }
  .small {
    background-color: #e3b119;
    aspect-ratio: 4/3;
  }
  .big {
    background-color: #e3b119;
    aspect-ratio: none;
    height: 100%;
  }
  .imagefill {
    background-image: url("/image3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    color: #faf6f7;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: left;
  width: fit-content;
  margin: 0 auto;

  /* width: fit-content; */
  h2 {
    font-size: 3rem;
    /* color: red; */
    z-index: 2;
  }
  .asterisk {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 10%;
    right: 10%;
    z-index: 0;
  }
  img {
    object-fit: cover;
  }
`;

const Section = styled.section`
  position: relative;
  background-color: #faf6f7;
  padding: 30px;
  @media (min-width: 1200px) {
    padding: 60px calc(50% - 500px);
  }
  overflow-x: scroll;
  /* Hide scrollbar for Chrome, Safari and Opera */
  .example::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
