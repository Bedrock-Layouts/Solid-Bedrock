import { JSXElement } from "solid-js";

import { Split } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function MinItemWidth(): JSXElement {
  return (
    <>
      <h3>{"With fraction of 2/3 and minItemWidth of 40ch"}</h3>
      <Split gutter="size3" fraction="2/3" minItemWidth="40ch">
        <Box />
        <Box />
      </Split>
      <h3>{"With auto-start and minItemWidth of 30ch"}</h3>
      <Split gutter="size3" fraction="auto-start" minItemWidth="30ch">
        <Box />
        <Box />
      </Split>
    </>
  );
}
