import { JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

import { Stack } from "../../packages/solid/src";

const Heading = styled("h1")`
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-family: "Roboto", sans-serif;
  font-weight: var(--font-weight-4);
  letter-spacing: var(--font-letterspacing-1);
`;

export function StackPage(): JSXElement {
  return (
    <Stack gutter="xxl">
      <Heading id="title">Stack</Heading>
      <Stack gutter="lg">
        <h2>Use Case</h2>
        <p>
          The Stack is designed to literally 'stack' items on top of each other
          while maintaining a consistent gutter between each item.
        </p>
      </Stack>
    </Stack>
  );
}
