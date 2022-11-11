import { useState } from "react";
import { Login } from "./formBase";
import './styles.modules.scss';

interface FormProps {
  userName: string;
  password: string;
}

export function FormComponent() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  // const onSubmitHandler = (val: any) => {
  //   setForm(val);
  //   console.log("Val:" + JSON.stringify(val))
  // };
  const onSubmitHandlerFunction = ({ userName, password }: FormProps) => {
    setForm({ userName, password });
    console.log(
      "Val:"
      + JSON.stringify({ userName, password })
    )
  };

  if (!form.userName || !form.password) {
    return <Login onSubmitHandler={onSubmitHandlerFunction} />;
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

