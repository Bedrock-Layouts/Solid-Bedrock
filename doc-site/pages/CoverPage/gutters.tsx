import { JSXElement } from "solid-js";

import { Cover } from "../../../packages/solid/src";

export function Gutter(): JSXElement {
  return (
    <>
      <h3>none</h3>
      <Cover
        minHeight={0}
        gutter="none"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>xxs</h3>
      <Cover
        minHeight={0}
        gutter="xxs"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>xs</h3>
      <Cover
        minHeight={0}
        gutter="xs"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>sm</h3>
      <Cover
        minHeight={0}
        gutter="sm"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>md</h3>
      <Cover
        minHeight={0}
        gutter="md"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>mdLg</h3>
      <Cover
        minHeight={0}
        gutter="mdLg"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>lg</h3>
      <Cover
        minHeight={0}
        gutter="lg"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>lgXl</h3>
      <Cover
        minHeight={0}
        gutter="lgXl"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>xl</h3>
      <Cover
        minHeight={0}
        gutter="xl"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>xlXXl</h3>
      <Cover
        minHeight={0}
        gutter="xlXXl"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
      <h3>xxl</h3>
      <Cover
        minHeight={0}
        gutter="xxl"
        top={<span>I am on top.</span>}
        bottom={<span>I am on bottom.</span>}
      >
        <div style="border: 1px solid black">I am a child.</div>
      </Cover>
    </>
  );
}
