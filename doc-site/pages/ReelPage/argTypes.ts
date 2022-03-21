import { ArgType } from "doc-site/types/argType";

export const argTypes: ArgType = {
  gutter: {
    description: "Sets space between each element",
    summary: "Space",
    defaultValue: "0px",
    initialValue: "lg",
    control: "select",
    options: [
      "none",
      "xxs",
      "xs",
      "sm",
      "md",
      "mdLg",
      "lg",
      "lgXl",
      "xl",
      "xlXXl",
      "xxl",
    ],
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
