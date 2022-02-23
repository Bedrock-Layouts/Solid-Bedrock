import { Stack } from "@bedrock-layout/solid";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";

import logo from "../assets/Logo Only.png";
import { Button } from "./Button";

const Heading = styled("h1")`
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: var(--font-weight-4);
  letter-spacing: var(--font-letterspacing-1);
`;

const SubTitle = styled("span")`
  font-size: var(--font-size-fluid-1);
  line-height: 2rem;
`;

const App: Component = () => {
  return (
    <div data-bedrock-split="fraction:auto-start">
      <aside>Side Bar</aside>
      <Stack gutter="xxl" style="padding:var(--space-xl)">
        <div
          data-bedrock-center
          data-bedrock-cover
          style="--minHeight:50vh; --maxWidth:80vw"
        >
          <div
            data-bedrock-center
            data-bedrock-cover-centered
            data-bedrock-stack
            style="--gutter:1rem"
          >
            <header data-bedrock-stack style="--gutter:1rem">
              <figure data-bedrock-frame style="--ratio:16/9">
                <img src={logo} alt="" aria-labelledby="title" />
              </figure>

              <Stack>
                <Heading id="title" gutter="md">
                  <Stack>
                    SOLID BEDROCK
                    <SubTitle>LAYOUT PRIMITIVES</SubTitle>
                  </Stack>
                </Heading>
              </Stack>
            </header>
            <a
              data-bedrock-center="center-children"
              href="https://github.com/Bedrock-Layouts/Solid-Bedrock/stargazers"
            >
              <img
                src="https://img.shields.io/github/stars/Bedrock-Layouts/Bedrock?style=social"
                alt="GitHub Repo stars"
              />
            </a>
            <div
              data-bedrock-inline="justify:center"
              style="--gutter:var(--space-lg); --switchAt:20rem"
            >
              <Button primary as="a" href="/">
                Get Started
              </Button>
              <Button
                as="a"
                href="https://github.com/Bedrock-Layouts/Solid-Bedrock"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default App;
/*
<Cover as={Center} maxWidth='90vw' minHeight="40vh">
  <Split gutter="lgXl" switchAt="50rem">
     <Center maxWidth='90%'>
      <LogoOnly />
    </Center>
    <Stack gutter='lg'>
      <Heading>
        BEDROCK
        <span style={{fontSize:'clamp(0.7rem, 10vw, 1.7rem)', lineHeight: "2rem", letterSpacing: "0.5ch" }}>
          LAYOUT PRIMITIVES
        </span>
      </Heading>
      <Center
        as="p"
        centerText
        style={{ fontSize: "clamp(0.7rem, 10vw, 1.5rem)" }}
      >
        <strong>Foundational layout building blocks for your React app</strong>
      </Center>
      <Center centerChildren as='a' href='https://github.com/Bedrock-Layouts/Bedrock/stargazers'>
        <img src='https://img.shields.io/github/stars/Bedrock-Layouts/Bedrock?style=social' alt='GitHub Repo stars'/>
      </Center>
      <Inline gutter="lg" justify="center" switchAt='20rem'>
        <Button primary as="a" href="/?path=/docs/getting-started-introduction--page">
          Get Started
        </Button>
        <Button as="a" href="https://github.com/Bedrock-Layouts/Bedrock">
          GitHub
        </Button>
      </Inline>
    </Stack>
  </Split>
</Cover>
*/
