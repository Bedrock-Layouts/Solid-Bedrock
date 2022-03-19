import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function SwitchAt(): JSXElement {
  return (
    <Inline gutter="lg" switchAt="45rem">
      <Box style="min-width: 100px" />
      <Box style="min-width: 100px" />
      <Box style="min-width: 100px" />
      <Box style="min-width: 100px" />
    </Inline>
  );
}
