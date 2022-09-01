import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function MinItemWidth(): JSXElement {
  return (
    <Inline gutter="lg" minItemWidth={150}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Inline>
  );
}
