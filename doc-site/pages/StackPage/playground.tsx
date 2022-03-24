import { JSXElement } from "solid-js";

import { Stack, StackProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: StackProps): JSXElement {
  return (
    <Stack {...props}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  );
}
