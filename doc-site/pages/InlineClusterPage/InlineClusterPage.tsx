import { InlineClusterProps } from "packages/solid/lib";
import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { Align } from "./align";
import alignCode from "./align?raw";
import { argTypes } from "./argTypes";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Justify } from "./justify";
import justifyCode from "./justify?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";

export function InlineClusterPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="size9">
      <Heading id="title">InlineCluster</Heading>
      <PageSection title="Use Case">
        <p>
          The `InlineCluster` component is used to display a group of elements
          in a row. When the group is too large to fit in a single row, the
          elements will be displayed in a cluster based on the width of the
          container and the justification of the cluster.
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
      <PageSection title="justify">
        <p>
          The `justify` prop defines the inline justification of the elements
          within the cluster. It accepts the following values: `start`, `end`,
          `center`.
        </p>

        <Story code={justifyCode}>
          <Justify />
        </Story>
      </PageSection>
      <PageSection title="align">
        <p>
          The `align` prop defines the block alignment of the elements within
          the cluster. It accepts the following values: `start`, `end`,
          `center`, `stretch`.
        </p>

        <Story code={alignCode}>
          <Align />
        </Story>
      </PageSection>
      <PageSection title="Playground">
        <Story code={playgroundCode}>
          <Playground {...(props() as unknown as InlineClusterProps)} />
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
