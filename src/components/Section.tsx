import styled from "styled-components";

type SectionProps = {
    children: React.ReactNode;
    height: string;
    color: string;
    fd: string;
}


const Section = ({ children, height, color, fd }:SectionProps ) => {
    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${fd};
        background-color: ${color};
        width: 100vw;
        height: ${height};
        padding: 0;
    `
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Section;