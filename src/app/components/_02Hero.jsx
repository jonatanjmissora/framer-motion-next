import Image from "next/image"
import MotionParent2 from "./MotionParent2"
import image from "../assets/hero.jpeg"

const _02Hero = () => {
  return (
    <div className="hero-container">
      <MotionParent2  options={{from: "none", amount:"0", delay: "0"}}>
        <Image 
        className="hero-foto"
          src={image}
          width="1400"
          height="600"
          alt="hero image"
        />
      </MotionParent2>
      <MotionParent2 className="title" options={{from: "bottom", delay: "0"}}>
          <h1>Punto Alem</h1>
          <h3 className="subtitle">EVENTOS</h3>
      </MotionParent2>
      <MotionParent2 className="hero-footer" options={{from: "bottom", amount:"20", delay: "0.75"}}>
          <h4 className="subtitle">salon - cochera - living - aire libre</h4>
      </MotionParent2>
    </div>
  )
}

export default _02Hero