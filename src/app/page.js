"use client"
import Lenis from '@studio-freight/lenis'
import _02Hero from "./components/_02Hero"
import _03Descripcion from "./components/_03Descripcion"
import _04FirstBlock from "./components/_04FirstBlock"
import _05SecondBlock from "./components/_05SecondBlock"
import _06ThirdBlock from "./components/_06ThirdBlock"
import _07FourthBlock from "./components/_07FourthBlock"
import _08FifthBlock from "./components/_08FifthBlock"
import _09SixthBlock from "./components/_09SixthBlock"
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <_02Hero />
      <_03Descripcion />
      <_04FirstBlock />
      <_05SecondBlock />
      <_06ThirdBlock />
      <_07FourthBlock />
      <_08FifthBlock />
      <_09SixthBlock />
    </main>
  )
}
