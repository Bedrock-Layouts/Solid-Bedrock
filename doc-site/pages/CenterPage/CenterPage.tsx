import { JSXElement, createSignal } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { ArgsTable } from "../../components/ArgsTable";
import { Heading } from "../../components/Heading";
import { PageSection } from "../../components/PageSection";
import { Story } from "../../components/Story";
import { argTypes } from "./argTypes";
import { CenterChildren } from "./centerChildren";
import centerChildrenCode from "./centerChildren?raw";
import { CenterText } from "./centerText";
import centerTextCode from "./centerText?raw";
import { MaxWidth } from "./maxWidth";
import maxWidthCode from "./maxWidth?raw";
import { Playground } from "./playground";
import playgroundCode from "./playground?raw";

export function CenterPage(): JSXElement {
  const initialValues = Object.fromEntries(
    Object.entries(argTypes).map(([key, { initialValue }]) => [
      key,
      initialValue,
    ])
  );
  const [props, setProps] = createSignal(initialValues);

  return (
    <Stack gutter="size9">
      <Heading id="title">Center</Heading>
      <PageSection title="Use Case">
        <p>
          The <code>Center</code> component is designed to center and clamp its
          width at a predefined value. By default, this value is set to the{" "}
          <code>medium</code> breakpoint. You can also center the children and
          text alignment as well.
        </p>
      </PageSection>
      <PageSection title="API">
        <ArgsTable args={argTypes} />
      </PageSection>
      <PageSection title="maxWidth">
        <p>
          The Center component will clamp the width at a defined maxWidth and
          center itself in its context. Please note that the maxWidth prop
          represents the max-width of the children and not the Center component
          itself.
        </p>
        <p>
          In the example shown below, the maxWidth is set to 75% of the parent
          component's width.
        </p>

        <Story code={maxWidthCode}>
          <MaxWidth />
        </Story>
      </PageSection>
      <PageSection title="centerChildren">
        <p>
          You can also center the children by adding a centerChildren prop.
          Also, the max width of the children is set to 75%.
        </p>

        <Story code={centerChildrenCode}>
          <CenterChildren />
        </Story>
      </PageSection>
      <PageSection title="centerText">
        <p>You can also center the text by adding a centerText prop.</p>

        <Story code={centerTextCode}>
          <CenterText />
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
