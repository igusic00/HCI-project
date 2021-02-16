import React from 'react'
import { Link } from 'gatsby'
import styles from './style.module.css'

const loggedIn = () => !!localStorage.getItem('loggedIn')

const Login = (props) => (
    <nav className={styles.prijava}>
      <Link to={'/login'}>
            <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'ODJAVA' : 'PRIJAVA'}
            </li>
      </Link>
        {loggedIn() && <Link to={'/profile'}>
            <li>
                Profil
            </li>
      </Link>}
    </nav>
)

export default Login