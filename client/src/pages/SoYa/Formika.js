import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Validationaaa from '../../components/Soya/Validationaaa'

import Axios from 'axios'

function Formika() {
  const createUser = async (fields) => {
    let formData = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      password: fields.password,
      birthDate: fields.birthDate,
      age: fields.age,
    }
    console.log(formData)
    const isValid = await Validationaaa.isValid(formData)
    console.log(isValid)
    if (isValid) {
      register(formData)
    } else {
      alert('請輸入正確的格式資料')
    }
  }

  const register = (formData) => {
    Axios.post('http://localhost:3001/register', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      birthDate: formData.birthDate,
      age: formData.age,
    }).then((response) => {
      console.log(response)
    })
    // props.history.push('/')
    // setRedirectToReferrer(true)
  }

  return (
    <div className="App">
      <h1
        style={{
          fontFamily: 'monospace',
          fontSize: 40,
          color: 'coral',
        }}
      >
        FORMIK Example
      </h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          birthDate: '',
          age: '',
        }}
        validationSchema={Validationaaa}
        onSubmit={(fields) => {
          console.log(fields)
        }}
      >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <Field name="firstName" type="text" placeholder="First Name" />
          <ErrorMessage name="firstName" className="invalid-feedback">
            {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>

          <Field name="lastName" type="text" placeholder="Last Name" />
          <ErrorMessage name="lastName" className="invalid-feedback">
            {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage
            name="email"
            component="div"
            className="invalid-feedback"
            style={{ color: 'red', fontWeight: 'bold' }}
          />
          <Field name="password" type="text" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="div"
            className="invalid-feedback"
            style={{ color: 'red', fontWeight: 'bold' }}
          />
          <Field name="birthDate" type="date" placeholder="Birth Date" />
          <ErrorMessage
            name="birthDate"
            component="div"
            className="invalid-feedback"
            style={{ color: 'red', fontWeight: 'bold' }}
          />
          <Field name="age" type="number" placeholder="Age" />
          <ErrorMessage
            name="age"
            component="div"
            className="invalid-feedback"
            style={{ color: 'red', fontWeight: 'bold' }}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Formika
