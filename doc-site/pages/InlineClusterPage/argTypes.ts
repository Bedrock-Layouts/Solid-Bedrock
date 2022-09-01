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
  justify: {
    description: "Sets the inline justification of the children",
    summary: "start | end | center",
    defaultValue: "start",
    initialValue: "start",
    control: "select",
    options: ["start", "end", "center"],
  },
  align: {
    description: "Sets the block alignment of the children",
    summary: "start | end | center | stretch",
    defaultValue: "start",
    initialValue: "start",
    control: "select",
    options: ["start", "end", "center", "stretch"],
  },
};
