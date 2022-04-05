import { JSXElement } from "solid-js";

import imgSrc from "../../../assets/data-pic.jpg";
import { Frame, FrameProps } from "../../../packages/solid/src";

export function Playground(props: FrameProps): JSXElement {
  return (
    <Frame {...props}>
      <img src={imgSrc} alt="computer with data" />
    </Frame>
  );
}
