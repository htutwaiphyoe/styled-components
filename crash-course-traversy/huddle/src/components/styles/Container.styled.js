import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1144px;
    margin: 0 auto;

    @media only screen and (max-width: 1199px) {
        padding: 0 4rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        padding: 0 2rem;
    }
`;
