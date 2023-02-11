import styled from "styled-components";

type SectionProps = {
  children: React.ReactNode;
  height: string;
  width: string;
  color: string;
  fd: string;
};

const Section = ({ children, height, width, color, fd }: SectionProps) => {
  return (
    <Wrapper width={width} height={height} color={color} fd={fd}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section<SectionProps>`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: ${({ fd }) => fd};
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0;
`;

export default Section;
