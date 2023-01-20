import { JSXElement } from "solid-js";

import { Split } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function SwitchAt(): JSXElement {
  return (
    <Split gutter="size3" fraction="1/2" switchAt="45rem">
      <Box />
      <Box />
    </Split>
  );
}
