import { JSXElement } from "solid-js";

import { PadBox } from "../../../packages/solid/src";

export function PaddingArray(): JSXElement {
  return (
    <>
      <h3>With 2 values</h3>
      <pre>["md", "xl"]</pre>
      <PadBox style="border: 1px solid black" padding={["md", "xl"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </PadBox>
      <h3>With 3 values</h3>
      <pre>["lg", "sm", "xl"]</pre>
      <PadBox style="border: 1px solid black" padding={["lg", "sm", "xl"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </PadBox>
      <h3>With 4 values</h3>
      <pre>["lg", "xs", "sm", "xl"]</pre>
      <PadBox
        style="border: 1px solid black"
        padding={["lg", "xs", "sm", "xl"]}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </PadBox>
    </>
  );
}
