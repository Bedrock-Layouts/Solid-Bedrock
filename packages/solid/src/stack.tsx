import { styled } from "solid-styled-components";

import { SpacingOptions, getSpacingValue } from "./spacing-constants";

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
    getSpacingValue(props.gutter ?? "none", props.theme) ?? "0px"};
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
