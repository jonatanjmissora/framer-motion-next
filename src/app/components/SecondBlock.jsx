import Image from "next/image"
import { revealFromRight, revealHeroImage } from "../utils/variants"
import MotionParent from "./MotionParent"
import image2 from "../assets/foto2.jpg"

const SecondBlock = () => {
    return (
        <div className="second-block">
      <MotionParent  variants={revealHeroImage}>
        <Image 
        className="image2"
          src={image2}
          width="1400"
          height="600"
          alt="hero image"
        />
      </MotionParent>
      <MotionParent className="second-block-content" variants={revealFromRight(0)}>
          <h2>Punto Alem</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
      </MotionParent>
    </div>
    )
}

export default SecondBlock