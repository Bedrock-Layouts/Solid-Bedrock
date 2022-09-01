import {
  Component,
  JSX,
  Match,
  Switch,
  mergeProps,
  splitProps,
} from "solid-js";

import { createContainerQuery } from "./create-container-query";
import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";
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
  "1/4": "fraction:1/4",
  "1/3": "fraction:1/3",
  "1/2": "fraction:1/2",
  "2/3": "fraction:2/3",
  "3/4": "fraction:3/4",
  "auto-start": `fraction:auto-start`,
  "auto-end": `fraction:auto-end`,
};

interface SplitBase {
  gutter?: SpacingOptions;
  fraction?: FractionTypes;
}

export type SplitBaseProps<T extends ValidConstructor = "div"> =
  HeadlessPropsWithRef<T, SplitBase>;

export function SplitBase<T extends ValidConstructor = "div">(
  props: SplitBaseProps<T>
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

  const fraction = () => fractions[props.fraction ?? "1/2"] ?? fractions["1/2"];

  const style = () => [propsStyle(), gutter()].join("; ");

  return createDynamic(
    () => props.as ?? ("div" as T),
    mergeProps(
      omitProps(props, ["as", "gutter", "fraction"]),
      createPropsFromAccessors({
        style,
        "data-bedrock-split": fraction,
      })
    ) as DynamicProps<T>
  );
}

export interface SplitProps extends StackProps, SplitBaseProps {
  switchAt?: number | CSSLength;
}

export const Split: Component<SplitProps> = (props) => {
  const [local, rest] = splitProps(props, ["switchAt", "fraction"]);
  const maybePx =
    typeof local.switchAt === "string" ? toPX(local.switchAt) : local.switchAt;

  /**
   * zero is used to make the switchAt a noop
   */
  const widthToSwitchAt = Math.max(maybePx ?? 0, 0);

  const [shouldSwitch, nodeRef] = createContainerQuery(
    widthToSwitchAt,
    props.ref as (e: Element) => void
  );

  return (
    <Switch>
      <Match when={shouldSwitch() === false}>
        <SplitBase fraction={local.fraction} {...rest} ref={nodeRef} />
      </Match>
      <Match when={shouldSwitch() === true}>
        <Stack {...rest} ref={nodeRef} />
      </Match>
    </Switch>
  );
};
