import { JSXElement } from "solid-js";

import { Split, SplitProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: SplitProps): JSXElement {
  return (
    <Split {...props}>
      <Box />
      <Box />
    </Split>
  );
}
