import React, { useMemo, useRef } from 'react'
import styles from '../../Css/projects.module.css'
import { motion, useAnimation } from 'framer-motion'
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
function Categories({ categories, selectedValue, handleChange }) {
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
        <label htmlFor='filter'>
          Filter Projects:
        </label>
        <select value={selectedValue} id="filter" onChange={(e) => handleChange(e.target.value)}>
          
        {categories?.map((category) => (
         <option
          value={category}
          key={category}
          // data-id={category}
          // className={activeIndex === i ? styles.active : ''}
          >
          {category}
        </option>
      ))}
        </select>
    </motion.div>
  )
}

export default Categories
