import { JSXElement } from "solid-js";

import { Column, Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Span(): JSXElement {
  return (
    <Columns gutter="size3" columns={4}>
      <Box />
      <Box />
      <Column span={3}>
        <Box style={{ background: "blue" }} />
      </Column>
      <Column span={2}>
        <Box style={{ background: "green" }} />
      </Column>
      <Box />
      <Box />
      <Box />
    </Columns>
  );
}
