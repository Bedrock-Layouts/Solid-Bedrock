import { JSX, JSXElement, mergeProps } from "solid-js";
import { styled } from "solid-styled-components";

import {
  BaseTheme,
  CSSLength,
  SpacingOptions,
  getSpacingValue,
  spacing,
} from "./spacing-constants";
import { useTheme } from "./theme-provider";
import createDynamic, {
  DynamicProps,
  HeadlessPropsWithRef,
  ValidConstructor,
  createPropsFromAccessors,
  omitProps,
} from "./typeUtils";

type PaddingObj =
  | { left: SpacingOptions }
  | { right: SpacingOptions }
  | { top: SpacingOptions }
  | { bottom: SpacingOptions }
  | { inlineStart: SpacingOptions }
  | { inlineEnd: SpacingOptions }
  | { blockStart: SpacingOptions }
  | { blockEnd: SpacingOptions };

type PaddingTypes =
  | SpacingOptions
  | PaddingObj
  | [SpacingOptions]
  | [SpacingOptions, SpacingOptions]
  | [SpacingOptions, SpacingOptions, SpacingOptions]
  | [SpacingOptions, SpacingOptions, SpacingOptions, SpacingOptions];

const validKeys = new Set([
  "left",
  "right",
  "top",
  "bottom",
  "inlineStart",
  "inlineEnd",
  "blockStart",
  "blockEnd",
]);

const keyToProperty = (key: string, val: string) => {
  type map = { [s: string]: string };
  const modernMap: map = {
    left: `padding-inline-start:${val};`,
    right: `padding-inline-end:${val};`,
    top: `padding-block-start:${val};`,
    bottom: `padding-block-end:${val};`,
    inlineStart: `padding-inline-start:${val};`,
    inlineEnd: `padding-inline-end:${val};`,
    blockStart: `padding-block-start:${val};`,
    blockEnd: `padding-block-end:${val};`,
  };

  return modernMap[key];
};

function paddingOrDefault<T extends Partial<BaseTheme>>(
  theme?: T
): (val: SpacingOptions) => CSSLength {
  return (key: SpacingOptions) => {
    const maybePadding = getSpacingValue(key, theme);
    return maybePadding ?? "0px";
  };
}

function paddingToString<T extends Partial<BaseTheme>>(
  theme?: T,
  padding?: PaddingTypes
) {
  if (Array.isArray(padding) && padding.length > 4) {
    throw new Error("padding arrays can only be 4 or less in length");
  }

  const validSpacings = new Set(Object.keys(theme?.spacing ?? spacing));

  const isValidPadding = () => {
    if (typeof padding === "string") return true;

    if (Array.isArray(padding)) {
      return padding.every((val) => validSpacings.has(val));
    }

    return (
      padding &&
      Object.keys(padding).every((key) => validKeys.has(key)) &&
      Object.values(padding).every((val) => validSpacings.has(val))
    );
  };

  if (!isValidPadding()) {
    console.error("Invalid padding Type");
  }

  const getPadding = paddingOrDefault(theme);

  return typeof padding === "object" && !Array.isArray(padding)
    ? Object.entries(padding).reduce(
        (acc, [key, val]) =>
          validKeys.has(key) ? acc + keyToProperty(key, getPadding(val)) : acc,
        ""
      )
    : padding !== undefined
    ? `padding: ${Array.from(Array.isArray(padding) ? padding : [padding])
        .map((pad: SpacingOptions) => getPadding(pad))
        .join(" ")};`
    : "";
}

export interface PadBoxBaseProps {
  padding: PaddingTypes;
}

export type PadBoxProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, PadBoxBaseProps>;

export function PadBox<T extends ValidConstructor = "div">(
  props: PadBoxProps<T>
): JSX.Element {
  const theme = useTheme();

  const propsStyle = () =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        );

  const padding = () => paddingToString(theme, props.padding);

  const style = () => [propsStyle(), padding()].join("; ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "padding"]),
      createPropsFromAccessors({
        style,
        "data-bedrock-padbox": () => "",
      })
    ) as DynamicProps<T>
  );
}
