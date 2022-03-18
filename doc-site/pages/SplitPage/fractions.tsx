import { JSXElement } from "solid-js";

import { Split } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Fraction(): JSXElement {
  return (
    <>
      <h3>1/4</h3>
      <Split gutter="lg" fraction="1/4">
        <Box />
        <Box />
      </Split>
      <h3>1/3</h3>
      <Split gutter="lg" fraction="1/3">
        <Box />
        <Box />
      </Split>
      <h3>1/2</h3>
      <Split gutter="lg" fraction="1/2">
        <Box />
        <Box />
      </Split>
      <h3>2/3</h3>
      <Split gutter="lg" fraction="2/3">
        <Box />
        <Box />
      </Split>
      <h3>3/4</h3>
      <Split gutter="lg" fraction="3/4">
        <Box />
        <Box />
      </Split>
      <h3>auto-start</h3>
      <p>(The first box has a width of 100px)</p>
      <Split gutter="lg" fraction="auto-start">
        <Box />
        <Box />
      </Split>
      <h3>auto-end</h3>
      <p>(The second box has a width of 100px)</p>
      <Split gutter="lg" fraction="auto-end">
        <Box />
        <Box />
      </Split>
    </>
  );
}
