import {useState} from "react";
import Banner from "./content/Banner";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import styled from "styled-components";
// import "./App.css";

const Container = styled.div`
  height: 100vh;
  background-color: #242424;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-image: url("./images/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
