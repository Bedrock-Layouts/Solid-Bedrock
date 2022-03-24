import { JSXElement } from "solid-js";

import { Cover, CoverProps } from "../../../packages/solid/src";

export function Playground(props: CoverProps): JSXElement {
  return (
    <Cover
      {...props}
      top={<div>{props.top}</div>}
      bottom={<div>{props.bottom}</div>}
    >
      <div style="border:1px solid black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </div>
    </Cover>
  );
}
