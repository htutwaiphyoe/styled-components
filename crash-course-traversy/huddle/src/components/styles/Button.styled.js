import styled from "styled-components";

export const Button = styled.button`
    padding: 1.5rem 6rem;
    color: ${({ color }) => color || "inherit"};
    background-color: ${({ bg }) => bg || "#fff"};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    font-family: "Open Sans", sans-serif;
    border-radius: 10rem;
    transition: 0.2s;
    &:hover {
        opacity: 0.8;
        transform: scale(0.98);
    }
    @media only screen and (max-width: ${({ theme }) => theme.width.sm}) {
        padding: 1.5rem 3rem;
    }
`;
