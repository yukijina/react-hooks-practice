import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      username,
      password
    }
    //usually it the data is send to backend but here, we just display 
    setUser(userData)
    //empty input data after submitted (need to add "value=" in the input)
    setUsername("")
    setPassword("")
  }

  return( 
    <div>
      <div
      style={{
        textAlign: "center"
      }}
      >
      <h2>Log In</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          placeholder="username"
          onChange={event => setUsername(event.target.value)} 
          value={username}
        />
        <input 
          type="password"
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
      </div>

      {user && JSON.stringify(user)}
      {user && JSON.stringify(user, null, 2)}
      {user && JSON.stringify(user, null, 4)}
    </div>
  )
}