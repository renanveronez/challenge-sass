import { useState } from "react";
import { Login } from "../FORM/FormComponent/formBase3";

interface FormProps {
  userName: string;
  passWord: string;
}

export function Welcome() {
  const [form, setForm] = useState({
    userName: "",
    passWord: "",
  });



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
          Welcome, {form.userName}!
        </div>
      </div>
    </>
  );
}
