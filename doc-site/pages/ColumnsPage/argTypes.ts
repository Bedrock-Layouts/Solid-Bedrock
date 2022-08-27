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
  columns: {
    description: "Sets the number of columns",
    defaultValue: "1",
    initialValue: 2,
    summary: "number",
    control: "number",
  },
  dense: {
    description: "Toggle for is the layout should use a dense layout or not",
    summary: "boolean",
    defaultValue: "false",
    initialValue: false,
    control: "boolean",
  },
  switchAt: {
    description:
      "Sets the width threshold that the split will switch to a Stack layout",

    summary: "string | number",
    control: "text",
    initialValue: "25rem",
  },
};

export const columnArgTypes: ArgType = {
  span: {
    description: "Sets the number of columns the element will span",
    summary: "number",
    defaultValue: "1",
    initialValue: 1,
    control: "number",
  },
  offsetStart: {
    description:
      "Sets the number of columns the element will offset before the element",
    summary: "number",
    defaultValue: "-",
    initialValue: 0,
    control: "number",
  },
  offsetEnd: {
    description:
      "Sets the number of columns the element will offset after the element",
    summary: "number",
    defaultValue: "-",
    initialValue: 0,
    control: "number",
  },
};
