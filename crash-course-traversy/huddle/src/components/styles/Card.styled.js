import styled from "styled-components";

export const StyledCard = styled.section`
    padding: 5rem 10rem;
    margin-bottom: 3.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    @media only screen and (max-width: ${({ theme }) => theme.width.xl}) {
        padding: 5rem 2rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        text-align: center;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        padding: 5rem 2rem;
    }
`;
