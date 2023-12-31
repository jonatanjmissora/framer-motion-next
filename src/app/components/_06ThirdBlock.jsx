import Image from "next/image"
import { revealFromRight, revealFromLeft } from "../utils/variants"
import MotionParent from "./MotionParent"
import MotionParent2 from "./MotionParent2"
import image1 from "../assets/foto1.jpeg"

const _06ThirdBlock = () => {
    return (
        <div className="first-block">
            <div className="wrapper">
                <MotionParent2 className="right" options={{from: "left", delay: "0"}}>
                    <Image 
                    className="image" 
                    src={image1}
                    width="500"
                    height="500"
                    alt="foto1"
                    />
                </MotionParent2>
                <div className="left">

                    <MotionParent2 options={{from: "right", delay: "0"}}>
                    <div className="text-container">
                        <h2>Este es el Third</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent2>
                    <MotionParent2 options={{from: "right", delay: "0"}}>
                    <div className="text-container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent2>
                    <MotionParent2 options={{from: "right", delay: "0"}}>
                    <div className="text-container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
                    </div>
                    </MotionParent2>
                </div>
                
            </div>
        </div>
    )
}

export default _06ThirdBlock