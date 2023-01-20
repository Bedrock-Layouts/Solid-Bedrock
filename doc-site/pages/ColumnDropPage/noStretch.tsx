import { JSXElement } from "solid-js";

import { ColumnDrop } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function NoStretch(): JSXElement {
  return (
    <ColumnDrop noStretchedColumns gutter="size3" minItemWidth="15rem">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </ColumnDrop>
  );
}
