import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes, columnArgTypes } from "./argTypes";
import { ColumnPlayground } from "./column-playground";
import columnPlaygroundCode from "./column-playground?raw";
import { ColumnsExample } from "./columns";
import columnsCode from "./columns?raw";
import { Dense } from "./dense";
import denseCode from "./dense?raw";
import { Gutter } from "./gutters";
import gutterCode from "./gutters?raw";
import { Offset } from "./offset";
import offsetCode from "./offset?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";
import { Span } from "./span";
import spanCode from "./span?raw";
import { SwitchAt } from "./switchAt";
import switchAtCode from "./switchAt?raw";

export function ColumnsPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );

  const columnInitial = Object.fromEntries(
    Object.entries(columnArgTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );

  const [props, setProps] = createSignal(initialValues);
  const [colProps, setColProps] = createSignal(columnInitial);

  return (
    <Stack gutter="xxl">
      <Heading id="title">Columns</Heading>
      <PageSection title="Use Case">
        <p>
          The `Columns` component is designed to create a n-column layout. The
          complimentary `Column` component will allow elements to span and
          offset n-columns.
        </p>
      </PageSection>
      <PageSection title="API">
        <h3>Columns Props</h3>
        <ArgsTable args={argTypes} />

        <h3>Column Props</h3>
        <ArgsTable args={columnArgTypes} />
      </PageSection>

      <PageSection title="columns">
        <p>
          The below example gives us a 4 column layout. By default, each box
          will take up one column.
        </p>

        <Story code={columnsCode}>
          <ColumnsExample />
        </Story>
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

      <PageSection title="colSpan">
        <p>
          Here, the `Column` component is wrapping the blue and green boxes. It
          is then setting the blue box to span 3 columns and the green to span 2
        </p>

        <Story code={spanCode}>
          <Span />
        </Story>
      </PageSection>

      <PageSection title="dense">
        <p>
          Setting the `dense` prop will layout the children so that the items
          will fill any blank space.
        </p>

        <Story code={denseCode}>
          <Dense />
        </Story>
      </PageSection>

      <PageSection title="offsetStart and offsetEnd">
        <p>
          In the example, the blue box has `offsetStart` prop with value of 1
          and the green box has an `offsetEnd` prop with value of 2
        </p>

        <Story code={offsetCode}>
          <Offset />
        </Story>
      </PageSection>

      <PageSection title="switchAt">
        <p>
          The below Columns layout will switch to a Stack layout when its less
          than `45rem`.
        </p>

        <Story code={switchAtCode}>
          <SwitchAt />
        </Story>
      </PageSection>

      <PageSection title="Playground">
        <h3>Columns Playground</h3>
        <Story code={playgroundCode}>
          <Playground {...props()} />
        </Story>
        <ArgsTable
          args={argTypes}
          onChange={({ propName, value }) =>
            setProps((prev) => ({ ...prev, [propName]: value }))
          }
        />

        <h3>Column Playground</h3>
        <Story code={columnPlaygroundCode}>
          <ColumnPlayground {...colProps()} />
        </Story>
        <ArgsTable
          args={columnArgTypes}
          onChange={({ propName, value }) =>
            setColProps((prev) => ({ ...prev, [propName]: value }))
          }
        />
      </PageSection>
    </Stack>
  );
}
