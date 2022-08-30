import {
  Component,
  JSX,
  Match,
  Switch,
  mergeProps,
  splitProps,
} from "solid-js";

import { createContainerQuery } from "./create-container-query";
import { SpacingOptions, getSpacingValue } from "./spacing-constants";
import { Stack, StackProps } from "./stack";
import { useTheme } from "./theme-provider";
import { toPX } from "./toPx";
import createDynamic, {
  DynamicProps,
  HeadlessPropsWithRef,
  ValidConstructor,
  createPropsFromAccessors,
  omitProps,
} from "./typeUtils";

interface ColumnsBase {
  gutter?: SpacingOptions;
  columns?: number;
  dense?: boolean;
}

export type ColumnsBaseProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, ColumnsBase>;

export function ColumnsBase<T extends ValidConstructor = "div">(
  props: ColumnsBaseProps<T>
): JSX.Element {
  const theme = useTheme();
  const propsStyle = () =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        );

  const gutter = () =>
    `--gutter: ${getSpacingValue(props.gutter ?? "none", theme) ?? "0px"};`;

  const columns = () =>
    `--columns: ${props.columns && props.columns > 0 ? props.columns : 1};`;

  const dense = () => (props.dense ? "dense" : "");

  const style = () => [propsStyle(), gutter(), columns()].join("; ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "gutter", "columns", "dense"]),
      createPropsFromAccessors({
        style,
        "data-bedrock-columns": dense,
      })
    ) as DynamicProps<T>
  );
}

export interface ColumnsProps extends StackProps, ColumnsBaseProps {
  switchAt?: number | string;
}

export const Columns: Component<ColumnsProps> = (props) => {
  const [local, rest] = splitProps(props, ["switchAt", "columns", "dense"]);
  const maybePx =
    typeof local.switchAt === "string" ? toPX(local.switchAt) : local.switchAt;

  /**
   * zero is used to make the switchAt a noop
   */
  const widthToSwitchAt = Math.max(maybePx ?? 0, 0);

  const [shouldSwitch, nodeRef] = createContainerQuery(widthToSwitchAt);

  const combineRef = (ref: HTMLElement) => {
    nodeRef(ref);
    (rest.ref as (e: Element) => void | undefined)?.(ref);
  };

  return (
    <Switch>
      <Match when={shouldSwitch() === false}>
        <ColumnsBase
          columns={local.columns}
          dense={local.dense}
          {...rest}
          ref={combineRef}
        />
      </Match>
      <Match when={shouldSwitch() === true}>
        <Stack {...rest} ref={combineRef} />
      </Match>
    </Switch>
  );
};

export interface ColumnBaseProps {
  span?: number;
  offsetStart?: number;
  offsetEnd?: number;
}

const safeSpan = (span: unknown) => {
  return typeof span === "number" ? span : 1;
};

export type ColumnProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, ColumnBaseProps>;

export function Column<T extends ValidConstructor = "div">(
  props: ColumnProps<T>
): JSX.Element {
  const propsStyle = () =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        );

  const span = () => `--span: ${safeSpan(props.span)};`;

  const offsetStart = () =>
    props.offsetStart && props.offsetStart > 0
      ? `--offsetStart: ${props.offsetStart};`
      : "";

  const offsetEnd = () =>
    props.offsetEnd && props.offsetEnd > 0
      ? `--offsetEnd: ${props.offsetEnd};`
      : "";

  const style = () =>
    [propsStyle(), span(), offsetStart(), offsetEnd()].join("; ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "span", "offsetStart", "offsetEnd"]),
      createPropsFromAccessors({
        style,
        "data-bedrock-column": () => "",
      })
    ) as DynamicProps<T>
  );
}
