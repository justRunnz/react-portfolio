import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  filter: invert(1);
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TextLogo = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;
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
  &:after {
    content: "";
    display: flex;
    width: 100%;
    border-bottom: 1px solid;
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
  background-color: #da4ea2;
  color: white;
  border: none;
  padding: 7.5px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "poppins-semibold";
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <div style={{display: "flex", alignItems: "center"}}>
            <Logo src="./images/logo.png" alt="logo" />
            <TextLogo>justRunz</TextLogo>
          </div>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Projects</ListItem>
            {/* <ListItem>Contact</ListItem> */}
          </List>
        </Links>
        {/* <Icons> */}
        {/* <Icon src="./images/icon.png" alt="icon" /> */}
        <Button>Contact</Button>
        {/* </Icons> */}
      </Container>
    </Section>
  );
};

export default NavBar;
