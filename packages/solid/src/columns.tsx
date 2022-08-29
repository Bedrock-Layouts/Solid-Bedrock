import {
  Component,
  JSX,
  Match,
  Switch,
  createMemo,
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
  const style = createMemo(() =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        )
  );

  const gutter = createMemo(
    () =>
      `--gutter: ${getSpacingValue(props.gutter ?? "none", theme) ?? "0px"};`
  );

  const columns = createMemo(
    () =>
      `--columns: ${props.columns && props.columns > 0 ? props.columns : 1};`
  );

  const dense = createMemo(() => (props.dense ? "dense" : ""));

  const fullStyle = createMemo(() => `${style()}; ${gutter()} ${columns()}`);

  const restProps = {
    get style() {
      return fullStyle();
    },
  };

  Object.defineProperty(restProps, "data-bedrock-columns", {
    get() {
      return dense();
    },
    configurable: true,
    enumerable: true,
  });

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "gutter", "columns", "dense"]),
      restProps
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

  const widthToSwitchAt: number = maybePx && maybePx > -1 ? maybePx : 0; //zero is used to make the switchAt a noop

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
  const style = createMemo(() =>
    typeof props.style === "string"
      ? props.style
      : Object.entries(props.style ?? ({} as JSX.CSSProperties)).reduce(
          (str, [key, value]) => str + `${key}:${value};`,
          ""
        )
  );

  const span = createMemo(() => `--span: ${safeSpan(props.span)};`);

  const offsetStart = createMemo(() =>
    props.offsetStart && props.offsetStart > 0
      ? `--offsetStart: ${props.offsetStart};`
      : ""
  );

  const offsetEnd = createMemo(() =>
    props.offsetEnd && props.offsetEnd > 0
      ? `--offsetEnd: ${props.offsetEnd};`
      : ""
  );

  const fullStyle = createMemo(
    () => `${style()}; ${span()} ${offsetStart()} ${offsetEnd()}`
  );

  const restProps = {
    get style() {
      return fullStyle();
    },
  };

  Object.defineProperty(restProps, "data-bedrock-column", {
    get() {
      return "";
    },
    configurable: true,
    enumerable: true,
  });

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "span", "offsetStart", "offsetEnd"]),
      restProps
    ) as DynamicProps<T>
  );
}
