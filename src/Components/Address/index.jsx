import React from 'react'
import * as Yup from 'yup'
import { Formik , Field ,ErrorMessage , Form } from 'formik'


export const AddressForm = ({submit , setFormValues,prevValues}) => {
    return(
        <Formik
            initialValues={prevValues}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .required('Please enter your first name')
                .max(15 , 'Should not exceed 15 character'),

                lastName: Yup.string()
                .required('Required')
                .max(15, 'Should not exceed 15 characters'),

                email: Yup.string().email().required('Please enter an email address')
            })}

            onSubmit={(values) => {
                submit(1)
                setFormValues({...values,...prevValues})
            }}
        >
        <Form>
            <label htmlFor="firstName" >First Name:</label>
            <Field type="text" name='firstName' />
            <ErrorMessage name="firstName" />
            <br />
            <label htmlFor="lastName" >Last Name:</label>
            <Field type="text" name='lastName' />
            <ErrorMessage name="lastName" />
            <br />
            <label htmlFor="email" > Email Address:</label>
            <Field type="email" name='email' />
            <ErrorMessage name="email" />
            <br />
            <button type="submit" >Next</button>
        </Form>
        </Formik>
    )
}

