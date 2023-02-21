import { ButtonProps } from "./types";
import { style } from "typestyle";

export const DividerContainer = (props: ButtonProps) => {
  return style({
    background: props.color,
    height: props.strokeWidth,
    width: "100%",
  });
};
