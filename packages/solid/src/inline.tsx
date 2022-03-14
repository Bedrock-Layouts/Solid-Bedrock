import { styled } from "solid-styled-components";

import { InlineCluster, InlineClusterProps } from "./inline-cluster";

type Stretch = "all" | "start" | "end" | number;
type SwitchAt = string | number;

export interface InlineProps extends InlineClusterProps {
  stretch?: Stretch;
  switchAt?: SwitchAt;
}

function shouldUseSwitch(switchAt?: SwitchAt) {
  if (typeof switchAt === "number" && switchAt > -1) {
    return true;
  }

  if (typeof switchAt === "string" && typeof CSS !== undefined) {
    return CSS.supports(`height: ${switchAt}`);
  }

  return false;
}

export const Inline = styled(InlineCluster)<InlineProps>`
  @property --switchAt {
    syntax: "<length-percentage>";
    inherits: true;
    initial-value: 0;
  }

  flex-wrap: nowrap;
  ${(props) =>
    props.stretch === "all"
      ? `& > *  { 
        flex: 1;
      }`
      : props.stretch === "start"
      ? `& > :first-child { 
        flex: 1;
      }`
      : props.stretch === "end"
      ? `& > :last-child { 
        flex: 1;
      }`
      : typeof props.stretch === "number"
      ? `& > :nth-child(${props.stretch + 1}) { 
        flex: 1;
      }`
      : ""}

  ${(props) =>
    shouldUseSwitch(props.switchAt)
      ? `
          --switchAt: ${
            typeof props.switchAt === "string"
              ? props.switchAt
              : `${props.switchAt}px`
          };
          flex-wrap: wrap;
          > * {
            min-inline-size: fit-content;
            flex-basis: calc(
              (var(--switchAt) - (100% - var(--gutter, 0px))) * 999
            );
          }
        `
      : ""}
`;
