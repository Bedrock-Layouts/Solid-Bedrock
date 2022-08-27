import { JSXElement } from "solid-js";

import { Column, Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Offset(): JSXElement {
  return (
    <Columns gutter="lg" columns={5}>
      <Box />
      <Box />
      <Column span={2} offsetStart={1}>
        <Box style={{ background: "blue" }} />
      </Column>
      <Column span={2} offsetEnd={2}>
        <Box style={{ background: "green" }} />
      </Column>
      <Box />
      <Box />
      <Box />
    </Columns>
  );
}
