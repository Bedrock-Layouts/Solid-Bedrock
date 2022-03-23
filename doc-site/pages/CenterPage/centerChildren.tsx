import { JSXElement } from "solid-js";

import { Center } from "../../../packages/solid/src";

export function CenterChildren(): JSXElement {
  return (
    <Center
      centerChildren
      style={{
        border: "1px solid black",
      }}
    >
      <div
        style={{
          width: "75%",
        }}
      >
        Nulla luctus nisl nec dui auctor volutpat. Phasellus condimentum
        elementum enim in pharetra. Curabitur eget urna cursus, imperdiet leo
        eu, elementum leo. Proin laoreet eleifend nisl ut iaculis. Ut dictum est
        vitae rutrum elementum. Donec dictum ex ac nibh auctor semper. Phasellus
        sed rhoncus arcu, eu consectetur ipsum. Ut dictum a elit at
        sollicitudin. Quisque sed augue molestie, auctor purus quis, luctus
        ipsum. Donec ultrices vel nisi vehicula facilisis. Vestibulum cursus
        nisi tellus, sit amet sagittis nisl luctus ut.
      </div>
    </Center>
  );
}
