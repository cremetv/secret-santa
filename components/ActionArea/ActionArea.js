import styles from "./ActionArea.module.scss"

const ActionArea = props => {
  return (
    <div className={styles["action-area"]}>
      {props.children}
    </div>
  )
}

export default ActionArea
