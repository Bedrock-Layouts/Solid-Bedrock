import { styled } from "solid-styled-components";

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

type SpacingOptions = keyof Spacing;

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

export interface StackProps {
  gutter?: SpacingOptions;
}

export const Stack = styled("div")<StackProps>`
  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0;
  }

  box-sizing: border-box;
  > * {
    margin: 0;
  }
  --gutter: ${(props) => spacing[props.gutter ?? "none"] ?? spacing.none};
  display: flex;
  flex-direction: column;

  gap: var(--gutter, 0px);
  align-content: start;

  & > [data-bedrock-column] {
    grid-column: span 1 / auto;
  }
`;

type MinItemWidth = number | CSSLength;
export interface GridProps {
  gutter?: SpacingOptions;
  minItemWidth?: MinItemWidth;
}

export const Grid = styled("div")<GridProps>`
  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0;
  }

  @property --minItemWidth {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 639px;
  }

  --gutter: ${(props) => spacing[props.gutter ?? "none"] ?? spacing.none};
  --minItemWidth: ${(props) =>
    typeof props.minItemWidth === "string"
      ? props.minItemWidth
      : `${props.minItemWidth ?? 0}px`};

  box-sizing: border-box;
  > * {
    margin: 0;
  }

  display: grid;
  gap: var(--gutter, 0px);

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--minItemWidth, 639px), 100%), 1fr)
  );
`;
