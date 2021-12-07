import Image from "next/dist/client/image"
import Link from "next/dist/client/link"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles["page-footer"]}>
      <Link href="/impressum">
        <a>
          <Image src="/images/info-icon.svg" alt="info icon" width="24" height="24"></Image>
        </a>
      </Link>

      <Link href="https://ice-creme.de">
        <a target="_blank" rel="noreferrer">
          <Image src="/images/ice-creme.svg" alt="ice-creme logo" width="50" height="25"></Image>
        </a>
      </Link>
    </footer>
  )
}

export default Footer
