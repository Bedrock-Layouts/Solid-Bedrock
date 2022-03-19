import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { MinItemWidth } from "./minItemWidth";
import minItemWidthCode from "./minItemWidth?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";

export function GridPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="xxl">
      <Heading id="title">Grid</Heading>
      <PageSection title="Use Case">
        <p>
          The `Grid` component is designed to create a responsive grid of items
          that will automatically wrap based on the number of children and the
          `minItemWidth` prop's value.
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
      <PageSection title="basis">
        <p>
          The `basis` prop defines the width basis of each of the children. The
          `ColumnDrop` will the optimize how many columns and rows are needed
          based on that value.
        </p>

        <p>
          In the below example, The `basis` is set to `15rem`. As you resize the
          window, the Grid will recalculate and potentially change the count of
          columns and rows.
        </p>
        <Story code={minItemWidthCode}>
          <MinItemWidth />
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
