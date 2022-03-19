import { JSXElement } from "solid-js";

import { InlineCluster } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <InlineCluster gutter="none">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>xxs</h3>
      <InlineCluster gutter="xxs">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>xs</h3>
      <InlineCluster gutter="xs">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>sm</h3>
      <InlineCluster gutter="sm">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>md</h3>
      <InlineCluster gutter="md">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>mdLg</h3>
      <InlineCluster gutter="mdLg">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>lg</h3>
      <InlineCluster gutter="lg">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>lgXl</h3>
      <InlineCluster gutter="lgXl">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>xl</h3>
      <InlineCluster gutter="xl">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>xlXXl</h3>
      <InlineCluster gutter="xlXXl">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
      <h3>xxl</h3>
      <InlineCluster gutter="xxl">
        <Box widthLevel={5} />
        <Box widthLevel={0.5} />
        <Box />
        <Box widthLevel={4} />
      </InlineCluster>
    </>
  );
}
