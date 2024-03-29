import { JSXElement } from "solid-js";

import { Inline, InlineProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: InlineProps): JSXElement {
  return (
    <Inline {...props}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Inline>
  );
}
