import React, {useState} from 'react'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../components/helper'

const Profile = () => {
  const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))

  if (!user) {
    setTimeout(() => navigate('/login'), 4000)
    return <p>
      Ovu stranicu ne možete pregledati bez prijave! <br/>Uskoro ćete biti preusmjereni na stranicu za prijavu.
    </p>
  }

  return (
    <main>
      Logirani ste kao {user}
    </main>
  )
}

export default Profile