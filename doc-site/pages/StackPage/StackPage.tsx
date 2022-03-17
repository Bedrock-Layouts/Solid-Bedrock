import { For, JSX, JSXElement, Match, Switch, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import {
  PadBox,
  Spacing,
  Stack,
  createContainerQuery,
  spacing,
} from "../../../packages/solid/src";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";

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
  const [gutter, setGutter] = createSignal("lg");
  const [shouldSwitch, ref] = createContainerQuery(600);
  return (
    <Stack ref={ref} gutter="xxl">
      <Heading id="title">Stack</Heading>
      <PageSection title="Use Case">
        <p>
          The Stack is designed to literally 'stack' items on top of each other
          while maintaining a consistent gutter between each item.
        </p>
      </PageSection>
      <PageSection title="API">
        <Switch>
          <Match when={shouldSwitch() === true}>
            <Stack
              as="dl"
              gutter="md"
              style="border:1px solid var(--gray-3); padding:1rem;"
            >
              <dt>
                <strong>gutter</strong>
              </dt>
              <dd>The space between each item</dd>
              <dd>default value: 0px</dd>
            </Stack>
          </Match>
          <Match when={shouldSwitch() === false}>
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
          </Match>
        </Switch>
      </PageSection>
      <PageSection title="gutter">
        <p>
          The gutter prop defines the gutter size between elements. Bedrock has
          implemented a default spacing scheme, but it can be overridden using
          the ThemeProvider provided by styled-components.
        </p>

        <p>Here are the possible values for gutter by default:</p>
        <Story code={({ dedent }) => dedent(gutterCode)}>
          <Gutter />
        </Story>
      </PageSection>
      <PageSection title="Playground">
        <Story code={({ dedent }) => dedent(playgroundCode)}>
          <Playground gutter={gutter() as Spacing} />
        </Story>
        <Switch>
          <Match when={shouldSwitch() === true}>
            <Stack
              as="dl"
              gutter="md"
              style="border:1px solid var(--gray-3); padding:1rem;"
            >
              <dt>
                <strong>gutter</strong>
              </dt>
              <dd>The space between each item</dd>
              <dd>
                <Select
                  name="gutter"
                  value={gutter()}
                  onChange={(e) => setGutter(e.currentTarget.value)}
                >
                  <For each={Object.keys(spacing)}>
                    {(gutterOption) => (
                      <option value={gutterOption}>{gutterOption}</option>
                    )}
                  </For>
                </Select>
              </dd>
            </Stack>
          </Match>
          <Match when={shouldSwitch() === false}>
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
                      onChange={(e) => setGutter(e.currentTarget.value)}
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
          </Match>
        </Switch>
      </PageSection>
    </Stack>
  );
}
