import React from "react";
import styled, {keyframes} from "styled-components";
import theme from "../theme";
import "../css/NavBarLogo.css";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  // filter: invert(1);
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TextLogo = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-left: 10px;
  font-family: "nasalization-regular";
  &:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }
`;

const ListItem = styled.li`
  font-size: 16px;
  cursor: pointer;
  color: ${theme.colors.primary};
  font-family: "poppins-semibold";
  &:after {
    content: "";
    display: flex;
    width: 100%;
    border-bottom: 2px solid;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }
  &:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const Icons = styled.div``;

const Icon = styled.img``;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-family: "poppins-semibold";
  letter-spacing: 1px;
  // text-transform: uppercase;
  color: ${theme.colors.primary};
  background-color: transparent;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  padding: 7.5px 20px;

  &:before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${theme.colors.primary};
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #ffffff;
    box-shadow: 4px 5px 17px -4px ${theme.colors.primary};
  }

  &:hover:before {
    width: 250%;
  }
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <div style={{display: "flex", alignItems: "center"}}>
          {/* <Logo src="./images/logo.svg" alt="logo" /> */}

          <TextLogo>justRunz</TextLogo>
        </div>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Projects</ListItem>
            {/* <ListItem>Contact</ListItem> */}
            <Button>Contact</Button>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default NavBar;
