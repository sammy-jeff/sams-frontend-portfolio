import React from 'react'
import { Link } from 'react-scroll'
import styles from '../Css/nav.module.css'
function Lists({ setShowMenu }) {
  return (
    <>
      <li onClick={() => setShowMenu(false)}>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='home'
          onClick={() => setShowMenu(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='about'
          onClick={() => setShowMenu(false)}>
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='projects'
          onClick={() => setShowMenu(false)}>
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass={styles.active}
          smooth
          spy
          to='contact'
          onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </li>
    </>
  )
}

export default Lists
