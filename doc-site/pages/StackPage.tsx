import { JSX, JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

import { PadBox, Stack } from "../../packages/solid/src";
import { CodeBlock } from "../components/CodeBlock";
import { PageSection } from "../components/PageSection";

const Box = styled.div`
  background: black;
  min-height: 50px;
  min-width: 50px;
`;

const Heading = styled("h1")`
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-family: "Roboto", sans-serif;
  font-weight: var(--font-weight-4);
  letter-spacing: var(--font-letterspacing-1);
`;

const HeaderRow = styled("tr")`
  text-align: left;
`;

const BodyRow = styled("tr")`
  --border-style: 1px solid var(--gray-3);
  > td {
    border-top: var(--border-style);
    border-bottom: var(--border-style);
    padding: 1.5rem 1rem;
  }
  > :first-child {
    border-left: var(--border-style);
    border-top-left-radius: var(--radius-2);
    border-bottom-left-radius: var(--radius-2);
  }
  > :last-child {
    border-right: var(--border-style);
    border-top-right-radius: var(--radius-2);
    border-bottom-right-radius: var(--radius-2);
  }
`;

function HeadingCell(props: JSX.DOMAttributes<"th">) {
  return <PadBox as="th" padding="lg" {...props} />;
}

function BodyCell(props: JSX.DOMAttributes<"td">) {
  return <PadBox as="td" padding={["lgXl", "lg"]} {...props} />;
}

export function StackPage(): JSXElement {
  return (
    <Stack gutter="xxl">
      <Heading id="title">Stack</Heading>
      <PageSection title="Use Case">
        <p>
          The Stack is designed to literally 'stack' items on top of each other
          while maintaining a consistent gutter between each item.
        </p>
      </PageSection>
      <PageSection title="API">
        <table>
          <thead>
            <HeaderRow>
              <HeadingCell>Name</HeadingCell>
              <HeadingCell>Description</HeadingCell>
              <HeadingCell>Default</HeadingCell>
            </HeaderRow>
          </thead>
          <tbody>
            <BodyRow>
              <BodyCell>
                <strong>gutter</strong>
              </BodyCell>
              <BodyCell>The space between each item.</BodyCell>
              <BodyCell>0px</BodyCell>
            </BodyRow>
          </tbody>
        </table>
      </PageSection>
      <PageSection title="gutter">
        <p>
          The gutter prop defines the gutter size between elements. Bedrock has
          implemented a default spacing scheme, but it can be overridden using
          the ThemeProvider provided by styled-components.
        </p>

        <p>Here are the possible values for gutter by default:</p>

        <Stack
          as={PadBox}
          padding="lg"
          gutter="xl"
          style="border:1px solid black"
        >
          <h3>xl</h3>
          <Stack gutter="xl">
            <Box />
            <Box />
          </Stack>
          <h3>xlXXl</h3>
          <Stack gutter="xlXXl">
            <Box />
            <Box />
          </Stack>
          <h3>xxl</h3>
          <Stack gutter="xxl">
            <Box />
            <Box />
          </Stack>
        </Stack>

        <CodeBlock
          code={`
  function App() {
    return (
      <>
        <h3>xl</h3>
        <Stack gutter="xl">
          <Box />
          <Box />
        </Stack>
        <h3>xlXXl</h3>
        <Stack gutter="xlXXl">
          <Box />
          <Box />
        </Stack>
        <h3>xxl</h3>
        <Stack gutter="xxl">
          <Box />
          <Box />
        </Stack>
      </>
    );
  }
      `}
          language="javascript"
        />
      </PageSection>
    </Stack>
  );
}
