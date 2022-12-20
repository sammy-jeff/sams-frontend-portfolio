import {
  faGaugeHigh,
  faLightbulb,
  faMobileScreen,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAnimation, motion } from 'framer-motion/dist/framer-motion'
import React, { useMemo, useRef } from 'react'
import styles from '../../Css/about.module.css'
import useAnimateComponent from '../../customs/useAnimateComponent'
const iconVariants = {
  hidden: { opacity: 0, rotate: 180, ease: 'easeIn' },
  visible: {
    opacity: 1,
    rotate: 0,
    ease: 'easeOut',
    transition: { duration: 1 },
  },
}
const aboutVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
}
function SingleCapability() {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <>
      <div className={styles.single__capability}>
        <motion.div
          variants={iconVariants}
          initial='hidden'
          animate={control}
          ref={target}
          className={styles.icon__container}>
          <FontAwesomeIcon icon={faGaugeHigh} />
        </motion.div>

        <motion.div
          ref={target}
          variants={aboutVariants}
          initial='hidden'
          animate={control}
          className={styles.text__central}>
          <h3>Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </motion.div>
      </div>
      <div className={styles.single__capability}>
        <motion.div
          variants={iconVariants}
          initial='hidden'
          animate={control}
          ref={target}
          className={styles.icon__container}>
          <FontAwesomeIcon icon={faMobileScreen} />
        </motion.div>
        <motion.div
          ref={target}
          variants={aboutVariants}
          initial='hidden'
          animate={control}
          className={styles.text__central}>
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </motion.div>
      </div>
      <div className={styles.single__capability}>
        <motion.div
          variants={iconVariants}
          initial='hidden'
          animate={control}
          ref={target}
          className={styles.icon__container}>
          <FontAwesomeIcon icon={faLightbulb} />
        </motion.div>

        <motion.div
          ref={target}
          variants={aboutVariants}
          initial='hidden'
          animate={control}
          className={styles.text__central}>
          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </motion.div>
      </div>
      <div className={styles.single__capability}>
        <motion.div
          variants={iconVariants}
          initial='hidden'
          animate={control}
          ref={target}
          className={styles.icon__container}>
          <FontAwesomeIcon icon={faRocket} />
        </motion.div>
        <motion.div
          ref={target}
          variants={aboutVariants}
          initial='hidden'
          animate={control}
          className={styles.text__central}>
          <h3>Dynamic</h3>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default SingleCapability
