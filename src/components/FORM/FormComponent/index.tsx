import { useState } from "react";
import { Login } from "./formBase3";
import './styles.modules.scss';

interface FormProps {
  userName: string;
  passWord: string;
}

export function FormComponent() {
  const [form, setForm] = useState({
    userName: "",
    passWord: "",
  });

  // const onSubmitHandler = (val: any) => {
  //   setForm(val);
  //   console.log("Val:" + JSON.stringify(val))
  // };
  const onSubmitHandlerFunction = ({ userName, passWord }: FormProps) => {
    setForm({ userName, passWord });
    console.log(
      "Val:"
      + JSON.stringify({ userName, passWord })
    )
  };

  if (!form.userName || !form.passWord) {
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
          Password:{form.passWord}
        </div>
      </div>
    </>
  );
}

