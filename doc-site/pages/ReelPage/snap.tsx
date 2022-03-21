import { JSXElement } from "solid-js";

import { Reel } from "../../../packages/solid/src";
import { Box } from "../../components/Box";
import { colors } from "./colors";

export function SnapType(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <p>scroll to the right to see the next item</p>
      <Reel snapType="none" gutter="lg">
        {colors.map((color) => {
          return <Box bgColor={color} style="min-width: 70%;"></Box>;
        })}
      </Reel>
      <h3>mandatory</h3>
      <p>scroll to the right to see the next item</p>
      <Reel snapType="mandatory" gutter="lg">
        {colors.map((color) => {
          return <Box bgColor={color} style="min-width: 70%;"></Box>;
        })}
      </Reel>
      <h3>proximity</h3>
      <p>scroll to the right to see the next item</p>
      <Reel snapType="proximity" gutter="lg">
        {colors.map((color) => {
          return <Box bgColor={color} style="min-width: 70%;"></Box>;
        })}
      </Reel>
    </>
  );
}
