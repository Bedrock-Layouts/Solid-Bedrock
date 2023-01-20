import { ArgType } from "doc-site/types/argType";
import { spacing } from "../../../packages/solid/src/spacing-constants";

export const argTypes: ArgType = {
  gutter: {
    description: "Sets space between each element",
    summary: "Space",
    defaultValue: "0px",
    initialValue: "size3",
    control: "select",
    options: Object.keys(spacing),
  },
  minItemWidth: {
    description: "Sets the basis of each of the children",
    summary: "CSSLength",
    defaultValue: "639px",
    initialValue: "20rem",
    control: "text",
  },
};
