import { JSXElement } from "solid-js";

import { Reel } from "../../../packages/solid/src";
import { Box } from "../../components/Box";
import { colors } from "./colors";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Reel snapType="none" gutter="none">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>xxs</h3>
      <Reel snapType="none" gutter="xxs">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>xs</h3>
      <Reel snapType="none" gutter="xs">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>sm</h3>
      <Reel snapType="none" gutter="sm">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>md</h3>
      <Reel snapType="none" gutter="md">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>mdLg</h3>
      <Reel snapType="none" gutter="mdLg">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>lg</h3>
      <Reel snapType="none" gutter="lg">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>lgXl</h3>
      <Reel snapType="none" gutter="lgXl">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>xl</h3>
      <Reel snapType="none" gutter="xl">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>xlXXl</h3>
      <Reel snapType="none" gutter="xlXXl">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
      <h3>xxl</h3>
      <Reel snapType="none" gutter="xxl">
        {colors.map((color) => {
          return <Box bgColor={color} />;
        })}
      </Reel>
    </>
  );
}
