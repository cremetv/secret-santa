import Image from "next/dist/client/image"
import styles from "./Star.module.scss"

/**
 * Star svg component
 * @param {object} props Component props
 * @param {bool} props.animate If the star should be animated
 * @param {string} props.size The size of the star
 * @param {string} props.left CSS left value
 * @param {string} props.top CSS top value
 * @param {string} props.right CSS right value
 * @param {string} props.bottom CSS bottom value
 * @returns 
 */
const Star = props => {
  return (
    <div 
      className={styles.star + ' ' + (props.animate && styles.animated)}
      style={{
        left: props.left || 'unset',
        top: props.top || 'unset',
        right: props.right || 'unset',
        bottom: props.bottom || 'unset',
      }}>
      <Image 
        src="/images/star.svg" 
        alt="star" 
        width={props.size || "80"} 
        height={props.size || "80"} />
    </div>
  )
}

export default Star
