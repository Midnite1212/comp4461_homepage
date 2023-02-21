import { DividerProps } from "./types"
import * as styles from "./styles"

export const Divider = (props: DividerProps) => {
  return (
    <>
      <div className={styles.DividerContainer(props)} />
    </>
  )
}