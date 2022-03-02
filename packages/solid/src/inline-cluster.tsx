import { styled } from "solid-styled-components";

import { SpacingOptions, getSpacingValue } from "./spacing-constants";

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
