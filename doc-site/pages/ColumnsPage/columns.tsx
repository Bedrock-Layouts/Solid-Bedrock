import { JSXElement } from "solid-js";

import { Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function ColumnsExample(): JSXElement {
  return (
    <Columns gutter="lg" columns={4}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Columns>
  );
}
