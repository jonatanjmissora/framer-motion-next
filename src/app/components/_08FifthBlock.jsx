"use client"
import Image from "next/image"
import image1 from "../assets/foto2.jpg"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const _08FifthBlock = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

  const y = useTransform(scrollYProgress, [0, 1], ["-0%", "-20%"]);
 
    return (
        <div className="fifth-block" ref={ref}  >
          <div className="wrapper">
            <motion.div className="box" style={{ y}}>
              <Image src={image1} fill alt="image1" />
            </motion.div>
          </div>  
        </div>
    )
}

export default _08FifthBlock