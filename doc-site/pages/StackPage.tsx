import { JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

import { Center, Cover, PadBox, Stack } from "../../packages/solid/src";

const Heading = styled("h1")`
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: var(--font-weight-4);
  letter-spacing: var(--font-letterspacing-1);
`;

export function StackPage(): JSXElement {
  return (
    <Center maxWidth="80vw">
      <PadBox padding="xl">
        <Stack gutter="xxl">
          <Hero />
        </Stack>
      </PadBox>
    </Center>
  );
}

function Hero() {
  return (
    <Cover as={PadBox} padding="xl" minHeight="60vh">
      <Heading id="title">Stack</Heading>
    </Cover>
  );
}
