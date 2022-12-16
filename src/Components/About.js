import styles from '../Css/about.module.css'

import SingleCapability from './AboutComponents/SingleCapability'
import AboutHeader from './AboutComponents/AboutHeader'
import BottomComponents from './AboutComponents/BottomComponents'

function About() {
  // const [ref, inView] = useInView()

  return (
    <section className={styles.about} id='about'>
      <AboutHeader />
      <div className={styles.capabilities}>
        <SingleCapability />
      </div>
      <div className={styles.bottom}>
        <BottomComponents />
      </div>
    </section>
  )
}

export default About
