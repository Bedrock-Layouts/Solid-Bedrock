import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";
import { SnapType } from "./snap";
import snapCode from "./snap?raw";

//const playgroundCode = "";
export function ReelPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="size9">
      <Heading id="title">Reel</Heading>
      <PageSection title="Use Case">
        <p>
          Scrolling is a popular and natural way to interact with web content.
          The `Reel` component is designed to organize content into scrollable
          flatlists with convenient scroll breakpoints.
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

      <PageSection title="snaptype">
        <p>The `snapType` prop sets the scroll snap type.</p>

        <Story code={snapCode}>
          <SnapType />
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
