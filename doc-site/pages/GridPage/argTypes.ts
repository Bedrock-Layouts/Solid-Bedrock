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
  minItemWidth: {
    description: "Sets the basis of each of the children",
    summary: "CSSLength",
    defaultValue: "639px",
    initialValue: "20rem",
    control: "text",
  },
};
