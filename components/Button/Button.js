import Link from "next/dist/client/link"
import styles from "./Button.module.scss"

/**
 * Button component
 * @param {object} props
 * @param {string} props.link Link to destination
 * @param {bool} props.big Display a big version
 * @param {string} props.align Alignment (flex-start, center, flex-end, ...)
 * @returns 
 */
const Button = props => {
  return (
    <Link href={props.link || "#!"}>
      <button 
        className={styles.button + ' ' + (props.big && styles["button--big"])}
        style={{ alignSelf: props.align || 'flex-start', }}>
        {props.children}
      </button>
    </Link>
  )
}

export default Button
