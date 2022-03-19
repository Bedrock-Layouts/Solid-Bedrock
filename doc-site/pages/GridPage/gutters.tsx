import { JSXElement } from "solid-js";

import { Grid } from "../../../packages/solid/src";
import { Box } from "../../components/Box";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Grid gutter="none" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>xxs</h3>
      <Grid gutter="xxs" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>xs</h3>
      <Grid gutter="xs" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>sm</h3>
      <Grid gutter="sm" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>md</h3>
      <Grid gutter="md" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>mdLg</h3>
      <Grid gutter="mdLg" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>lg</h3>
      <Grid gutter="lg" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>lgXl</h3>
      <Grid gutter="lgXl" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>xl</h3>
      <Grid gutter="xl" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>xlXXl</h3>
      <Grid gutter="xlXXl" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
      <h3>xxl</h3>
      <Grid gutter="xxl" minItemWidth="25rem">
        <Box />
        <Box />
        <Box />
      </Grid>
    </>
  );
}
