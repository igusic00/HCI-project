import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
      <li className={styles.active}>Naslovnica</li>
      <li>Vijesti</li>
      <li>Oglasnik</li>
      <li>Udruge</li>
      <li>Natječaji</li>
      <li>Ostalo</li>
  </nav>
)

export default NavigationBar