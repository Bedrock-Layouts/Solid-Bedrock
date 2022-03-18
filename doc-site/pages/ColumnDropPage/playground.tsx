import { JSXElement } from "solid-js";

import { ColumnDrop, ColumnDropProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: ColumnDropProps): JSXElement {
  return (
    <ColumnDrop {...props}>
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
