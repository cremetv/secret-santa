import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { randomInRangeDecimal } from "../Helpers/Helpers"
import styles from "./Profilepic.module.scss"

const Profilepic = props => {
  const profileRef = useRef()
  const tl = useRef()

  useEffect(() => {

    tl.current = gsap.timeline({
      repeat: -1,
      yoyo: true
    })
      .to(profileRef.current, {
        scale: 1.2,
        duration: randomInRangeDecimal(2.5, 3.5),
        ease: 'Power2.easeInOut'
      })
  })

  return (
    <div 
      className={styles["profile-pic"] + ' ' + (props.big ? styles.big : '')} 
      style={{ 
        backgroundImage: `url(${props.image})`,
        left: props.left || '0',
        top: props.top || '0',
        right: props.right || '0',
        bottom: props.bottom || '0'
      }}
      ref={profileRef}>
    </div>
  )
}

export default Profilepic
