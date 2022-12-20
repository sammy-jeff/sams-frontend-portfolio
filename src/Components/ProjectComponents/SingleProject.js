import styles from '../../Css/projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { useMemo, useRef } from 'react'
import useAnimateComponent from '../../customs/useAnimateComponent'
const projectVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    ease: 'easeIn',
  },
  visible: {
    opacity: 1,
    scale: 1,
    ease: 'easeOut',
    transition: { duration: 1.5 },
  },
}
function SingleProject({ project }) {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <motion.div
      ref={target}
      variants={projectVariant}
      initial='hidden'
      animate={control}
      className={styles.single__project}>
      <img src={`/${project?.image}`} alt={project.title} />

      <div className={styles.overLay}>
        <p>
          {project.title}
          <span>{project.category}</span>
        </p>
        <a href={project?.url}>
          Visit Site <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </motion.div>
  )
}

export default SingleProject
