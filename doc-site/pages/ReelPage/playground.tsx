import { JSXElement } from "solid-js";

import { Reel, ReelProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";
import { colors } from "./colors";

export function Playground(props: ReelProps): JSXElement {
  return (
    <Reel {...props}>
      {colors.map((color) => {
        return <Box bgColor={color} style="min-width:60%" />;
      })}
    </Reel>
  );
}
