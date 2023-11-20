import Image from "next/image"
import { revealHeroFooter, revealFromBottom, revealHeroImage } from "../utils/variants"
import MotionParent from "./MotionParent"
import image from "../assets/hero.jpeg"

const Hero = () => {
  return (
    <div className="hero-container">
      <MotionParent  variants={revealHeroImage}>
        <Image 
        className="hero-foto"
          src={image}
          width="1400"
          height="600"
          alt="hero image"
        />
      </MotionParent>
      <MotionParent className="title" variants={revealFromBottom}>
          <h1>Punto Alem</h1>
          <h3 className="subtitle">EVENTOS</h3>
      </MotionParent>
      <MotionParent className="hero-footer" variants={revealHeroFooter}>
          <h4 className="subtitle">salon - cochera - living - aire libre</h4>
      </MotionParent>
    </div>
  )
}

export default Hero