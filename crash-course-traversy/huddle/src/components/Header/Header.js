import { StyledHeader, Navigation, Logo, Image } from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Navigation>
                    <Logo src="./images/logo.svg" alt="Huddle" />
                    <Button>Try it free</Button>
                </Navigation>

                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You have a voice, but
                            so does your audience. Create connections with your users as you engage
                            in genuine discussion.
                        </p>
                        <Button color="#fff" bg="hsl(322, 100%, 66%)">
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src="./images/illustration-mockups.svg" alt="Hero" />
                </Flex>
            </Container>
        </StyledHeader>
    );
}
export default Header;
