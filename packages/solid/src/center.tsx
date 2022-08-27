import { JSX, createMemo, mergeProps } from "solid-js";

import { CSSLength } from "./spacing-constants";
import createDynamic, {
  DynamicProps,
  HeadlessPropsWithRef,
  ValidConstructor,
  omitProps,
} from "./typeUtils";

function getSafeMaxWidth(maxWidth?: MaxWidth) {
  if (maxWidth === undefined) return "100%";
  if (typeof maxWidth === "number") return `${maxWidth}px`;
  return maxWidth;
}

type MaxWidth = number | CSSLength;

export interface CenterBaseProps {
  maxWidth?: MaxWidth;
  centerText?: boolean;
  centerChildren?: boolean;
}

export type CenterProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, CenterBaseProps>;

export function Center<T extends ValidConstructor = "div">(
  props: CenterProps<T>
): JSX.Element {
  const style = createMemo(() =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        )
  );

  const maxWidth = createMemo(
    () => `--maxWidth: ${getSafeMaxWidth(props.maxWidth)};`
  );

  const centerText = createMemo(() => (props.centerText ? "center-text" : ""));

  const centerChildren = createMemo(() =>
    props.centerChildren ? "center-children" : ""
  );

  const attrString = createMemo(() =>
    [centerText(), centerChildren()].filter(Boolean).join(" ")
  );

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "maxWidth", "centerText", "centerChildren"]),
      {
        style: `${style()}; ${maxWidth()}`,
        "data-bedrock-center": attrString(),
      }
    ) as DynamicProps<T>
  );
}
