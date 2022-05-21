import React, { FC, useContext } from 'react'
import { userContext } from './index';
import { INSERT } from '../action/actionsTypes';


const Form: FC = () => {
    const data = useContext(userContext);
    return (
        <>
            <div>
                <label>First Name : </label>
                <input name="fname" type={'text'} onChange={data.handleChange} />
            </div>
            <div>
                <label>Last Name : </label>
                <input name="lname" type={'text'} onChange={data.handleChange} />
            </div>
            <div>
                <label>City : </label>
                <input name="city" type={'text'} onChange={data.handleChange} />
            </div>
            <div>
                <button type='submit' onClick={() => data.dispatch({ type: INSERT })}>Insert</button>
            </div>
        </>
    )
}

export default Form