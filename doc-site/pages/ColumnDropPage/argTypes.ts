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
  basis: {
    description: "Sets the basis of each of the children",
    summary: "CSSLength",
    defaultValue: "159px",
    initialValue: "15rem",
    control: "text",
  },
  noStretchedColumns: {
    description:
      "If true, the columns will not be stretched to fill the container",
    summary: "boolean",
    defaultValue: "false",
    initialValue: false,
    control: "boolean",
  },
};
