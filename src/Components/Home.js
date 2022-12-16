import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useMemo, useRef } from 'react'
import styles from '../Css/home.module.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { useInView } from 'react-intersection-observer'
import useAnimateComponent from '../customs/useAnimateComponent'
import { Link } from 'react-scroll'

const homeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
}
function Home() {
  // const [ref, inView] = useInView()
  const target = useRef()
  const control = useAnimation()
  const controlMemo = useMemo(() => control, [control])
  useAnimateComponent(target, controlMemo)
  return (
    <section id='home' className={styles.home}>
      <div className={styles.intro}>
        <motion.div
          ref={target}
          variants={homeVariants}
          className={styles.text}
          initial='hidden'
          animate={control}>
          <p>
            Hello, I am <span>Okoye Samuel</span>.
            <br />I am a Front-end web developer
          </p>
        </motion.div>
        <Link to='projects' smooth className={styles.intro__button}>
          View my work{' '}
          <FontAwesomeIcon icon={faArrowRight} className={styles.right} />
        </Link>
      </div>
    </section>
  )
}

export default Home
