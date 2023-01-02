import { useState } from 'react';
import './form1.modules.scss';

export function Form1() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event: any) => {
    setValues({ ...values, firstName: event.target.value })
  }
  const handleLastNameInputChange = (event: any) => {
    setValues({ ...values, lastName: event.target.value })
  }
  const handleEmailInputChange = (event: any) => {
    setValues({ ...values, email: event.target.value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true)

      setValues({
        firstName: "",
        lastName: "",
        email: ""
      })

    }
    setSubmitted(true);

  }

  return (
    <div className="container">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid
            ? <div className="success-message">Success! Thank you for registering</div>
            : null
          }

          <input
            className="form-field"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
            id="first-name"
            placeholder="First Name"
          />
          {submitted && !values.firstName && !valid
            ? <span id="first-name-error">Please enter a first name</span>
            : null
          }

          <input
            className="form-field"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
            id="last-name"
            placeholder="Last Name"
          />
          {submitted && !values.lastName && !valid
            ? <span id="last-name-error">Please enter a last name</span>
            : null
          }
          <input
            className="form-field"
            type="text"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
            id="email"
            placeholder="Email"
          />
          {submitted && !values.email && !valid
            ? <span id="email-error">Please enter an email address</span>
            : null
          }

          <button
            className="form-field"
            type="submit"
          // disabled={(!values.firstName || !values.lastName || !values.email)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
