import { JSXElement } from "solid-js";

import { Stack } from "../../packages/solid/src";

export function PageSection(props: {
  title: string;
  children: JSXElement;
}): JSXElement {
  return (
    <Stack gutter="lg">
      <h2>{props.title}</h2>
      {props.children}
    </Stack>
  );
}
