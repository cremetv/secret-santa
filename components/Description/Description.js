import styles from "./Description.module.scss"

const Description = props => {
  return (
    <p className={styles.description}>
      {props.children}
    </p>
  )
}

export default Description
