import Image from "next/image"
import { revealFromRight, revealHeroImage } from "../utils/variants"
import MotionParent2 from "./MotionParent2"
import image2 from "../assets/foto2.jpg"

const _05SecondBlock = () => {
    return (
        <div className="second-block">
        <Image 
        className="image2"
          src={image2}
          width="1400"
          height="600"
          alt="hero image"
        />
      <MotionParent2 className="second-block-content" options={{from: "right", delay: "0"}}>
          <h2>Punto Second 2</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum qui aperiam incidunt sit nisi at.</p>
      </MotionParent2>
    </div>
    )
}

export default _05SecondBlock