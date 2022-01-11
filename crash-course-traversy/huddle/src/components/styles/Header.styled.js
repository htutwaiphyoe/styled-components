import styled from "styled-components";

export const StyledHeader = styled.header`
    background-image: url("./images/bg-hero-desktop.svg"),
        linear-gradient(
            ${({ theme }) => theme.colors.header},
            ${({ theme }) => theme.colors.header}
        );
    padding: 40px 0;
    font-family: "Poppins", sans-serif;
    margin-bottom: 7rem;

    & p {
        margin-bottom: 2.5rem;
        opacity: 0.6;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        text-align: center;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
`;

export const Logo = styled.img`
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        width: 15rem;
    }
`;

export const Image = styled.img`
    width: 55rem;
    margin-left: 3rem;
    @media only screen and (max-width: ${({ theme }) => theme.width.xl}) {
        width: 45rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        margin-left: 0rem;
        margin-top: 5rem;
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        width: 37.5rem;
    }
`;
