import { JSXElement } from "solid-js";

import { PadBox, PadBoxProps } from "../../../packages/solid/src";

export function Playground(props: PadBoxProps): JSXElement {
  return (
    <PadBox style="border: 1px solid black" {...props}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur
      corrupti beatae commodi vitae, perspiciatis totam provident architecto
      doloribus aperiam sapiente, incidunt nihil suscipit voluptatibus tempore
      est dolor! Iusto, vero.
    </PadBox>
  );
}
