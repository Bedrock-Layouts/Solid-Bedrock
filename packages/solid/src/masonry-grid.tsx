import {
  init,
  registerCallback,
} from "@bedrock-layout/register-resize-callback";
import {
  Component,
  JSXElement,
  children,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { ResolvedChildren } from "solid-js/types/reactive/signal";

import { Grid, GridProps } from "./grid";
import { SpacingOptions, getSpacingValue } from "./spacing-constants";
import { useTheme } from "./theme-provider";
import { toPX } from "./toPx";
import { convertToMaybe } from "./typeUtils";

const MIN_HEIGHT = 1;

//Logic forked from is-in-browser npm package
/* istanbul ignore next */
const isBrowser =
  typeof window === "object" &&
  typeof document === "object" &&
  document.nodeType === 9;

const Resizer: Component<{ gutter?: SpacingOptions; children?: JSXElement }> = (
  props
) => {
  const [rowSpan, setRowSpan] = createSignal(1);
  const [node, nodeRef] = createSignal<HTMLElement>();

  const theme = useTheme();

  onMount(() => {
    init();
  });

  createEffect(() => {
    const ref = convertToMaybe(node());
    if (ref === undefined) return;

    const cleanup = registerCallback(ref, ({ target }) => {
      setRowSpan(1);
      const gapString = props.gutter
        ? getSpacingValue(props.gutter, theme) ?? "1px"
        : "1px";

      const maybeGap = isBrowser ? toPX(gapString, target) : undefined;

      const gap = Math.max(maybeGap ?? MIN_HEIGHT, MIN_HEIGHT);

      const [child] = Array.from(target.children);
      const height = 1 + Math.min(target.scrollHeight, child.scrollHeight);

      const rowHeight = Math.max(Math.ceil(height / gap), MIN_HEIGHT);

      setRowSpan(rowHeight);
    });

    onCleanup(cleanup);
  });

  return (
    <div style={`grid-row: span ${rowSpan()};`} ref={nodeRef}>
      {props.children}
    </div>
  );
};

export const MasonryGrid: Component<GridProps> = (props) => {
  const childrenMemo = children(() => props.children);
  const emptyResolvedChildren: ResolvedChildren = [];
  const wrappedChildren = emptyResolvedChildren
    .concat(childrenMemo())
    .filter(Boolean)
    .map((child) => (
      <Resizer gutter={props.gutter}>{child as JSXElement}</Resizer>
    ));
  return (
    <Grid style="grid-template-rows: 1px;" {...props}>
      {wrappedChildren}
    </Grid>
  );
};
