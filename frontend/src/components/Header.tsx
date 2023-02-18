import Image from "next/image"
import styles from "../styles/Home.module.css"

const Header = () => {
  return (
     <nav className={styles.nav}> 
      <button type="button">
          <Image src={"logo"} className={styles.logo}  alt="logo" />
      </button>
      <ul>
        <li>Sobre mi</li>
        <li>Consultorias</li>
        <li>Proyectos</li>
        <li>Cenas</li>
      </ul>
    </nav>
  )
}

export default Header