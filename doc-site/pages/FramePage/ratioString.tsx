import { JSXElement } from "solid-js";

import imgSrc from "../../../assets/data-pic.jpg";
import { Frame } from "../../../packages/solid/src";

export function RatioString(): JSXElement {
  return (
    <Frame ratio="16/9">
      <img src={imgSrc} alt="computer with data" />
    </Frame>
  );
}
