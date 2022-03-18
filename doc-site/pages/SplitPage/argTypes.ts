import { ArgType } from "doc-site/types/argType";

export const argTypes: ArgType = {
  gutter: {
    description: "Sets space between each element",
    summary: "Space",
    defaultValue: "0px",
    control: "select",
    initialValue: "lg",
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
  switchAt: {
    description:
      "Sets the width threshold that the split will switch to a Stack layout",

    summary: "string | number",
    control: "text",
    initialValue: "25rem",
  },
  fraction: {
    description: "Sets the fractional split",
    summary: "string",
    initialValue: "1/2",
    defaultValue: "1/2",
    control: "select",
    options: ["auto-start", "auto-end", "1/4", "1/3", "1/2", "2/3", "3/4"],
  },
};
