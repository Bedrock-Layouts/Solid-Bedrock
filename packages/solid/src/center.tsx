import { css, styled } from "solid-styled-components";

import { CSSLength } from "./spacing-constants";

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

export const Center = styled.div<CenterProps>`
  @property --maxWidth {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 100%;
  }

  --maxWidth: ${(props) => getSafeMaxWidth(props.maxWidth)};

  box-sizing: content-box;

  && {
    margin-inline-start: auto;
    margin-inline-end: auto;
    margin-inline: auto;
  }

  max-inline-size: var(--maxWidth, 100%);

  ${(props) =>
    props.centerChildren
      ? `
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : ""}

  ${(props) =>
    props.centerText
      ? `
          text-align: center;
        `
      : ""}
`;
