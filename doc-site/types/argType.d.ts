type Controls =
  | {
      control: "text";
      initialValue: string;
    }
  | {
      control: "boolean";
      initialValue: boolean;
    }
  | {
      control: "select";
      initialValue: string;
      options: string[];
    };

type ArgDetails = {
  description: string;
  defaultValue?: string;
  summary: string;
} & Controls;

export interface ArgType {
  [prop: string]: ArgDetails;
}
