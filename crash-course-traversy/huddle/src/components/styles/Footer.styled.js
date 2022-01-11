import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: hsl(192, 100%, 10%);
    margin-top: 22rem;
    padding: 13rem 5rem 5rem;
    color: #fff;
    position: relative;

    @media only screen and (max-width: ${({ theme }) => theme.width.xl}) {
        padding: 13rem 0 5rem;
    }
`;

export const Action = styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    top: -15rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 5rem 2rem;
    width: 90%;
    max-width: 50rem;
    text-align: center;

    & h3 {
        color: #002933;
        margin-bottom: 2rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    & li {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        grid-template-columns: 1fr;
    }
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Copy = styled.p`
    text-align: right;
    margin-top: 2rem;
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        text-align: center;
    }
`;

export const Icon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;

    color: #fff;
    border-radius: 2rem;
    border: 1px solid #fff;
`;

export const Socials = styled.ul`
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        justify-self: center;
    }
`;
