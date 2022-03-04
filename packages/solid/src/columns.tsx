import { Component, JSX, Match, Switch } from "solid-js";
import { styled } from "solid-styled-components";

import { createContainerQuery } from "./create-container-query";
import { SpacingOptions, getSpacingValue } from "./spacing-constants";
import { Stack, StackProps } from "./stack";
import { toPX } from "./toPx";

interface ColumnsBaseProps {
  gutter?: SpacingOptions;
  columns?: number;
  dense?: boolean;
}

const ColumnsBase = styled.div<ColumnsBaseProps>`
  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0;
  }

  @property --columns {
    syntax: "<number>";
    inherits: true;
    initial-value: 1;
  }
  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  --columns: ${(props) =>
    props.columns && props.columns > 0 ? props.columns : 1};

  box-sizing: border-box;
  > * {
    margin: 0;
  }

  display: grid;
  grid-template-columns: repeat(var(--columns, 1), 1fr);
  gap: var(--gutter, 0px);
  grid-auto-flow: row ${({ dense = false }) => (dense === true ? "dense" : "")};
`;

export interface ColumnsProps extends StackProps, ColumnsBaseProps {
  switchAt?: number | string;
  as?: Component | keyof JSX.IntrinsicElements;
  ref?: (ref: HTMLElement) => void;
}

export const Columns: Component<ColumnsProps> = (props) => {
  const maybePx =
    typeof props.switchAt === "string" ? toPX(props.switchAt) : props.switchAt;

  console.log(maybePx);

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
        <ColumnsBase
          as={props.as}
          ref={combineRef}
          columns={props.columns}
          {...props}
        />
      </Match>
      <Match when={shouldSwitch() === true}>
        <Stack as={props.as} ref={combineRef} {...props} />
      </Match>
    </Switch>
  );
};

export interface ColumnProps {
  colSpan?: number;
  offsetStart?: number;
  offsetEnd?: number;
}

const safeSpan = (span: unknown) => {
  return typeof span === "number" ? span : 1;
};

/**
 * ColumnsProps passed twice to make propTypes work.
 *
 * span is remaped to colSpan due to span being an attribute that gets
 * passed to the underlying element.  This can cause issues with Grid layout.
 *
 * In a future breaking change, colSpan should be the public API.
 * */
export const Column = styled.div<ColumnProps>`
  @property --span {
    syntax: "<number>";
    inherits: true;
    initial-value: 1;
  }

  --span: ${(props) => safeSpan(props.colSpan)};

  grid-column: span min(var(--span, 1), var(--columns, 1));

  ${(props) =>
    props.offsetStart || props.offsetEnd
      ? `
    display: contents; 
    > * {
        grid-column: span min(var(--span, 1), var(--columns, 1));
    }
    `
      : ""}

  ${(props) =>
    props.offsetStart && props.offsetStart > 0
      ? `
  &::before {
    content: "";
    grid-column: span min(${props.offsetStart}, var(--columns, 1));
  }
  `
      : ""}

${(props) =>
    props.offsetEnd && props.offsetEnd > 0
      ? `
  &::after {
    content: "";
    grid-column: span min(${props.offsetEnd}, var(--columns, 1));
  }
  `
      : ""}
`;
