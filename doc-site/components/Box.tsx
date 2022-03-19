import { styled } from "solid-styled-components";

export const Box = styled.div<{ widthLevel?: number }>`
  background: black;
  min-height: 50px;
  min-width: ${({ widthLevel = 1 }) => widthLevel * 50}px;
  color: white;
  display: flex;
  place-content: center;
  align-items: center;
`;
