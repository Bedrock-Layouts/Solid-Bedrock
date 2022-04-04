import { JSXElement } from "solid-js";

import imgSrc from "../../../assets/data-pic.jpg";
import { Frame } from "../../../packages/solid/src";

export function Position(): JSXElement {
  return (
    <Frame ratio="4/3" position="left top">
      <img src={imgSrc} alt="computer with data" />
    </Frame>
  );
}
