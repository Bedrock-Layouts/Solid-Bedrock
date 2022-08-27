import { JSX, createMemo, mergeProps } from "solid-js";

import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";
import { useTheme } from "./theme-provider";
import createDynamic, {
  DynamicProps,
  HeadlessPropsWithRef,
  ValidConstructor,
  omitProps,
} from "./typeUtils";

type MinItemWidth = number | CSSLength;
export interface GridBaseProps {
  gutter?: SpacingOptions;
  minItemWidth?: MinItemWidth;
}

export type GridProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, GridBaseProps>;

export function Grid<T extends ValidConstructor = "div">(
  props: GridProps<T>
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

  const minItemWidth = createMemo(
    () =>
      `--minItemWidth: ${
        typeof props.minItemWidth === "string"
          ? props.minItemWidth
          : `${props.minItemWidth ?? 0}px`
      };`
  );

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(omitProps(props, ["as", "gutter", "minItemWidth"]), {
      style: `${style()}; ${gutter()} ${minItemWidth()}`,
      "data-bedrock-grid": "",
    }) as DynamicProps<T>
  );
}
