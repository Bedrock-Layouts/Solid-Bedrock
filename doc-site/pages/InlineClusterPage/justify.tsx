import { JSXElement } from "solid-js";

import { InlineCluster } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Justify(): JSXElement {
  return (
    <>
      <h3>start</h3>
      <InlineCluster justify="start" gutter="size7">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>end</h3>
      <InlineCluster justify="end" gutter="size7">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>center</h3>
      <InlineCluster justify="center" gutter="size7">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
    </>
  );
}
