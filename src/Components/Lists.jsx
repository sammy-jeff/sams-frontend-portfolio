import React from 'react'
import { Link } from 'react-scroll'
import styles from '../Css/nav.module.css'
function Lists() {
  return (
    <>
      <li >
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='home'
     >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='about'
          >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='projects'
          >
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='contact'
          >
          Contact
        </Link>
      </li>
    </>
  )
}

export default Lists
