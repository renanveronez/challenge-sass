import './tests.modules.scss';

import { ButtonLike } from '../components/ButtonLike';

import { Form1 } from '../components/Form/form1';
import { Form2 } from '../components/Form/form2';

import { LoginForm } from '../components/Form/form3';
import ButtonLike2 from '../components/ButtonLike/buttonLike2';
import { ButtonLike3 } from '../components/ButtonLike/buttonLike3';
import { FormComponent } from '../components/FormComponent';


// import LoginForm from '../components/Form/form3';
// import LoginForm from '../components/Form/form4';


export function Tests() {
  return (
    <div className='container'>
      <Form1 />
      {/* <Form2 /> */}
      {/* <Form5 /> */}
      {/* <FormComponent /> */}
      {/* <LoginForm /> */}
      {/* <ButtonLike3 /> */}
      {/* <ButtonLike2 /> */}
    </div>
  )
}
