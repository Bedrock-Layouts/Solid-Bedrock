import { JSXElement } from "solid-js";

import { Column, Columns, ColumnsProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: ColumnsProps): JSXElement {
  return (
    <Columns {...props}>
      <Box />
      <Box />
      <Column span={3}>
        <Box />
      </Column>
      <Column span={2}>
        <Box />
      </Column>
      <Box />
      <Box />
      <Box />
    </Columns>
  );
}
