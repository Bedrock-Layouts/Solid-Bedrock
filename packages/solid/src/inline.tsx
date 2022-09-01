import { JSX, mergeProps } from "solid-js";
import { styled } from "solid-styled-components";

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

type Stretch = "all" | "start" | "end" | 0 | 1 | 2 | 3 | 4;
type SwitchAt = string | number;
type MinItemWidth = number | CSSLength;

const justifyMap = {
  start: "justify:start",
  end: "justify:end",
  center: "justify:center",
} as const;

const alignMap = {
  start: "align:start",
  end: "align:end",
  center: "align:center",
  stretch: "align:stretch",
} as const;

function shouldUseSwitch(switchAt?: SwitchAt) {
  if (typeof switchAt === "number" && switchAt > -1) {
    return true;
  }

  if (typeof switchAt === "string" && typeof CSS !== undefined) {
    return CSS.supports(`height: ${switchAt}`);
  }

  return false;
}

export interface InlineBaseProps {
  stretch?: Stretch;
  switchAt?: SwitchAt;
  justify?: keyof typeof justifyMap;
  align?: keyof typeof alignMap;
  gutter?: SpacingOptions;
  minItemWidth?: MinItemWidth;
}

export type InlineProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, InlineBaseProps>;

export function Inline<T extends ValidConstructor = "div">(
  props: InlineProps<T>
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
    `--gutter: ${getSpacingValue(props.gutter ?? "none", theme) ?? "0px"};`;

  const minItemWidth = () =>
    props.minItemWidth
      ? `--minItemWidth: ${
          typeof props.minItemWidth === "string"
            ? props.minItemWidth
            : `${props.minItemWidth}px`
        };`
      : undefined;

  const switchAt = () =>
    shouldUseSwitch(props.switchAt)
      ? `--switchAt: ${
          typeof props.switchAt === "string"
            ? props.switchAt
            : `${props.switchAt}px`
        };`
      : undefined;

  const justify = () =>
    props.justify !== undefined ? justifyMap[props.justify] : undefined;

  const align = () =>
    props.align !== undefined ? alignMap[props.align] : undefined;

  const stretch = () =>
    props.stretch ? `stretch:${props.stretch}` : undefined;

  const style = () =>
    [propsStyle(), gutter(), switchAt(), minItemWidth()].join("; ");

  const attrAssesor = () =>
    [justify(), align(), stretch()].filter(Boolean).join(" ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, [
        "as",
        "gutter",
        "justify",
        "align",
        "stretch",
        "switchAt",
      ]),
      createPropsFromAccessors({
        style,
        "data-bedrock-inline": attrAssesor,
      })
    ) as DynamicProps<T>
  );
}
