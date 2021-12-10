import { useEffect, useRef } from "react"
import Image from "next/dist/client/image"
import { gsap } from "gsap"
import styles from "./Tree.module.scss"

const Tree = props => {
  const treeRef = useRef()
  
  useEffect(() => {
    if (props.slidein) {
      gsap.from(treeRef.current, {
        rotation: -90,
        transformOrigin: '50% 100%',
        delay: .1
      })
    }
  })

  return (
    <div 
      className={styles.tree}
      style={{
        left: props.left || 'unset',
        top: props.top || 'unset',
        right: props.right || 'unset',
        bottom: props.bottom || 'unset',
      }}
      ref={treeRef}>
      <Image 
        src="/images/tree.svg" 
        alt="christmas tree" 
        width="318" 
        height="485" />
    </div>
  )
}

export default Tree
