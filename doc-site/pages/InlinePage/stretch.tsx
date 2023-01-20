import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Stretch(): JSXElement {
  return (
    <>
      <h3>start</h3>
      <Inline gutter="size3" stretch="start">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>end</h3>
      <Inline gutter="size3" stretch="end">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>all</h3>
      <Inline gutter="size3" stretch="all">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>2 index</h3>
      <Inline gutter="size3" stretch={2}>
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
    </>
  );
}
