import React, {useState} from 'react'

import {navigate} from 'gatsby'

const Profile = () => {
  const [user, setUser] = useState(localStorage.getItem('loggedIn'))

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