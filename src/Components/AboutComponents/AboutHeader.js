import { useAnimation, motion } from 'framer-motion/dist/framer-motion'
import React, { useMemo, useRef } from 'react'
import useAnimateComponent from '../../customs/useAnimateComponent'
import styles from '../../Css/about.module.css'
const aboutVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
}
function AboutHeader() {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <motion.h2
      ref={target}
      variants={aboutVariants}
      initial='hidden'
      animate={control}
      className={styles.header}>
      ABOUT
    </motion.h2>
  )
}

export default AboutHeader
