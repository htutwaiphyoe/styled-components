import React from "react";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Logo } from "../styles/Header.styled";
import { StyledFooter, Action, Grid, Flex, Copy, Icon, Socials } from "../styles/Footer.styled";
import {
    FaPhoneAlt,
    FaLocationArrow,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Action>
                    <h3>Ready To Build Your Community?</h3>
                    <Button color="#fff" bg="hsl(322, 100%, 66%)">
                        Get Started For Free
                    </Button>
                </Action>
                <div>
                    <Logo src="./images/logo_white.svg" alt="Huddle" />
                    <Grid>
                        <ul>
                            <li>
                                <FaLocationArrow />
                                <span>2073 Westwood Avenue</span>
                            </li>
                            <li>
                                <FaPhoneAlt /> <span>+1-543-123-4567</span>
                            </li>
                            <li>
                                <FaEnvelope /> <span>example@huddle.com</span>
                            </li>
                        </ul>

                        <ul>
                            <li>About Us</li>
                            <li>What We Do</li>
                            <li>FAQ</li>
                        </ul>
                        <ul>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>

                        <Socials>
                            <Flex>
                                <li>
                                    <Icon href="/">
                                        <FaFacebook />
                                    </Icon>
                                </li>
                                <li>
                                    <Icon href="/">
                                        <FaTwitter />
                                    </Icon>
                                </li>
                                <li>
                                    <Icon href="/">
                                        <FaInstagram />
                                    </Icon>
                                </li>
                            </Flex>
                        </Socials>
                    </Grid>
                    <Copy>Copyright &copy; 2021. All rights reserved.</Copy>
                </div>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
