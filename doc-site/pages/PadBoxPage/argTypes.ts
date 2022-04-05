import { ArgType } from "doc-site/types/argType";

export const argTypes: ArgType = {
  padding: {
    description: "Sets the padding around the content of the element",
    summary: "Space | Space[] | Record<paddingProperty, Space>",
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
};
