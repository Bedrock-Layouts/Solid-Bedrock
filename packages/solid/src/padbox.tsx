import { styled } from "solid-styled-components";

import {
  BaseTheme,
  CSSLength,
  SpacingOptions,
  getSpacingValue,
  spacing,
} from "./spacing-constants";

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

export interface PadBoxProps {
  padding: PaddingTypes;
}

export const PadBox = styled.div<PadBoxProps>`
  box-sizing: border-box;
  ${(props) => paddingToString(props.theme, props.padding)}
`;
