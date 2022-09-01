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
    defaultValue: "0px",
    initialValue: "100px",
    control: "text",
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
  stretch: {
    description: "Sets which child will stretch in the inline direction",
    summary: "all | start | end or index of child",
    defaultValue: "-",
    initialValue: "-",
    control: "select",
    options: ["-", "all", "start", "end"],
  },
  switchAt: {
    description:
      "Sets the width threshold that the split will switch to a Stack layout",
    summary: "string | number",
    control: "text",
    initialValue: "25rem",
  },
};
