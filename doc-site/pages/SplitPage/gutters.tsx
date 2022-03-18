import { JSXElement } from "solid-js";

import { Split } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Split gutter="none" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>xxs</h3>
      <Split gutter="xxs" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>xs</h3>
      <Split gutter="xs" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>sm</h3>
      <Split gutter="sm" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>md</h3>
      <Split gutter="md" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>mdLg</h3>
      <Split gutter="mdLg" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>lg</h3>
      <Split gutter="lg" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>lgXl</h3>
      <Split gutter="lgXl" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>xl</h3>
      <Split gutter="xl" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>xlXXl</h3>
      <Split gutter="xlXXl" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>xxl</h3>
      <Split gutter="xxl" fraction="1/2">
        <Box />
        <Box />
      </Split>
    </>
  );
}
