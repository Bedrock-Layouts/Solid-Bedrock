import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function SwitchAt(): JSXElement {
  return (
    <Inline gutter="lg" minItemWidth={100} switchAt="45rem">
      <Box />
      <Box />
      <Box />
      <Box />
    </Inline>
  );
}
