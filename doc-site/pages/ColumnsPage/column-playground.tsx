import { JSXElement } from "solid-js";

import { Column, ColumnProps, Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function ColumnPlayground(props: ColumnProps): JSXElement {
  return (
    <Columns gutter="lg" columns={5}>
      <Box />
      <Box />
      <Column {...props}>
        <Box style={{ background: "blue" }} />
      </Column>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Columns>
  );
}
