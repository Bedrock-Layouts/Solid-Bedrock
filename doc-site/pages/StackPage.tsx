import { SpacingOptions } from "packages/solid/lib";
import { For, JSX, JSXElement, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import { PadBox, Stack, spacing } from "../../packages/solid/src";
import { CodeBlock } from "../components/CodeBlock";
import { PageSection } from "../components/PageSection";

const Box = styled.div`
  background: black;
  min-height: 50px;
  min-width: 50px;
`;

const Select = styled.select`
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid gray;
  border-radius: var(--radius-2);
  cursor: pointer;
  background-color: #fff;
  min-width: var(--size-content-1);
  max-width: var(--size-content-2);
  padding: var(--space-sm);
`;

function Story(props: JSX.DOMAttributes<"div">) {
  return (
    <Stack
      as={PadBox}
      padding="lg"
      gutter="mdLg"
      style="border:1px solid black"
      {...props}
    />
  );
}

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
  const [gutter, setGutter] = createSignal<SpacingOptions>("lg");
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
        <Story>
          <h3>none</h3>
          <Stack gutter="none">
            <Box />
            <Box />
          </Stack>
          <h3>xxs</h3>
          <Stack gutter="xxs">
            <Box />
            <Box />
          </Stack>
          <h3>xs</h3>
          <Stack gutter="xs">
            <Box />
            <Box />
          </Stack>
          <h3>sm</h3>
          <Stack gutter="sm">
            <Box />
            <Box />
          </Stack>
          <h3>md</h3>
          <Stack gutter="md">
            <Box />
            <Box />
          </Stack>
          <h3>mdLg</h3>
          <Stack gutter="mdLg">
            <Box />
            <Box />
          </Stack>
          <h3>lg</h3>
          <Stack gutter="lg">
            <Box />
            <Box />
          </Stack>
          <h3>lgXl</h3>
          <Stack gutter="lgXl">
            <Box />
            <Box />
          </Stack>
          <h3>xl</h3>
          <Stack gutter="xl">
            <Box />
            <Box />
          </Stack>
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
        </Story>

        <CodeBlock
          code={`
  function App() {
    return (
      <>
        <h3>Custom gutter as number (20)</h3>
        <Stack gutter={20}>
          <Box />
          <Box />
        </Stack>
        <h3>Custom gutter as string ("3ch")</h3>
        <Stack gutter="3ch">
          <Box />
          <Box />
        </Stack>
        <h3>none</h3>
        <Stack gutter="none">
          <Box />
          <Box />
        </Stack>
        <h3>xxs</h3>
        <Stack gutter="xxs">
          <Box />
          <Box />
        </Stack>
        <h3>xs</h3>
        <Stack gutter="xs">
          <Box />
          <Box />
        </Stack>
        <h3>sm</h3>
        <Stack gutter="sm">
          <Box />
          <Box />
        </Stack>
        <h3>md</h3>
        <Stack gutter="md">
          <Box />
          <Box />
        </Stack>
        <h3>mdLg</h3>
        <Stack gutter="mdLg">
          <Box />
          <Box />
        </Stack>
        <h3>lg</h3>
        <Stack gutter="lg">
          <Box />
          <Box />
        </Stack>
        <h3>lgXl</h3>
        <Stack gutter="lgXl">
          <Box />
          <Box />
        </Stack>
        <h3>xl</h3>
        <Stack gutter="xl">
          <Box />
          <Box />
        </Stack>
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
      <PageSection title="Playground">
        <Story>
          <Stack gutter={gutter()}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Stack>
        </Story>

        <table>
          <thead>
            <HeaderRow>
              <HeadingCell>Name</HeadingCell>
              <HeadingCell>Description</HeadingCell>
              <HeadingCell>Default</HeadingCell>
              <HeadingCell>Control</HeadingCell>
            </HeaderRow>
          </thead>
          <tbody>
            <BodyRow>
              <BodyCell>
                <strong>gutter</strong>
              </BodyCell>
              <BodyCell>The space between each item.</BodyCell>
              <BodyCell>0px</BodyCell>
              <BodyCell>
                <Select
                  name="gutter"
                  value={gutter()}
                  onChange={(e) =>
                    setGutter(e.currentTarget.value as SpacingOptions)
                  }
                >
                  <For each={Object.keys(spacing)}>
                    {(gutterOption) => (
                      <option value={gutterOption}>{gutterOption}</option>
                    )}
                  </For>
                </Select>
              </BodyCell>
            </BodyRow>
          </tbody>
        </table>
      </PageSection>
    </Stack>
  );
}
