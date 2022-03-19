import { JSXElement } from "solid-js";

import { Grid } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function MinItemWidth(): JSXElement {
  return (
    <Grid gutter="lg" minItemWidth="15rem">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Grid>
  );
}
