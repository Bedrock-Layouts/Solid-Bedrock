import { Component, JSX, JSXElement } from "solid-js";
import { styled } from "solid-styled-components";

import {
  CSSLength,
  SpacingOptions,
  checkIsCSSLength,
  getSpacingValue,
} from "./spacing-constants";

type MinHeight = CSSLength | number;

interface CoverWrapperProps {
  gutter?: SpacingOptions;
  minHeight?: MinHeight;
  stretchContent?: boolean;
}

export interface CoverProps extends CoverWrapperProps {
  top?: JSXElement;
  bottom?: JSXElement;
  as?: Component | keyof JSX.IntrinsicElements;
}

function getSafeMinHeight(minHeight?: MinHeight) {
  if (typeof minHeight === "number") return `${minHeight}px`;

  return minHeight && checkIsCSSLength(minHeight) ? minHeight : "100vh";
}

const CoverWrapper = styled.div<CoverProps>`
  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0;
  }

  @property --minHeight {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 100vh;
  }

  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  --minHeight: ${(props) => getSafeMinHeight(props.minHeight)};

  > * {
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  gap: var(--gutter, 0px);

  min-block-size: var(--minHeight, 100vh);

  > [data-bedrock-cover-centered] {
    margin-block-start: auto;
    margin-block-end: auto;

    ${({ stretchContent }) =>
      stretchContent === true
        ? `
            flex: 1;
            display: flex;
            flex-direction: column;
            > * {
              flex: 1;
            }
          `
        : ""};
  }
`;

export const Cover: Component<CoverProps> = (props) => {
  return (
    <CoverWrapper {...props}>
      {props.top}
      <div data-bedrock-cover-centered>{props.children}</div>
      {props.bottom}
    </CoverWrapper>
  );
};
