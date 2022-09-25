import { useState } from "react";
import './form3.modules.scss';

export function Form4(props: any) {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = data;

  const handleUsernameInputChange = (event: any) => {
    setData({ ...data, username: event.target.value })
  }

  const handlePasswordInputChange = (event: any) => {
    setData({ ...data, password: event.target.value })
  }

  const submitForm = (e: any) => {
    e.preventDefault();
    props.onSubmitHandler({
      userName: username,
      password: password
    });
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
      </div>
    </div>
  );
}


function LoginForm() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const onSubmitHandler = (val: any) => {
    setForm(val);
    console.log("Val:" + JSON.stringify(val))
  };

  if (!form.userName || !form.password) {
    return <Form4 onSubmitHandler={onSubmitHandler} />;
  } else {
    console.log("Return:" + JSON.stringify(form))
  }

  return (
    <>
      <div>
        <div>
          UserName:{form.userName}
        </div>
        <div>
          Password:{form.password}
        </div>
      </div>
    </>
  );
}

export default LoginForm;