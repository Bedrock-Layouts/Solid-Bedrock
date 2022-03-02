import { styled } from "solid-styled-components";

import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";

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
