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
  snapType: {
    description: "Sets the scroll snap type",
    summary: "string",
    control: "select",
    defaultValue: "none",
    initialValue: "none",
    options: ["none", "proximity", "mandatory"],
  },
};
