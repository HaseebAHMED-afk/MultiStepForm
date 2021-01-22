import React from 'react'
import * as Yup from 'yup'
import { Formik , Field ,ErrorMessage , Form } from 'formik'


export const PaymentForm = ({submit,setFormValues,prevValues}) => {
    return(
        <Formik
            initialValues={prevValues}
            validationSchema={Yup.object({
                cardNumber: Yup.string()
                .required('Required')
                .max(15 , 'Should not exceed 15 character'),

                pinNumber: Yup.string()
                .required('Required')
                .max(4, 'Should not exceed 4 characters'),
            })}

            onSubmit={(values) => {
                submit(2)
                setFormValues({...values,...prevValues})
            }}
        >
        <Form  >
            <label htmlFor="cardNumber" >Card Number:</label>
            <Field type="text" name='cardNumber' />
            <ErrorMessage name="cardNumber" />
            <br />
            <label htmlFor="pinNumber" >Pin Number:</label>
            <Field type="text" name='pinNumber' />
            <ErrorMessage name="pinNumber" />
            <br />
            <button type="submit" >Next</button>
            <button onClick={() => submit(0)} >Back</button>
        </Form>
        </Formik>
    )
}

