import Descripcion from "./components/Descripcion"
import FirstBlock from "./components/FirstBlock"
import FourthBlock from "./components/FourthBlock"
import Hero from "./components/Hero"
import SecondBlock from "./components/SecondBlock"
import ThirdBlock from "./components/ThirdBlock"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Descripcion />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </main>
  )
}
