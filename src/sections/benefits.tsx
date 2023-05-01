import { useMediaQuery } from "@/components/useMediaQuery";
import styled from "styled-components";
import Image from "next/image";

const Benefits = () => {
  return (
    <Section>
      <div className="wrapper">
        <h1>Benefícios</h1>
        <div className="article">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            dignissimos facilis animi facere tenetur excepturi cupiditate error
            commodi perspiciatis sint aperiam laudantium, recusandae at qui non
            mollitia ab accusamus quae.
          </p>
        </div>
        <div className="invertedArticle">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            dignissimos facilis animi facere tenetur excepturi cupiditate error
            commodi perspiciatis sint aperiam laudantium, recusandae at qui non
            mollitia ab accusamus quae.
          </p>
        </div>
        <div className="article">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            dignissimos facilis animi facere tenetur excepturi cupiditate error
            commodi perspiciatis sint aperiam laudantium, recusandae at qui non
            mollitia ab accusamus quae.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  font-family: "Gotham", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #faf7f6;
  padding: 2rem 0;
  .wrapper {
    text-align: center;
    div {
      text-align: start;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90vh;
    max-width: 740px;
    gap: 4rem;
    p {
      font-weight: 600;
      width: 60%;
    }
    h2 {
      font-weight: 700;
    }
  }
  .article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .invertedArticle {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
export default Benefits;
