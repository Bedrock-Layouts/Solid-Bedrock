import { JSXElement, createSignal } from "solid-js";

import { Spacing, Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";

export function StackPage(): JSXElement {
  const [gutter, setGutter] = createSignal(argTypes.gutter.initialValue);

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
        <ArgsTable args={argTypes} />
      </PageSection>
      <PageSection title="gutter">
        <p>
          The gutter prop defines the gutter size between elements. Bedrock has
          implemented a default spacing scheme, but it can be overridden using
          the ThemeProvider provided by styled-components.
        </p>

        <p>Here are the possible values for gutter by default:</p>
        <Story code={gutterCode}>
          <Gutter />
        </Story>
      </PageSection>
      <PageSection title="Playground">
        <Story code={playgroundCode}>
          <Playground gutter={gutter() as keyof Spacing} />
        </Story>
        <ArgsTable args={argTypes} onChange={({ value }) => setGutter(value)} />
      </PageSection>
    </Stack>
  );
}
