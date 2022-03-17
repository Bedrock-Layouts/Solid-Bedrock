import { plugins, format as prettyFormat } from "pretty-format";
import { JSX } from "solid-js";

import { PadBox, Stack } from "../../packages/solid/src";
import { CodeBlock } from "../components/CodeBlock";

export function Story(props: JSX.DOMAttributes<"div">): JSX.Element {
  const code: string = [props.children]
    .flat()
    .map((child) =>
      prettyFormat(child, {
        plugins: [plugins.DOMElement],
        printFunctionName: false,
      })
    )
    .join("\n");

  return (
    <Stack gutter="sm">
      <Stack
        as={PadBox}
        padding="lg"
        gutter="mdLg"
        style="border:1px solid black"
        {...props}
      />
      <CodeBlock code={code} />
    </Stack>
  );
}
