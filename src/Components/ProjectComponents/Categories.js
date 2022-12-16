import React, { useMemo, useRef } from 'react'
import styles from '../../Css/projects.module.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import useAnimateComponent from '../../customs/useAnimateComponent'
const categoryVariant = {
  initial: {
    opacity: 0,
    x: -200,
    transition: { duration: 3 },
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}
function Categories({ categories, activeIndex, handleBtn }) {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <motion.div
      ref={target}
      variants={categoryVariant}
      initial='hidden'
      animate={control}
      className={styles.categories}>
      {categories?.map((category, i) => (
        <button
          key={i}
          data-id={category}
          className={activeIndex === i ? styles.active : ''}
          onClick={(e) => handleBtn(e, i)}>
          {category}
        </button>
      ))}
    </motion.div>
  )
}

export default Categories
