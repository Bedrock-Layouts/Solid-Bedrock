import { JSX, createEffect, createMemo, mergeProps } from "solid-js";

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

  const style = () =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        );

  const gutter = createMemo(() => {
    return `--gutter: ${
      getSpacingValue(props.gutter ?? "none", theme) ?? "0px"
    };`;
  });

  const minItemWidth = createMemo(
    () => `--minItemWidth: ${getSafeMinItemWidth(props.minItemWidth)};`
  );

  const noStretchedColumns = createMemo(() =>
    props.noStretchedColumns === true ? "no-stretched-columns" : ""
  );

  const fullStyle = createMemo(
    () => `${style()}; ${gutter()} ${minItemWidth()}`
  );

  const restProps = {
    get style() {
      return fullStyle();
    },
  };

  Object.defineProperty(restProps, "data-bedrock-column-drop", {
    get() {
      return noStretchedColumns();
    },
    configurable: true,
    enumerable: true,
  });

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "gutter", "minItemWidth", "noStretchedColumns"]),
      restProps
    ) as DynamicProps<T>
  );
}
