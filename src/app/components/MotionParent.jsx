"use client"
import { motion} from "framer-motion"

const MotionParent = ({children, className, variants}) => {

    return (
        <motion.div
            className={className}
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default MotionParent