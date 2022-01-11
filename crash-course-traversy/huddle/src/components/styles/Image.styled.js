import styled from "styled-components";

export const Image = styled.img`
    width: 37.5rem;
    margin-${({ layout }) => (layout ? "right" : "left")}: 5rem;

    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        margin: 0rem;
        margin-bottom: 5rem;
        order: -1;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        width: 37.5rem;
    }
`;
