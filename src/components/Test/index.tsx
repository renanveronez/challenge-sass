import React, { useState } from "react"
import './styles.modules.scss';


export function Test() {
  let [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setLogin(dataUser => ({ ...dataUser, [name]: value }))
  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="form-field"
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            className="form-field"
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={!login.username || !login.password}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}