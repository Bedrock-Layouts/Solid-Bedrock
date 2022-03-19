import { JSXElement } from "solid-js";

import { Grid, GridProps } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Playground(props: GridProps): JSXElement {
  return (
    <Grid {...props}>
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
