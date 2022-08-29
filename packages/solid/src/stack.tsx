import { JSX, createMemo, mergeProps } from "solid-js";

import { SpacingOptions, getSpacingValue } from "./spacing-constants";
import { useTheme } from "./theme-provider";
import createDynamic, {
  DynamicProps,
  HeadlessPropsWithRef,
  ValidConstructor,
  omitProps,
} from "./typeUtils";

export interface StackPropsBase {
  gutter?: SpacingOptions;
}

export type StackProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, StackPropsBase>;

export function Stack<T extends ValidConstructor = "div">(
  props: StackProps<T>
): JSX.Element {
  const theme = useTheme();
  const style = createMemo(() =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        )
  );

  const gutter = createMemo(
    () =>
      `--gutter: ${getSpacingValue(props.gutter ?? "none", theme) ?? "0px"};`
  );

  const fullStyle = createMemo(() => `${style()}; ${gutter()}`);

  const restProps = {
    get style() {
      return fullStyle();
    },
  };

  Object.defineProperty(restProps, "data-bedrock-stack", {
    get() {
      return "";
    },
    configurable: true,
    enumerable: true,
  });

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(omitProps(props, ["as", "gutter"]), restProps) as DynamicProps<T>
  );
}
