import { JSXElement } from "solid-js";

import { PadBox } from "../../../packages/solid/src";

export function PaddingObject(): JSXElement {
  return (
    <>
      <h3>With an object of values</h3>
      <pre>
        <code>
          {JSON.stringify(
            { top: "lg", inlineEnd: "xl", blockEnd: "sm" },
            null,
            3
          )}
        </code>
      </pre>
      <PadBox
        style="border: 1px solid black"
        padding={{ top: "lg", inlineEnd: "xl", blockEnd: "sm" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consequuntur corrupti beatae commodi vitae, perspiciatis totam provident
        architecto doloribus aperiam sapiente, incidunt nihil suscipit
        voluptatibus tempore est dolor! Iusto, vero.
      </PadBox>
    </>
  );
}
