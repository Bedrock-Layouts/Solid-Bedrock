import { Component, JSX, Match, Switch } from "solid-js";
import { styled } from "solid-styled-components";

import { createContainerQuery } from "./create-container-query";
import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";
import { Stack, StackProps } from "./stack";
import { toPX } from "./toPx";

type FractionTypes =
  | "auto-start"
  | "auto-end"
  | "1/4"
  | "1/3"
  | "1/2"
  | "2/3"
  | "3/4";

type Fractions = {
  [key in FractionTypes]: string;
};

const fractions: Fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": `auto 1fr`,
  "auto-end": `1fr auto`,
};

interface SplitBaseProps {
  gutter?: SpacingOptions;
  fraction?: FractionTypes;
}

const SplitBase = styled.div<SplitBaseProps>`
    box-sizing: border-box;
    > * {
      margin: 0;
    }
    
    --gutter: ${(props) =>
      props.gutter
        ? getSpacingValue(props.gutter, props.theme) ?? "0px"
        : "0px"};
  
    display: grid;
    gap: var(--gutter, 0px);
    grid-template-columns: ${({ fraction = "1/2" }) =>
      fractions[fraction] ?? fractions["1/2"]}};
  `;

type RefFunction = (ref: HTMLElement) => void;
export interface SplitProps extends StackProps, SplitBaseProps {
  switchAt?: number | CSSLength;
  as?: Component | keyof JSX.IntrinsicElements;
  ref?: RefFunction;
}

export const Split: Component<SplitProps> = (props) => {
  const maybePx =
    typeof props.switchAt === "string" ? toPX(props.switchAt) : props.switchAt;

  const widthToSwitchAt: number = maybePx && maybePx > -1 ? maybePx : 0; //zero is used to make the switchAt a noop

  const [shouldSwitch, nodeRef] = createContainerQuery(
    widthToSwitchAt,
    props.ref as RefFunction
  );

  return (
    <Switch>
      <Match when={shouldSwitch() === false}>
        <SplitBase fraction={props.fraction} {...props} ref={nodeRef} />
      </Match>
      <Match when={shouldSwitch() === true}>
        <Stack {...props} ref={nodeRef} />
      </Match>
    </Switch>
  );
};
