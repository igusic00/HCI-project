import React from 'react'

import styles from './style.module.css'

const navTabs = ['Naslovnica', 'Vijesti', 'Oglasnik', 'Udruge', 'Natječaji','Ostalo']

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    {navTabs.map(tab => <li className={tab==='Naslovnica' ? styles.active : ''}>
      {tab}</li>
    )}
  </nav>
)

export default NavigationBar