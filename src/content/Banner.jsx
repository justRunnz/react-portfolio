import React, {Suspense} from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import {FiDownload} from "react-icons/fi";
import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
const WIDHT = window.innerWidth;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  // @media only screen and (max-width: 768px) {
  //   height: 200vh;
  // }
`;

const Container = styled.div`
  height: 100vh;
  width: 1600px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  margin-top: 100px;
  flex: 2;

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
  position: relative;
  flex: 3;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: white;
  font-family: "poppins-medium";
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
  color: white;
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
    color: white;
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
  width: 650px;
  height: 600px;
  margin-top: 100px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Banner = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>
            Hey, I'm justRunz, a <br /> full-stack developer.
          </Title>
          <Description>
            I'm a full-stack developer with a passion for creating beautiful and
            connected websites and mobile applications.
          </Description>
          <Button className="learn-more">
            <div className="circle">
              <div className="icon arrow">
                <FiDownload size={20} color="white" />
              </div>
            </div>
            <span className="button-text">My Resume</span>
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image src="./images/hero.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Banner;
