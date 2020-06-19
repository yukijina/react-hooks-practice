import React, {useState} from 'react';

//by declairing the initialfomr out side the function,
//it is easier to clear form after submission
const initialFormState = { 
  username: "",
  email: "",
  password: ""
}

export default function Register() {
  const [form, setForm] = useState(initialFormState)
  const [user, setUser] = useState(null)

  const handleChange = event => {
    //event.targget... only update one object (like username only) so we need a spread operator
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
 
  const handleSubmit = event => {
    event.preventDefault()
    setUser(form)
    setForm(initialFormState)
  }

  return (
  <div>
    <div
      style={{
        textAlign: "center"
      }}
      >
      <h2>Register</h2>
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
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input 
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange} 
          value={form.email} 
       />
        <input 
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
      {user && JSON.stringify(user, null, 2)}
  </div>)
}