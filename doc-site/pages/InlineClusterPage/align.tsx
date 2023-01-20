import { JSXElement } from "solid-js";

import { InlineCluster } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Align(): JSXElement {
  return (
    <>
      <h3>start</h3>
      <InlineCluster align="start" gutter="size7">
        <Box style="height:200px" widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
      </InlineCluster>
      <h3>end</h3>
      <InlineCluster align="end" gutter="size7">
        <Box style="height:200px" widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
      </InlineCluster>
      <h3>center</h3>
      <InlineCluster align="center" gutter="size7">
        <Box style="height:200px" widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
      </InlineCluster>
      <h3>stretch</h3>
      <InlineCluster align="stretch" gutter="size7">
        <Box style="height:200px" widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
      </InlineCluster>
    </>
  );
}
