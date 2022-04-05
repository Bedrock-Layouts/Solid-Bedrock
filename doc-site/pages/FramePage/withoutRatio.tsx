import { JSXElement } from "solid-js";

import imgSrc from "../../../assets/data-pic.jpg";
import { Frame } from "../../../packages/solid/src";

export function WithoutRatio(): JSXElement {
  return (
    <Frame style={{ height: "50vh", width: "50%" }}>
      <img src={imgSrc} alt="computer with data" />
    </Frame>
  );
}
