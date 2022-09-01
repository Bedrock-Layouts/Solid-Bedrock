import { JSXElement } from "solid-js";

import { Column, Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function SwitchAt(): JSXElement {
  return (
    <Columns gutter="lg" columns={3} switchAt="45rem">
      <Box />
      <Box />
      <Box />
      <Column span={3}>
        <Box />
      </Column>
    </Columns>
  );
}
