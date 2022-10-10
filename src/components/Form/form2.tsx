import { useState } from "react";
import './form2.modules.scss';


export function Form2() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [showMessage, setShowMessage] = useState(false);

  const { username, password } = data;

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    setShowMessage(!showMessage)
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="register-form">
            <label>Username:</label>
            <input
              className="form-field"
              type="text"
              id="username-input"
              name="username"
              value={username}
              required
              onChange={changeHandler}
            />
            <label>Password:</label>
            <input
              className="form-field"
              type="password"
              id="password-input"
              value={password}
              name="password"
              required
              onChange={changeHandler}
            />

            <button
              className="form-field"
              id="login-button"
              type="submit"
              name="submit"
              onClick={submitHandler}
              disabled={(!username || !password)}
            >
              Send
            </button>
          </div>
          {showMessage
            ?
            <div className="data-fields">
              <p>Name: {data.password}</p>
              <p>Password: {data.password}</p>
            </div>
            : null
          }

        </div>
      </div>
    </>
  )
}
