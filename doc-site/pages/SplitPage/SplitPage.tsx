import { JSXElement, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { Fraction } from "./fractions";
import fractionCode from "./fractions?raw";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";
import { SwitchAt } from "./switchAt";
import switchAtCode from "./switchAt?raw";

const Heading = styled("h1")`
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-family: "Roboto", sans-serif;
  font-weight: var(--font-weight-4);
  letter-spacing: var(--font-letterspacing-1);
`;

export function SplitPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="xxl">
      <Heading id="title">Split</Heading>
      <PageSection title="Use Case">
        <p>
          The <code>Split</code> component is designed to create a split layout
          based on a fractional ratio. The <code>Split</code> component will
          enforce a standard spacing scheme through the <code>gutter</code> prop
          and will optionally switch to a stack layout when the provided
          threshhold is reached.
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
      <PageSection title="fraction">
        <p>
          The <code>fraction</code> prop defines the fraction of the container
          width to use for the split. You can use the following values:
        </p>
        <Story code={fractionCode}>
          <Fraction />
        </Story>
      </PageSection>
      <PageSection title="switchAt">
        <p>
          The below example will switch the layout to stack when the width is
          less than <code>45rem</code>. (Resize your window to see this in
          action.)
        </p>
        <Story code={switchAtCode}>
          <SwitchAt />
        </Story>
      </PageSection>
      <PageSection title="Playground">
        <Story code={playgroundCode}>
          <Playground {...props()} />
        </Story>
        <ArgsTable
          args={argTypes}
          onChange={({ propName, value }) =>
            setProps((prev) => ({ ...prev, [propName]: value }))
          }
        />
      </PageSection>
    </Stack>
  );
}
