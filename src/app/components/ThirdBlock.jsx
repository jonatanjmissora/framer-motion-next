import Image from "next/image"
import { revealFromRight, revealFromLeft } from "../utils/variants"
import MotionParent from "./MotionParent"
import image1 from "../assets/foto1.jpeg"

const ThirdBlock = () => {
    return (
        <div className="first-block">
            <div className="wrapper">
                <MotionParent className="right" variants={revealFromLeft(0)}>
                    <Image 
                    className="image" 
                    src={image1}
                    width="500"
                    height="500"
                    alt="foto1"
                    />
                </MotionParent>
                <div className="left">

                    <MotionParent variants={revealFromRight(0)}>
                    <div className="text-container">
                        <h2>Este es el Titulo</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent>
                    <MotionParent variants={revealFromRight(0.25)}>
                    <div className="text-container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent>
                    <MotionParent variants={revealFromRight(0.5)}>
                    <div className="text-container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent>
                </div>
                
            </div>
        </div>
    )
}

export default ThirdBlock