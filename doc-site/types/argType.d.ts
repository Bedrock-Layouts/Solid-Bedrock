type Controls =
  | {
      control: "text";
    }
  | {
      control: "select";
      options: string[];
    };

type ArgDetails = {
  description: string;
  defaultValue?: string;
  summary: string;
  initialValue: string;
} & Controls;

export interface ArgType {
  [prop: string]: ArgDetails;
}
