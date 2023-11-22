"use client"
import { motion} from "framer-motion"

const MotionParent = ({children, className, variants}) => {

    return (
        <motion.div
            className={className}
            initial="hide"
            whileInView="show"
            exit="hide"
            viewport={{once: true, margin: "-100px"}}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default MotionParent

/*              CHILD                  
const Child = () => {
    return (
        <MotionParent variants={revealFromLeft(0)}>
            <div className="text-container">
            <h2>Este es el Titulo</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis atque hic aliquid ex labore corporis cumque neque repellendus consequuntur?</p>
            </div>
        </MotionParent>
    )
}

             utils/variants                  
export const revealFromLeft = (delayValue) => {
    return { hide: {
        opacity: 0,
        x: -100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delayValue
        }
    }

    */