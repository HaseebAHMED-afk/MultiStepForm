import React from 'react'


export const ReviewForm = ({submit,values}) => {
    return(
        <div>
            <p>First Name: {values.firstName}</p><br />
            <p>Last Name: {values.lastName}</p><br />
            <p>Email: {values.email}</p><br />
            <p>Card Number: {values.cardNumber}</p><br />
            <button onClick={() => submit(1)} >Back</button>
        </div>
    )
}

