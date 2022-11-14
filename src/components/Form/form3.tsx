import { useState, useRef } from "react";
import './form3.modules.scss';

function Form3(props: any) {
  const userName = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function submitForm(e: any) {
    e.preventDefault();
    // if (userName.current && password.current != null) {
    //   console.log(
    //     "SubmitForm:" +
    //     {
    //       userName: userName.current.value,
    //       password: password.current.value
    //     });
    // }
    if (userName.current && password.current != null) {
      props.onSubmitHandler({
        userName: userName.current.value,
        password: password.current.value
      });
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="register-form" onSubmit={submitForm}>
          <label>Username:</label>
          <input
            className="form-field"
            type="text"
            name="userName"
            ref={userName}
            id="user-input"
          />
          <label>Password:</label>
          <input
            className="form-field"
            type="password"
            name="password"
            ref={password}
            id="password-input"
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


export function LoginForm() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const onSubmitHandler = (val: any) => {
    setForm(val);
    console.log("Val:" + JSON.stringify(val))
  };

  if (!form.userName || !form.password) {
    return <Form3 onSubmitHandler={onSubmitHandler} />;
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