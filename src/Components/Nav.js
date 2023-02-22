import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {  useEffect, useState } from 'react'

import styles from '../Css/nav.module.css'
import Lists from './Lists'
function Nav() {
  const [activeClass,setActiveClass] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>setActiveClass(false))
    window.removeEventListener("scroll",()=>setActiveClass(false))
  },[])
  return (
    <header className={styles.topMost}>
      <nav className={styles.nav__container}>
        <div className={styles.toggle_container}>
        <FontAwesomeIcon icon={activeClass?faTimes:faBars} onClick={()=>setActiveClass(!activeClass)}/>
        </div>
        <div className={`${styles.nav_elements} ${activeClass&&styles.active_class}`}>
          <ul>
            <Lists/>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
