import { JSXElement } from "solid-js";

import { ColumnDrop } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <ColumnDrop gutter="none">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>xxs</h3>
      <ColumnDrop gutter="xxs">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>xs</h3>
      <ColumnDrop gutter="xs">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>sm</h3>
      <ColumnDrop gutter="sm">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>md</h3>
      <ColumnDrop gutter="md">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>mdLg</h3>
      <ColumnDrop gutter="mdLg">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>lg</h3>
      <ColumnDrop gutter="lg">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>lgXl</h3>
      <ColumnDrop gutter="lgXl">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>xl</h3>
      <ColumnDrop gutter="xl">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>xlXXl</h3>
      <ColumnDrop gutter="xlXXl">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
      <h3>xxl</h3>
      <ColumnDrop gutter="xxl">
        <Box />
        <Box />
        <Box />
        <Box />
      </ColumnDrop>
    </>
  );
}
