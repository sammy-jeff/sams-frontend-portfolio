import { useAnimation } from 'framer-motion/dist/framer-motion'
import { useEffect, useState } from 'react'

function useAnimateComponent(ref, control) {
  const [intersectionTracker, setIntersectionTracker] = useState(false)
  useEffect(() => {
    const handleAnimation = () => {
      return intersectionTracker
        ? control.start('visible')
        : control.stop('hidden')
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIntersectionTracker(true)
          handleAnimation()
        } else {
          setIntersectionTracker(false)
        }
      },
      { threshold: 0 }
    )
    observer.observe(ref?.current)
    return () => observer.disconnect()
    // eslint-disable-next-line
  }, [intersectionTracker, control])
}

export default useAnimateComponent
