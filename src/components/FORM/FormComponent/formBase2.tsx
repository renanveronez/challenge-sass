import React, { useState } from "react";
interface FormProps {
  userName: string;
  passWord: string;
}

interface SubmitFormProps {
  onSubmitHandler: (props: FormProps) => void;
}

export function Login(submit: SubmitFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ username, password })
    submit.onSubmitHandler({
      userName: username,
      passWord: password
    });
  }

  const handleUsernameInputChange = (event: any) => {
    setUsername(event.target.value)
  }

  const handlePasswordInputChange = (event: any) => {
    setPassword(event.target.value)
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
            // name="userName"
            value={username}
            onChange={handleUsernameInputChange}
          />
          <label>Password:</label>
          <input
            className="form-field"
            type="password"
            id="password-input"
            // name="password"
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
