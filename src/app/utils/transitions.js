export const fadeInUp = () => {
  return {
    hidden: {
      y: -20,
      x: 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }

  }
}

export const fadeInLeft = () => {
  return {
    hidden: {
      y: 0,
      x: -20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }

  }
}

export const fadeInRight = () => {
  return {
    hidden: {
      y: 0,
      x: 20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }

  }
}