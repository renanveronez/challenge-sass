import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface FormProps {
  userName: string;
  passWord: string;
}
interface SubmitFormProps {
  onSubmitHandler: (props: FormProps) => void;
}

export function Login(submit: SubmitFormProps) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const { username, password } = login;

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    submit.onSubmitHandler({
      userName: username,
      passWord: password
    });
    navigate('/')
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setLogin(dataLogin => ({ ...dataLogin, [name]: value }))
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
          <p>Form Base3:  </p>
          <p> {login.username} </p>
          <p> {login.password} </p>
        </div>
      </div>
    </div>
  );
}
