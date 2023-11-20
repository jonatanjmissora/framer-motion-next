import Image from "next/image"
import { revealFromRight, revealFromLeft } from "../utils/variants"
import MotionParent from "./MotionParent"
import image1 from "../assets/foto1.jpeg"

const FirstBlock = () => {
    return (
        <div className="first-block">
            <div className="wrapper">
              <div className="left">

                <MotionParent variants={revealFromLeft(0)}>
                  <div className="text-container">
                    <h2>Este es el Titulo</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                  </div>
                </MotionParent>
                <MotionParent variants={revealFromLeft(0.25)}>
                  <div className="text-container">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                  </div>
                </MotionParent>
                <MotionParent variants={revealFromLeft(0.5)}>
                  <div className="text-container">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                  </div>
                </MotionParent>
              </div>
              <MotionParent className="right" variants={revealFromRight(0)}>
                <Image 
                  className="image" 
                  src={image1}
                  width="500"
                  height="500"
                  alt="foto1"
                />
              </MotionParent>
              </div>
        </div>
    )
}

export default FirstBlock