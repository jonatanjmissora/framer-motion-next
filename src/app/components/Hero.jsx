import { fadeInLeft, fadeInRight } from "../utils/transitions"
import { MotionTrasition } from "./MotionTrasition"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="wrapper">

      <MotionTrasition className={"left"} variants={fadeInLeft()}>
        <div className="text-container">
          <h2>Este es el Titulo</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
        </div>
      </MotionTrasition>
      <MotionTrasition className="right" variants={fadeInRight()}>
        <div className="image"></div>
      </MotionTrasition>
      </div>
    </div>
  )
}

export default Hero