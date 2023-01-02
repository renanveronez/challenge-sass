import './tests.modules.scss';

import { Form1 } from '../components/FORM/Form/form1';
import { Form2 } from '../components/FORM/Form/form2';
import { LoginForm } from '../components/FORM/Form/form3';
import { FormComponent } from '../components/FORM/FormComponent';
import { SearchTool } from '../components/SearchTool';

export function TestsForm() {
  return (
    <div className='container'>
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <LoginForm /> */}
      <FormComponent />
      {/* <SearchTool /> */}
    </div>
  )
}
