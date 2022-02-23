import { Stack } from "@bedrock-layout/solid";
import { Link, Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";

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
    <div data-bedrock-split="fraction:auto-start">
      <aside>
        <figure>
          <img
            src="https://bedrock-layout.dev/Full%20logo.png"
            alt="Bedrock Layout"
            style="max-width: 20rem;"
          />
        </figure>
      </aside>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*all" element={<Stack>Not Found</Stack>} />
      </Routes>
    </div>
  );
};

export default App;

function LandingPage() {
  return (
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
          <header
            data-bedrock-inline="stretch:all"
            style="--gutter:1rem; --switchAt:var(--size-content-3);"
          >
            <LogoOnly />

            <Stack gutter="lgXl">
              <Heading id="title">
                <Stack gutter="md">
                  SOLID BEDROCK
                  <SubTitle>LAYOUT PRIMITIVES</SubTitle>
                </Stack>
              </Heading>
              <p
                data-bedrock-center="center-text"
                style="font-size: var(--font-size-fluid-0);"
              >
                <strong>
                  Foundational layout building blocks for your React app
                </strong>
              </p>
              <a
                data-bedrock-center="center-children"
                href="https://github.com/Bedrock-Layouts/Solid-Bedrock/stargazers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.shields.io/github/stars/Bedrock-Layouts/Solid-Bedrock?style=social"
                  alt="GitHub Repo stars"
                />
              </a>
              <div
                data-bedrock-inline="justify:center"
                style="--gutter:var(--space-lg); --switchAt:20rem"
              >
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
              </div>
            </Stack>
          </header>
        </div>
      </div>
    </Stack>
  );
}
