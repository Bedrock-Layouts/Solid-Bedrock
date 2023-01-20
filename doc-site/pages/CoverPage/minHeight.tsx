import { JSXElement } from "solid-js";

import { Cover } from "../../../packages/solid/src";

export function MinHeight(): JSXElement {
  return (
    <Cover minHeight="500px" gutter="size1">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </div>
    </Cover>
  );
}
