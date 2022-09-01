import { JSX, mergeProps } from "solid-js";

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
  createPropsFromAccessors,
  omitProps,
} from "./typeUtils";

type MinItemWidth = CSSLength | number;

export interface ColumnDropBaseProps {
  gutter?: SpacingOptions;
  minItemWidth?: MinItemWidth;
  noStretchedColumns?: boolean;
}

function getSafeMinItemWidth(minItemWidth?: MinItemWidth) {
  if (minItemWidth === undefined) return "159px";
  if (typeof minItemWidth === "number") return `${minItemWidth}px`;
  return minItemWidth;
}

export type ColumnDropProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, ColumnDropBaseProps>;

export function ColumnDrop<T extends ValidConstructor = "div">(
  props: ColumnDropProps<T>
): JSX.Element {
  const theme = useTheme();

  const propsStyle = () =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        );

  const gutter = () =>
    `--gutter: ${getSpacingValue(props.gutter ?? "none", theme) ?? "0px"}`;

  const minItemWidth = () =>
    `--minItemWidth: ${getSafeMinItemWidth(props.minItemWidth)}`;

  const noStretchedColumns = () =>
    props.noStretchedColumns === true ? "no-stretched-columns" : "";

  const style = () => [propsStyle(), gutter(), minItemWidth()].join("; ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "gutter", "minItemWidth", "noStretchedColumns"]),
      createPropsFromAccessors({
        style,
        "data-bedrock-column-drop": noStretchedColumns,
      })
    ) as DynamicProps<T>
  );
}
