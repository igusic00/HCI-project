import React from 'react'
import styles from './style.module.css'
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'

const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || 'navigationBar']}>
      {navTabs.map(({tab, to}) => (
        <Link to={to} >
            <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
        </Link>)
      )}
  </nav>
)

export default NavigationBar