import styles from "./Heading.module.scss"

const Heading = props => {
  return (
    <h1 className={styles.heading}>
      {props.children}
    </h1>
  )
}

export default Heading
