import { faListDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from '../Css/nav.module.css'
import Lists from './Lists'
function Nav() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 700
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => setWidth(window.innerWidth))
    return () =>
      window.removeEventListener('scroll', () => setWidth(window.innerWidth))
  }, [])
  return (
    <div className={styles.topMost}>
      <nav className={styles.nav__container}>
        {width > breakPoint ? (
          <ul className={styles.lists}>
            <Lists setShowMenu={setShowMenu} />
          </ul>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faListDots}
              className={styles.menu__icon}
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            />
            {}
          </>
        )}
      </nav>
      {showMenu && (
        <nav className={styles.nav__small}>
          <ul className={styles.small__list}>
            <Lists setShowMenu={setShowMenu} />
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Nav
