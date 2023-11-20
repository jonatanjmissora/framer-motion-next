import Image from "next/image"
import { revealFromLeft, revealHeroImage } from "../utils/variants"
import MotionParent from "./MotionParent"
import image2 from "../assets/foto2.jpg"

const FourthBlock = () => {
    return (
        <div className="fourth-block">
      <MotionParent  variants={revealHeroImage}>
        <Image 
        className="image2"
          src={image2}
          width="1400"
          height="600"
          alt="hero image"
        />
      </MotionParent>
      <MotionParent className="fourth-block-content" variants={revealFromLeft(0)}>
          <h2>Punto Alem</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
      </MotionParent>
    </div>
    )
}

export default FourthBlock