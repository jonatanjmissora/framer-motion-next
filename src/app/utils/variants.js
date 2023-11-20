export const revealHeader = {
    hide: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1
        }
    }
}

export const revealHeroFooter = {
    hide: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1
        }
    }
}

export const revealHeroImage = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 3
        }
    }  
}

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
  }
}

export const revealFromRight = (delayValue) => {
    return { hide: {
        opacity: 0,
        x: 100
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delayValue
        }
    }
    }
  }

export const revealFromTop = {
  hide: {
      opacity: 0,
      y: -20
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 1
      }
  }

}

export const revealFromBottom = {
  hide: {
      opacity: 0,
      y: 20
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 1
      }
  }

}

export const revealDescription = (delayValue) => {
    return { hide: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: delayValue
        }
    }
    }
  }