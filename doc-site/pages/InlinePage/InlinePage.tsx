import { InlineClusterProps } from "packages/solid/lib";
import { Link } from "solid-app-router";
import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { ICProps } from "./inlineClusterProps";
import inlineClusterPropsCode from "./inlineClusterProps?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";
import { Stretch } from "./stretch";
import stretchCode from "./stretch?raw";
import { SwitchAt } from "./switchAt";
import switchAtCode from "./switchAt?raw";

export function InlinePage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="xxl">
      <Heading id="title">Inline</Heading>
      <PageSection title="Use Case">
        <p>
          The `Inline` component is designed to create consistent spacing around
          inline elements of variable width. Unlike the `InlineCluster`
          component, the items in the `Inline` component will not wrap. The
          `Inline` component also allows you to specify a component that can
          stretch and fill the excess space.
        </p>
      </PageSection>
      <PageSection title="API">
        <ArgsTable args={argTypes} />
      </PageSection>
      <PageSection title="InlineCluster Props">
        <p>
          The `Inline` component has all the same props as the `InlineCluster`
          component. (check the{" "}
          <Link href="/inline-cluster">
            InlineCluster component for more details
          </Link>
          )
        </p>

        <p>
          Below is an example of the `Inline` component with the `gutter` prop
          set to `xl` and both `justify` and `align` props set to `center`.
        </p>
        <Story code={inlineClusterPropsCode}>
          <ICProps />
        </Story>
      </PageSection>
      <PageSection title="stretch">
        <p>
          The `stretch` prop can be used to specify a child component that will
          stretch to fill the excess space.
        </p>

        <Story code={stretchCode}>
          <Stretch />
        </Story>
      </PageSection>
      <PageSection title="switchAt">
        <p>
          In the below example, the layout will switch to stack when its width
          becomes less than `45rem`. (Resize your window to see this in action.)
        </p>

        <Story code={switchAtCode}>
          <SwitchAt />
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
