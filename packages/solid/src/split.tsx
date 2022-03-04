import { Component, JSX, Match, Switch } from "solid-js";
import { styled } from "solid-styled-components";

import { createContainerQuery } from "./create-container-query";
import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";
import { Stack, StackProps } from "./stack";

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

export interface SplitProps extends StackProps, SplitBaseProps {
  switchAt?: number | CSSLength;
  as?: Component | keyof JSX.IntrinsicElements;
  ref?: (ref: HTMLElement) => void;
}

export const Split: Component<SplitProps> = (props) => {
  const maybePx =
    typeof props.switchAt === "string" ? toPX(props.switchAt) : props.switchAt;

  const widthToSwitchAt: number = maybePx && maybePx > -1 ? maybePx : 0; //zero is used to make the switchAt a noop
  console.log(widthToSwitchAt);
  const [shouldSwitch, nodeRef] = createContainerQuery(widthToSwitchAt);

  const combineRef = (ref: HTMLElement) => {
    nodeRef(ref);
    props.ref?.(ref);
  };

  return (
    <Switch>
      <Match when={shouldSwitch() === false}>
        <SplitBase
          as={props.as}
          ref={combineRef}
          fraction={props.fraction}
          {...props}
        />
      </Match>
      <Match when={shouldSwitch() === true}>
        <Stack as={props.as} ref={combineRef} {...props} />
      </Match>
    </Switch>
  );
};

/**
 * This module is adapted from https://github.com/mikolalysenko/to-px/blob/master/browser.js
 */

/* istanbul ignore next */
function parseUnit(str: string): [number, string] {
  str = String(str);
  const num = parseFloat(str);

  const [, unit] = str.match(/[\d.\-+]*\s*(.*)/) ?? ["", ""];

  return [num, unit];
}

/* istanbul ignore next */
function getPropertyInPX(element: Element, prop: string): number {
  const [value, units] = parseUnit(
    getComputedStyle(element).getPropertyValue(prop)
  );
  return value * (toPX(units, element) ?? 1);
}

function getSizeBrutal(unit: string, element: Element) {
  const testDIV = document.createElement("div");
  testDIV.style["height"] = "128" + unit;
  element.appendChild(testDIV);
  const size = getPropertyInPX(testDIV, "height") / 128;
  element.removeChild(testDIV);
  return size;
}

/* istanbul ignore next */
function toPX(str: string, element?: Element): number | null {
  if (!str) return null;

  //Logic forked from is-in-browser npm package
  /* istanbul ignore next */
  const isBrowser =
    typeof window === "object" &&
    typeof document === "object" &&
    document.nodeType === 9;

  /* istanbul ignore next */
  const PIXELS_PER_INCH: number = isBrowser
    ? getSizeBrutal("in", document.body)
    : 96; // 96

  const elementOrBody = element ?? document.body;
  const safeStr = (str ?? "px").trim().toLowerCase();

  switch (safeStr) {
    case "vmin":
    case "vmax":
    case "vh":
    case "vw":
    case "%":
      return null;
    case "ch":
    case "ex":
      return getSizeBrutal(safeStr, elementOrBody);
    case "em":
      return getPropertyInPX(elementOrBody, "font-size");
    case "rem":
      return getPropertyInPX(document.body, "font-size");
    case "in":
      return PIXELS_PER_INCH;
    case "cm":
      return PIXELS_PER_INCH / 2.54;
    case "mm":
      return PIXELS_PER_INCH / 25.4;
    case "pt":
      return PIXELS_PER_INCH / 72;
    case "pc":
      return PIXELS_PER_INCH / 6;
    case "px":
      return 1;
    default: {
      const [value, units] = parseUnit(safeStr);

      if (isNaN(value)) return null;

      if (!units) return value;

      const px = toPX(units, element);
      return typeof px === "number" ? value * px : null;
    }
  }
}
