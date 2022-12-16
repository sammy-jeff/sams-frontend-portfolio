import { useAnimation, motion } from 'framer-motion/dist/framer-motion'
import React, { useMemo, useRef } from 'react'
import { Link } from 'react-scroll'
import styles from '../../Css/about.module.css'
import useAnimateComponent from '../../customs/useAnimateComponent'
const meVariant = {
  hidden: {
    opacity: 0,
    x: -200,
    ease: 'easeIn',
  },
  visible: {
    opacity: 1,
    x: 0,
    ease: 'easeOut',
    transition: { duration: 2 },
  },
}
const ProgressVariant = {
  hidden: {
    x: 200,
    ease: 'easeIn',
  },
  visible: {
    x: 0,
    ease: 'easeOut',
    transition: { duration: 2 },
  },
}
function BottomComponents() {
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <>
      <motion.div
        ref={target}
        variants={meVariant}
        initial='hidden'
        animate={control}
        className={styles.me}>
        <img src='IMG-20220126-WA0001.jpg' alt='developer_img' />
        <h3>Who is Samuel?</h3>
        <p>
          I'm a Front-End Developer from Nigeria. I have serious passion for
          bringing UI designs to life, animations and creating intuitive,
          dynamic user experiences.
        </p>
        <Link to='contact' smooth>
          Let's make something special
        </Link>
      </motion.div>
      <motion.div
        ref={target}
        variants={ProgressVariant}
        initial='hidden'
        animate={control}
        className={styles.skills__progress}>
        <ul className={styles.skill_list}>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '90%' }}></motion.div>
            <p>HTML</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '90%' }}></motion.div>
            <p>CSS</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '80%' }}></motion.div>
            <p>JavaScript</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '80%' }}></motion.div>
            <p>React</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '75%' }}></motion.div>
            <p>Firebase</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '75%' }}></motion.div>
            <p>SCSS</p>
          </li>
          <li className={styles.individual__skill}>
            <motion.div
              ref={target}
              variants={ProgressVariant}
              initial='hidden'
              animate={control}
              className={styles.bar}
              style={{ width: '75%' }}></motion.div>
            <p>GIT</p>
          </li>
        </ul>
      </motion.div>
    </>
  )
}

export default BottomComponents
