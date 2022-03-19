import { JSXElement } from "solid-js";

import { Inline } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Stretch(): JSXElement {
  return (
    <>
      <h3>start</h3>
      <Inline gutter="lg" stretch="start">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>end</h3>
      <Inline gutter="lg" stretch="end">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>all</h3>
      <Inline gutter="lg" stretch="all">
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
      <h3>2 index</h3>
      <Inline gutter="lg" stretch={2}>
        <Box />
        <Box />
        <Box />
        <Box />
      </Inline>
    </>
  );
}
