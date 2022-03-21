import { styled } from "solid-styled-components";

import { SpacingOptions, getSpacingValue } from "./spacing-constants";

export interface ReelProps {
  snapType?: "none" | "proximity" | "mandatory";
  gutter?: SpacingOptions;
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

  scroll-snap-type: ${(props) => {
    switch (props.snapType) {
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
