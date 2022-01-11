import React from "react";
import { Flex } from "../styles/Flex.styled";
import { Image } from "../styles/Image.styled";
import { Container } from "../styles/Container.styled";
import { StyledCard } from "../styles/Card.styled";
const Card = ({ content, layout }) => {
    return (
        <StyledCard>
            <Container>
                <Flex layout={content.id % 2 === 0 && "row-reverse"}>
                    <div>
                        <h2>{content.title}</h2>
                        <p>{content.body}</p>
                    </div>
                    <Image
                        src={`./images/${content.image}`}
                        alt={`${content.title}`}
                        layout={content.id % 2 === 0}
                    />
                </Flex>
            </Container>
        </StyledCard>
    );
};

export default Card;
