import React, { FC } from 'react'

const Form: FC = () => {
    return (
        <>
            <div>
                <label>First Name : </label>
                <input name="fname" type={'text'} />
            </div>
            <div>
                <label>Last Name : </label>
                <input name="lname" type={'text'} />
            </div>
            <div>
                <label>City : </label>
                <input name="city" type={'text'} />
            </div>
            <div>
                <button>Insert</button>
            </div>
        </>
    )
}

export default Form