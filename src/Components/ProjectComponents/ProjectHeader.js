import styles from '../../Css/projects.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useMemo, useRef } from 'react'

import useAnimateComponent from '../../customs/useAnimateComponent'
const homeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
}
function ProjectHeader() {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <>
      <motion.h2
        ref={target}
        variants={homeVariants}
        initial='hidden'
        animate={control}
        className={styles.header}>
        PROJECTS
      </motion.h2>
    </>
  )
}

export default ProjectHeader
