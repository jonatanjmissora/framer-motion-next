"use client"
import {useRef} from "react"
import {useInView} from "framer-motion"

const MotionParent2 = ({children, className, options}) => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const translate = (from) => {
        if(from === "left") return "translateX(-200px)"
        if(from === "right") return "translateX(200px)"
    }

    const transition = `all 2s ease ${options.delay}s`

    return (
        <div 
        className={className}
            ref={ref}
            style={{
                transform: isInView ? "none" : translate(options.from),
                opacity: isInView ? 1 : 0,
                transition: transition
            }}
        >
            {children}
        </div>
    )
}

export default MotionParent2;