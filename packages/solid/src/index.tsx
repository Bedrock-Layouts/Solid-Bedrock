import { DefaultTheme, css, styled } from "solid-styled-components";

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

type SpacingOptions = ThemeOrDefaultSpace<DefaultTheme>;

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

function getSafeMaxWidth(maxWidth?: MaxWidth) {
  if (maxWidth === undefined) return "100%";
  if (typeof maxWidth === "number") return `${maxWidth}px`;
  return maxWidth;
}

type MaxWidth = number | CSSLength;

export interface CenterProps {
  maxWidth?: MaxWidth;
  centerText?: boolean;
  centerChildren?: boolean;
}

export const Center = styled("div")<CenterProps>`
  @property --maxWidth {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 100%;
  }

  --maxWidth: ${(props) => getSafeMaxWidth(props.maxWidth)};

  box-sizing: content-box;

  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-inline: auto;

  max-inline-size: var(--maxWidth, 100%);

  ${(props) =>
    props.centerChildren
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : ""}

  ${(props) =>
    props.centerText
      ? css`
          text-align: center;
        `
      : ""}
`;

type Basis = CSSLength | number;

export interface ColumnDropProps {
  gutter?: SpacingOptions;
  basis?: Basis;
  noStretchedColumns?: boolean;
}

function getSafeBasis(basis?: Basis) {
  if (basis === undefined) return "100%";
  if (typeof basis === "number") return `${basis}px`;
  return basis;
}

export const ColumnDrop = styled("div")<ColumnDropProps>`
  @property --basis {
    syntax: "<length-percentage>";
    inherits: true;
    initial-value: 100%;
  }

  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0px;
  }

  --basis: ${(props) => getSafeBasis(props.basis)};
  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  box-sizing: border-box;
  > * {
    margin: 0;
    flex-basis: var(--basis, 100%);
    flex-grow: ${(props) => (props.noStretchedColumns ? "0" : "1")};
    flex-shrink: 1;
  }

  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, 0px);
`;

type RatioString = `${number}/${number}` | `${number} / ${number}`;

type Ratio = [number, number] | RatioString;
export interface FrameProps {
  ratio?: Ratio;
  position?: string;
}

function checkIsRatio(ratio: unknown): ratio is Ratio {
  const isCorrectArray =
    Array.isArray(ratio) && ratio.length === 2 && ratio.every(Number.isFinite);
  return (
    isCorrectArray ||
    (typeof ratio === "string" &&
      /^\d{1,1000} {0,1}\/ {0,1}\d{1,1000}$/.test(ratio))
  );
}

function getRatioString(ratio: Ratio): RatioString {
  return Array.isArray(ratio) ? (ratio.join("/") as RatioString) : ratio;
}

function getSafeRatio(ratio: unknown): RatioString | undefined {
  const isRatio = checkIsRatio(ratio);

  return isRatio ? getRatioString(ratio) : undefined;
}

export const Frame = styled.div<FrameProps>`
  box-sizing: border-box;
  display: block;
  inline-size: 100%;
  position: relative;
  overflow: hidden;

  ${(props) => {
    const maybeRatio = getSafeRatio(props.ratio);
    if (maybeRatio) {
      return css`
        aspect-ratio: ${maybeRatio};
      `;
    }
    return "";
  }};

  > * {
    position: absolute;

    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;

    inset-block: 0;
    inset-inline: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > :is(img, video) {
    inline-size: 100%;
    block-size: 100%;
    size: 100%;

    object-fit: cover;
    object-position: ${(props) =>
      typeof props.position === "string" ? props.position : "50%"};
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

  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};
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

const justifyMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
} as const;

const alignMap = {
  ...justifyMap,
  stretch: "stretch",
} as const;

export interface InlineClusterProps {
  justify?: keyof typeof justifyMap;
  align?: keyof typeof alignMap;
  gutter: SpacingOptions;
}

export const InlineCluster = styled.div<InlineClusterProps>`
  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  box-sizing: border-box;
  > * {
    margin: 0;
  }

  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, 0px);

  justify-content: ${(props) =>
    typeof props.justify !== "undefined" && justifyMap[props.justify]
      ? justifyMap[props.justify]
      : justifyMap.start};

  align-items: ${(props) =>
    typeof props.align !== "undefined" && alignMap[props.align]
      ? alignMap[props.align]
      : alignMap.start};
`;

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

function paddingOrDefault<T extends Partial<BaseTheme>>(theme?: T) {
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
    : padding
    ? `padding: ${Array.from(Array.isArray(padding) ? padding : [padding])
        .map((pad: SpacingOptions) => getPadding(pad))
        .join(" ")}`
    : "";
}

export interface PadBoxProps {
  padding: PaddingTypes;
}

export const PadBox = styled.div<PadBoxProps>`
  box-sizing: border-box;
  ${(props) => paddingToString(props.theme, props.padding)}
`;

export interface ReelProps {
  snapType?: "none" | "proximity" | "mandatory";
  gutter: SpacingOptions;
}

export const Reel = styled.div<ReelProps>`
  box-sizing: border-box;
  > * {
    margin: 0;
    scroll-snap-align: start;
  }

  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  display: flex;
  gap: var(--gutter, 0px);

  overflow-x: scroll;

  scroll-snap-type: ${({ snapType = "none" }) => {
    switch (snapType) {
      case "none": {
        return "none";
      }
      case "proximity": {
        return "x proximity";
      }
      case "mandatory": {
        return "x mandatory";
      }
      default: {
        return "none";
      }
    }
  }};
`;

export interface StackProps {
  gutter?: SpacingOptions;
}

export const Stack = styled("div")<StackProps>`
  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0;
  }

  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};
  box-sizing: border-box;
  > * {
    margin: 0;
  }
  display: flex;
  flex-direction: column;

  gap: var(--gutter, 0px);
  align-content: start;

  & > [data-bedrock-column] {
    grid-column: span 1 / auto;
  }
`;
