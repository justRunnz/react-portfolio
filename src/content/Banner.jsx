import {AiFillGithub} from "react-icons/ai";
import {IoLogoLinkedin} from "react-icons/io";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import theme from "../theme";

const WIDHT = window.innerWidth;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;

  // @media only screen and (max-width: 768px) {
  //   height: 200vh;
  // }
`;

const Container = styled.div`
  // height: 100vh;
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  // margin-top: 100px;
  // flex: 2;

  @media only screen and (max-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 50px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  color: ${theme.colors.primary};
  font-family: "poppins-bold";
  margin-top: 100px;
  &:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(255, 255, 255, 0.95) 30%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0.95) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
    margin-top: 0px;
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

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.primary};
  margin: 20px 0px 52px 0px;
  font-family: "poppins-regular";
  width: 500px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: "poppins-medium";

  &.learn-more {
    width: 12rem;
    height: auto;
  }

  & .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #da4ea2;
    border-radius: 1.625rem;

    & .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 14px;
      bottom: 0;
      margin: auto;
      background: #fff;

      &.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.925rem;
        // width: 1.125rem;
        background: none;
      }
    }
  }

  & .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.5rem;
    color: ${theme.colors.primary};
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    color: #fff;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  margin-top: 100px;
  animation: anim 15s infinite ease alternate;
  border-radius: 20%;
  border: 5px solid;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes anim {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      border-color: ${theme.colors.primary};
    }

    30% {
      border-color: #9ac4f8;
    }

    50% {
      border-radius: 100%;
      border-color: #f29ca3;
    }

    70% {
      border-color: #b8d8ba;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      border-color: ${theme.colors.primary};
    }
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.primary};
  margin-right: 20px;
  font-family: "poppins-semibold";

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

const Line = styled.div`
  background-color: ${theme.colors.primary};
  height: 25px;
  margin-right: 20px;
  width: 1px;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  margin-top: -100px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  // border-radius: 50%;
`;

const Banner = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>
            Full-Stack Web & Mobile <br />
            Developer
          </Title>
          <Description>
            Hi, I'm Rui Gaspar. I'm an enthusiastic Full-Stack Web & Mobile
            Developer who currently resides in France.
          </Description>
          <div style={{display: "flex", gap: "10px"}}>
            <a href="https://github.com/justRunnz" target="_blank">
              <AiFillGithub size={35} color={theme.colors.primary} />
            </a>
            <a
              href="https://www.linkedin.com/in/rui-gaspar-web-developpeur/"
              target="_blank"
            >
              <IoLogoLinkedin size={35} color={theme.colors.primary} />
            </a>
          </div>
        </Left>
        <Right>
          <Image src="./images/me.png" />
        </Right>
      </Container>
      <TechContainer>
        <Paragraph>Principal Tech Stack</Paragraph>
        <Line />
        <Icons>
          <Icon src="./images/icons/html.png" />
          <Icon src="./images/icons/css3.png" />
          <Icon src="./images/icons/react.png" />
          <Icon src="./images/icons/js.png" style={{borderRadius: "50%"}} />
          <Icon src="./images/icons/firebase.png" />
        </Icons>
      </TechContainer>
    </Section>
  );
};

export default Banner;
