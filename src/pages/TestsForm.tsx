import './tests.modules.scss';

import { Form1 } from '../components/Form/form1';
import { Form2 } from '../components/Form/form2';
import { LoginForm } from '../components/Form/form3';
import { FormComponent } from '../components/FormComponent';

export function TestsForm() {
  return (
    <div className='container'>
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Form5 /> */}
      <FormComponent />
      {/* <LoginForm /> */}
    </div>
  )
}
