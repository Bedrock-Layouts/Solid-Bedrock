import { JSXElement } from "solid-js";

import { ColumnDrop } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Basis(): JSXElement {
  return (
    <ColumnDrop gutter="lg" minItemWidth="15rem">
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
