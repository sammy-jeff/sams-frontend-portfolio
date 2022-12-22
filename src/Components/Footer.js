import { faAngleDoubleUp, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-scroll'
import styles from '../Css/footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <Link smooth to='home'>
        <div className={styles.go__up__container}>
          <FontAwesomeIcon icon={faAngleDoubleUp} className={styles.go__up} />
        </div>
      </Link>
      <div className={styles.socials}>
        <a href='https://github.com/sammy-jeff'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/okoye-chibuike-samuel-179323223/'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <p>
        Okoye Samuel{' '}
        <span>
          {' '}
          <FontAwesomeIcon icon={faCopyright} />
          {new Date().getFullYear()}
        </span>
      </p>
    </footer>
  )
}

export default Footer
