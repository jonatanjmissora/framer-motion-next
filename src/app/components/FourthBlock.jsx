import Image from "next/image"
import { revealFromLeft, revealHeroImage } from "../utils/variants"
import MotionParent from "./MotionParent"
import MotionParent2 from "./MotionParent2"
import image2 from "../assets/foto2.jpg"

const FourthBlock = () => {
    return (
        <div className="fourth-block">
        <Image 
        className="image2"
          src={image2}
          width="1400"
          height="600"
          alt="hero image"
        />
      <MotionParent2 className="fourth-block-content" options={{from: "left", delay: "0"}}>
          <h2>Punto Alem2</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
      </MotionParent2>
    </div>
    )
}

export default FourthBlock