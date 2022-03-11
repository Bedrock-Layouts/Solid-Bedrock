import { Link } from "solid-app-router";
import { JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

import {
  Center,
  Cover,
  Grid,
  Inline,
  PadBox,
  Stack,
} from "../../packages/solid/src";
import { Button } from "../components/Button";
import { LogoOnly } from "../components/LogoOnly";

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

const Content = styled(PadBox)`
  background: rgb(249, 250, 251);
`;

export function LandingPage(): JSXElement {
  return (
    <Center maxWidth="80vw">
      <PadBox padding="xl">
        <Stack gutter="xxl">
          <Hero />
          <Content padding="xl">
            <Grid minItemWidth="40ch" gutter="xl">
              <Stack gutter="md">
                <h2> Zero Config</h2>
                <p>
                  Bedrock Layout Primitives are built using{" "}
                  <a
                    href="https://github.com/solidjs/solid-styled-components"
                    target="_blank"
                  >
                    solid-styled-components.
                  </a>
                  This allows Bedrock Layout Primitives to be used in any app
                  without any extra setup. Just `yarn add` the desired
                  package(s) and start using them.
                </p>
              </Stack>
              <Stack gutter="md">
                <h2>Composable Layouts</h2>
                <p>
                  Bedrock Layout Primitives are built to allow you to compose
                  them together to create your own custom layouts. Many
                  "complex" layouts can be created by composing Bedrock Layout
                  Primitives.
                </p>
              </Stack>
              <Stack gutter="md">
                <h2>Use With Any Design System</h2>
                <p>
                  You can use Bedrock Layout Primitives with any design system.
                  Bedrock Layout's' spacing scheme can be easily overridden to
                  match your design system.
                </p>
              </Stack>
            </Grid>
          </Content>
        </Stack>
      </PadBox>
    </Center>
  );
}

function Hero() {
  return (
    <Cover as={PadBox} padding="xl" minHeight="60vh">
      <Stack as={Center} gutter="lg">
        <header>
          <Inline gutter="xxl" switchAt="40rem">
            <Center maxWidth="20rem">
              <LogoOnly />
            </Center>
            <Center maxWidth="60rem">
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
            </Center>
          </Inline>
        </header>
      </Stack>
    </Cover>
  );
}
