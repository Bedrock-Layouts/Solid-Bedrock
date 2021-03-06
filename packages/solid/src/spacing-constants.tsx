import type { DefaultTheme } from "solid-styled-components";

type LowercaseCharacter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
type AllCharacter = LowercaseCharacter | Uppercase<LowercaseCharacter>;
type NonEmptyString = `${AllCharacter}${string}`;

type CSSCustomProperties = `var(--${NonEmptyString})`;

type LengthUnit =
  | "vmin"
  | "vmax"
  | "vh"
  | "vw"
  | "%"
  | "ch"
  | "ex"
  | "em"
  | "rem"
  | "in"
  | "cm"
  | "mm"
  | "pt"
  | "pc"
  | "px";

export type CSSLength = `${number}${LengthUnit}` | CSSCustomProperties;

export function checkIsCSSLength(str: string): str is CSSLength {
  if (typeof str !== "string") return false;

  return [
    /^[0-9]{0,10000}\.?[0-9]{1,10000}(vmin|vmax|vh|vw|%|ch|ex|em|rem|in|cm|mm|pt|pc|px)$/,
    /^var\(--\D{1,100}\)$/,
  ].some((regex) => regex.test(str));
}
export interface Spacing {
  none: CSSLength;
  xxs: CSSLength;
  xs: CSSLength;
  sm: CSSLength;
  md: CSSLength;
  mdLg: CSSLength;
  lg: CSSLength;
  lgXl: CSSLength;
  xl: CSSLength;
  xlXXl: CSSLength;
  xxl: CSSLength;
}

export const spacing: Spacing = {
  none: "0px",
  xxs: "0.0625rem",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  mdLg: "0.75rem",
  lg: "1rem",
  lgXl: "1.5rem",
  xl: "2rem",
  xlXXl: "3rem",
  xxl: "4rem",
};

export type BaseTheme = Record<string, CSSLength | string | number>;

type ThemeOrDefaultSpace<T> = T extends {
  space: BaseTheme;
}
  ? T["space"]
  : keyof Spacing;

export type SpacingOptions = ThemeOrDefaultSpace<DefaultTheme>;

function fromEntries<T>(entries: [s: string, value: T][]): Record<string, T> {
  return entries.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}

type MaybeValue = CSSLength | undefined;

type GetSpacingValue = (
  spacingKey: SpacingOptions,
  theme?: Partial<BaseTheme>
) => MaybeValue;

export const getSpacingValue: GetSpacingValue = (spacingKey, theme) => {
  const maybeSpaceingOrDefault = theme?.space ?? theme?.spacing ?? spacing;

  const safeSpacings = fromEntries(
    Object.entries(maybeSpaceingOrDefault).map(([spaceKey, value]) => [
      spaceKey,
      typeof value === "number" ? `${value}px` : value,
    ])
  );

  const spacingVal = safeSpacings[spacingKey];

  const isCSSLength = checkIsCSSLength(spacingVal);

  return isCSSLength ? spacingVal : undefined;
};
