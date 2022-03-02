import { styled } from "solid-styled-components";

import {
  CSSLength,
  SpacingOptions,
  getSpacingValue,
} from "./spacing-constants";

type Basis = CSSLength | number;

export interface ColumnDropProps {
  gutter?: SpacingOptions;
  basis?: Basis;
  noStretchedColumns?: boolean;
}

function getSafeBasis(basis?: Basis) {
  if (basis === undefined) return "100%";
  if (typeof basis === "number") return `${basis}px`;
  return basis;
}

export const ColumnDrop = styled("div")<ColumnDropProps>`
  @property --basis {
    syntax: "<length-percentage>";
    inherits: true;
    initial-value: 100%;
  }

  @property --gutter {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: 0px;
  }

  --basis: ${(props) => getSafeBasis(props.basis)};
  --gutter: ${(props) =>
    props.gutter ? getSpacingValue(props.gutter, props.theme) ?? "0px" : "0px"};

  box-sizing: border-box;
  > * {
    margin: 0;
    flex-basis: var(--basis, 100%);
    flex-grow: ${(props) => (props.noStretchedColumns ? "0" : "1")};
    flex-shrink: 1;
  }

  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter, 0px);
`;
