import { JSXElement } from "solid-js";

import { Column, Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Dense(): JSXElement {
  return (
    <Columns dense gutter="lg" columns={4}>
      <Box>1</Box>
      <Box>2</Box>
      <Column span={3}>
        <Box>3</Box>
      </Column>
      <Box>4</Box>
      <Box>5</Box>
      <Column span={2}>
        <Box>6</Box>
      </Column>
      <Box>7</Box>
    </Columns>
  );
}
