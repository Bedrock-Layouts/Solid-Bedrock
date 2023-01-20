import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function ICProps(): JSXElement {
  return (
    <Inline gutter="size7" justify="center" align="center">
      <Box style="height:200px;" />
      <Box />
      <Box />
      <Box />
    </Inline>
  );
}
