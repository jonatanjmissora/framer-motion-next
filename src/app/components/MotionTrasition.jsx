"use client"
import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export const MotionTrasition = ({children, className, variants}) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        exit="hiden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
