import { ReactElement, ReactNode, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Link from "next/link"
import styles from "./Layout.module.scss"

const Layout = props => {
  // menuState: sets whether or not the menu should be open
  // menuDisplay: sets whether or not the menu should be 'display: none'
  //   this is so animations can finish before hiding the menu. a more
  //   elegant solution awaits for when i'm not lazy

  const [menuState, setMenuState] = useState(false)
  const [menuDisplay, setMenuDisplay] = useState(false)

  const openMenu = () => {
    if (menuDisplay) {
      setTimeout(() => setMenuDisplay(false), 300)
      document.body.style.overflow = "visible"
    } else {
      setMenuDisplay(true)
      document.body.style.overflow = "hidden"
    }
    setMenuState(!menuState)
  }

  return (
    <div className={styles.layout}>
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
