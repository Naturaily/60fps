import { useRef } from "react"
import styles from '../styles/Home.module.css'

const Home = () => {
  const ref = useRef(null)

  const toggleClassMenu = () => {
    ref.current.classList.add(styles.menuAnimatable);
    if(!ref.current.classList.contains(styles.menuVisible)) {
      ref.current.classList.add(styles.menuVisible);
    } else {
      ref.current.classList.remove(styles.menuVisible);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.menu} onClick={toggleClassMenu} ref={ref}>
        <div className={styles.appMenu}></div>
      </div>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.menuIcon} onClick={toggleClassMenu}></div>
        </div>
      </div>
    </main>
  )
}

export default Home
