import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import styles from './style.module.css'

const NavigationHeader = ( props ) => (
  <section className={styles.navigationHeader}>
      <Logo />
      <Navigation activeTab={props.activeTab} />
  </section>
)
export default NavigationHeader