import {
  init,
  registerCallback,
} from "@bedrock-layout/register-resize-callback";
import {
  Accessor,
  Setter,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

export function createContainerQuery<T extends Element>(
  width = 1,
  maxWidth?: number
): [Accessor<boolean>, Setter<T | undefined>] {
  if (maxWidth !== undefined && maxWidth <= width) {
    throw new Error(
      `The second width value, ${maxWidth}, is not larger than ${width}. Please provide a value greater than first width value`
    );
  }

  const [matches, setMatch] = createSignal(false);
  const [node, nodeRef] = createSignal<T>();

  onMount(() => {
    init();
  });

  createEffect(() => {
    const ref = node();
    if (ref === undefined || ref === null) return;

    const cleanup = registerCallback(ref, (entry) => {
      //fix typings
      const nodeWidth =
        (entry.borderBoxSize as unknown as ResizeObserverSize)?.inlineSize ??
        entry.contentRect.width;

      //nodeWidth can be zero when it is switching from one node to another.  This will ignore that.
      if (nodeWidth > 0) {
        const newMatch =
          maxWidth === undefined
            ? nodeWidth <= width
            : nodeWidth >= width && nodeWidth <= maxWidth;

        setMatch(newMatch);
      }
    });

    onCleanup(cleanup);
  });

  return [matches, nodeRef];
}
