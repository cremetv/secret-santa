import Image from "next/dist/client/image"
import styles from "./Tree.module.scss"

const Tree = props => {
  return (
    <div 
      className={styles.tree}
      style={{
        left: props.left || 'unset',
        top: props.top || 'unset',
        right: props.right || 'unset',
        bottom: props.bottom || 'unset',
      }}>
      <Image 
        src="/images/tree.svg" 
        alt="christmas tree" 
        width="318" 
        height="485" />
    </div>
  )
}

export default Tree
