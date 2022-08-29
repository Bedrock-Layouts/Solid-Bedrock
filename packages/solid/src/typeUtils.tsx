/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * These utility types and function were taken directly from solid-headless
 * https://github.com/lxsmnsyc/solid-headless
 */
import { JSX, createComponent, createEffect, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";
export type OmitAndMerge<A, B> = A & Omit<B, keyof A>;

export type ValidElements = keyof JSX.IntrinsicElements;
export type ValidComponent<P> = (props: P) => JSX.Element;
export type ValidConstructor =
  | ValidElements
  | ValidComponent<any>
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

export type DynamicProps<T extends ValidConstructor> = T extends ValidElements
  ? JSX.IntrinsicElements[T]
  : T extends ValidComponent<infer U>
  ? U
  : Record<string, unknown>;

type UnboxIntrinsicElements<T> = T extends JSX.HTMLAttributes<infer U>
  ? U
  : never;

type RefCallback<T> = (el: T) => void;
type RefField<T> = T | RefCallback<T>;

type UnboxComponentProp<U> = U extends { ref: infer X } ? X : never;

export type DynamicNode<T extends ValidConstructor> = T extends ValidElements
  ? UnboxIntrinsicElements<JSX.IntrinsicElements[T]>
  : T extends ValidComponent<infer U>
  ? UnboxComponentProp<U>
  : never;

export interface WithRef<T extends ValidConstructor> {
  ref?: RefField<DynamicNode<T>>;
}

export interface DynamicComponent<T extends ValidConstructor> {
  as?: T;
}

export interface DynamicComponentWithRef<T extends ValidConstructor>
  extends WithRef<T> {
  as?: T;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type HeadlessProps<T extends ValidConstructor, V = {}> = OmitAndMerge<
  V & DynamicComponent<T>,
  DynamicProps<T>
>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type HeadlessPropsWithRef<
  T extends ValidConstructor,
  // eslint-disable-next-line @typescript-eslint/ban-types
  V = {}
> = OmitAndMerge<V & DynamicComponentWithRef<T>, DynamicProps<T>>;

function isRefFunction<U extends ValidConstructor>(
  callback?: RefField<DynamicNode<U>>
): callback is RefCallback<DynamicNode<U>> {
  return typeof callback === "function";
}

export function createRef<U extends ValidConstructor>(
  props: WithRef<U>,
  callback: RefCallback<DynamicNode<U>>
): RefCallback<DynamicNode<U>> {
  return (e) => {
    if ("ref" in props && isRefFunction(props.ref)) {
      props.ref(e);
    }
    callback(e);
  };
}

export function omitProps<T extends Record<string, any>, K extends keyof T>(
  value: T,
  keys: K[]
): Omit<T, K> {
  return Object.keys(value)
    .filter((k) => !keys.includes(k as K))
    .reduce((newObject, k) => {
      Object.defineProperty(newObject, k, {
        get() {
          return value[k];
        },
        configurable: true,
        enumerable: true,
      });
      return newObject;
    }, {}) as Omit<T, K>;
}

export default function createDynamic<T extends ValidConstructor>(
  source: () => T,
  props: DynamicProps<T>
): JSX.Element {
  return createComponent(
    Dynamic,
    mergeProps(
      {
        get component() {
          return source();
        },
      },
      props
    ) as any
  );
}
