import React, {useState} from 'react'
import {navigate} from 'gatsby'
import styles from './login.module.css'
import {myLocalStorage} from '../../src/components/helper'

const users = [
{
  username: "ivan",
  password: "1234"
},
{
  username: "mario",
  password: "1234"
},
]

const Login = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", username)
        setError('Success')
        return navigate('/')
      }
        setError('Pogrešno korisničko ime ili lozinka')
    }, 2000)
  }
  
  return (
  <main className={styles.background} onKeyDown={key => {
    if (key.key === "Enter")
      return submit()
  }}>
    <section className={styles.container}>
      <section className={styles.field}>
        <label htmlFor="username">
          Korisničko ime
        </label>
        <input name="username" onChange={e => setUserName(e.target.value)}/>
      </section>
      <section className={styles.field}>
        <label htmlFor="password">
          Lozinka
        </label>
        <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
      </section>
      <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
      <button className={styles.loginButton} onClick={() => submit()}>
        {loading ? 'Učitavanje...' : 'Prijava'}
      </button>
    </section>
  </main>
)}

export default Login