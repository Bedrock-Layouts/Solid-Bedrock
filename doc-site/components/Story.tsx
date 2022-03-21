import dedent from "dedent";
import { JSX } from "solid-js";

import { PadBox, Stack } from "../../packages/solid/src";
import { CodeBlock } from "../components/CodeBlock";

export function Story(props: {
  children: JSX.Element;
  code: string | ((props: { dedent: (literals: string) => string }) => string);
}): JSX.Element {
  const finalCode =
    typeof props.code === "string" ? props.code : props.code({ dedent });

  return (
    <Stack gutter="sm">
      <Stack
        as={PadBox}
        padding="lg"
        gutter="mdLg"
        style="border:1px solid black"
      >
        {props.children}
      </Stack>
      <CodeBlock code={finalCode} />
    </Stack>
  );
}
