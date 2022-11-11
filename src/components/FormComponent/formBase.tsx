import React, { useState } from "react";

interface FormProps {
  userName: string;
  password: string;
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
    console.log({ username, password })
    submit.onSubmitHandler({
      userName: username,
      password: password
    });
  }

  const handleUsernameInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLogin({ ...login, username: event.currentTarget.value })
    // console.log(event.target.value)
  }

  const handlePasswordInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: event.currentTarget.value })
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
            id="user-input"
            name="userName"
            value={username}
            onChange={handleUsernameInputChange}
          />
          <label>Password:</label>
          <input
            className="form-field"
            type="password"
            id="password-input"
            name="password"
            value={password}
            onChange={handlePasswordInputChange}
          />
          <button
            type="submit"
            disabled={(!username || !password)}
          >
            Submit
          </button>
        </form>
        {/* <div className="form-results">
          <p> {login.username} </p>
          <p> {login.password} </p>
        </div> */}
      </div>
    </div>
  );
}
