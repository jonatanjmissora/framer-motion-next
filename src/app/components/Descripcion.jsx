import MotionParent from "./MotionParent"
import {revealDescription, revealFromLeft} from "../utils/variants"

const Descripcion = () => {
    return (
        <div className="descripcion">
            <MotionParent className="item" variants={revealDescription(0)}>
                <h2>Title 1</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, in nisi illo, soluta sed fugit, dignissimos suscipit eos repudiandae quasi dolor itaque reiciendis error ipsa incidunt. Voluptas possimus dignissimos magni?</p>
            </MotionParent>
            <MotionParent className="item" variants={revealDescription(0.25)}>
                <h2>Title 1</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, in nisi illo, soluta sed fugit, dignissimos suscipit eos repudiandae quasi dolor itaque reiciendis error ipsa incidunt. Voluptas possimus dignissimos magni?</p>
            </MotionParent>
            <MotionParent className="item" variants={revealDescription(0.5)}>
                <h2>Title 1</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, in nisi illo, soluta sed fugit, dignissimos suscipit eos repudiandae quasi dolor itaque reiciendis error ipsa incidunt. Voluptas possimus dignissimos magni?</p>
            </MotionParent>
        </div>
    )
}

export default Descripcion