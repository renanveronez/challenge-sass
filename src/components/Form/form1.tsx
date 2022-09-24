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
    }

    setSubmitted(true);

    setValues({
      firstName: "",
      lastName: "",
      email: ""
    })
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
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName
            ? <span id="first-name-error">Please enter a first name</span>
            : null
          }

          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName
            ? <span id="last-name-error">Please enter a last name</span>
            : null
          }
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email
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
