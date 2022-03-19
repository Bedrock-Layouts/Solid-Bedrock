import { JSXElement } from "solid-js";

import { InlineCluster, InlineClusterProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: InlineClusterProps): JSXElement {
  return (
    <InlineCluster {...props}>
      <Box style="height:200px" widthLevel={5} />
      <Box widthLevel={0.5} />
      <Box />
      <Box widthLevel={4} />
    </InlineCluster>
  );
}
