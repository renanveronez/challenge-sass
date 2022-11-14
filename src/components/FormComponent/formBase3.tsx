import React, { useState } from "react";

interface FormProps {
  userName: string;
  passWord: string;
}

interface SubmitFormProps {
  onSubmitHandler: (props: FormProps) => void;
}

export function Login(submit: SubmitFormProps) {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const { username, password } = login;

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log({ username, password })
    submit.onSubmitHandler({
      userName: username,
      passWord: password
    });
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const name = event.target.name;
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setLogin(dataLogin => ({ ...dataLogin, [name]: value }))
    // console.log(event.target.value)
  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="register-form" onSubmit={submitForm}>
          <label>Username:</label>
          <input
            className="form-field"
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            className="form-field"
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={(!login.username || !login.password)}
          >
            Submit
          </button>
        </form>
        <div className="form-results">
          <p>Forbase3:  </p>
          <p> {login.username} </p>
          <p> {login.password} </p>
        </div>
      </div>
    </div>
  );
}
