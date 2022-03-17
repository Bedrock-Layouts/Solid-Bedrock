import { JSXElement } from "solid-js";

import { Stack } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Stack gutter="none">
        <Box />
        <Box />
      </Stack>
      <h3>xxs</h3>
      <Stack gutter="xxs">
        <Box />
        <Box />
      </Stack>
      <h3>xs</h3>
      <Stack gutter="xs">
        <Box />
        <Box />
      </Stack>
      <h3>sm</h3>
      <Stack gutter="sm">
        <Box />
        <Box />
      </Stack>
      <h3>md</h3>
      <Stack gutter="md">
        <Box />
        <Box />
      </Stack>
      <h3>mdLg</h3>
      <Stack gutter="mdLg">
        <Box />
        <Box />
      </Stack>
      <h3>lg</h3>
      <Stack gutter="lg">
        <Box />
        <Box />
      </Stack>
      <h3>lgXl</h3>
      <Stack gutter="lgXl">
        <Box />
        <Box />
      </Stack>
      <h3>xl</h3>
      <Stack gutter="xl">
        <Box />
        <Box />
      </Stack>
      <h3>xl</h3>
      <Stack gutter="xl">
        <Box />
        <Box />
      </Stack>
      <h3>xlXXl</h3>
      <Stack gutter="xlXXl">
        <Box />
        <Box />
      </Stack>
      <h3>xxl</h3>
      <Stack gutter="xxl">
        <Box />
        <Box />
      </Stack>
    </>
  );
}
