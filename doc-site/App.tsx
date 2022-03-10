import { Link, Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import {
  Center,
  Cover,
  Inline,
  PadBox,
  Split,
  Stack,
} from "../packages/solid/src";
import { Button } from "./Button";
import { LogoOnly } from "./LogoOnly";

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
    <Split fraction="auto-start" gutter="lg" switchAt={1000}>
      <aside>
        <Center as="figure" maxWidth="20rem">
          <img
            src="https://bedrock-layout.dev/Full%20logo.png"
            alt="Bedrock Layout"
            style="max-width: 20rem;"
          />
        </Center>
      </aside>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*all" element={<Stack>Not Found</Stack>} />
      </Routes>
    </Split>
  );
};

export default App;

function LandingPage() {
  return (
    <Stack gutter="xxl">
      <Center maxWidth="80vw">
        <Cover as={PadBox} padding="xl" minHeight="50vh">
          <Stack as={Center} gutter="lg">
            <header>
              <Inline gutter="lg" switchAt="60rem">
                <LogoOnly />

                <Stack gutter="lgXl">
                  <Heading id="title">
                    <Stack gutter="md">
                      SOLID BEDROCK
                      <SubTitle>LAYOUT PRIMITIVES</SubTitle>
                    </Stack>
                  </Heading>
                  <Center
                    as="p"
                    centerText
                    style="font-size: var(--font-size-fluid-0);"
                  >
                    <strong>
                      Foundational layout building blocks for your Solid.js app
                    </strong>
                  </Center>
                  <Center
                    as="a"
                    centerChildren
                    href="https://github.com/Bedrock-Layouts/Solid-Bedrock/stargazers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.shields.io/github/stars/Bedrock-Layouts/Solid-Bedrock?style=social"
                      alt="GitHub Repo stars"
                    />
                  </Center>
                  <Inline gutter="lg" switchAt="20rem" justify="center">
                    <Button primary as={Link} href="/getting-started">
                      Get Started
                    </Button>
                    <Button
                      as="a"
                      href="https://github.com/Bedrock-Layouts/Solid-Bedrock"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  </Inline>
                </Stack>
              </Inline>
            </header>
          </Stack>
        </Cover>
      </Center>
    </Stack>
  );
}
