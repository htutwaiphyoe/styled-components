import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ layout }) => layout || "row"};
    @media only screen and (max-width: ${({ theme }) => theme.width.lg}) {
        flex-direction: column;
    }
`;
