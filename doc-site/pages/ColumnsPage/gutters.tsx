import { JSXElement } from "solid-js";

import { Columns } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Columns gutter="none" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xxs</h3>
      <Columns gutter="xxs" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xs</h3>
      <Columns gutter="xs" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>sm</h3>
      <Columns gutter="sm" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>md</h3>
      <Columns gutter="md" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>mdLg</h3>
      <Columns gutter="mdLg" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>lg</h3>
      <Columns gutter="lg" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>lgXl</h3>
      <Columns gutter="lgXl" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xl</h3>
      <Columns gutter="xl" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xl</h3>
      <Columns gutter="xl" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xlXXl</h3>
      <Columns gutter="xlXXl" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
      <h3>xxl</h3>
      <Columns gutter="xxl" columns={4}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Columns>
    </>
  );
}
