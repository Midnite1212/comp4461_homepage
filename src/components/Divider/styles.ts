import { DividerProps, AlignDirection } from "./types";
import { style } from "typestyle";

export const DividerContainer = (props: DividerProps) => {
  switch (props.align) {
    case AlignDirection.HORIZONTAL:
      return style({
        background: props.color,
        height: props.strokeWidth,
        width: "100%",
      });

    case AlignDirection.VERTICAL:
      return style({
        background: props.color,
        width: props.strokeWidth,
        height: "100%",
      });
  }
};
