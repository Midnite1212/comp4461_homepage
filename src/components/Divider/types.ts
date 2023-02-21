export interface DividerProps {
  align: AlignDirection;
  color: string;
  strokeWidth: string;
}

export enum AlignDirection {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}
