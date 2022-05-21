import { FC, useContext } from 'react'
import { userContext } from './index';
import { DELETE } from '../action/actionsTypes';

const Table: FC = () => {
    const data = useContext(userContext);
    return (
        <div>
            <table style={{ border: '1px solid black' }}>
                <tr style={{ border: '1px solid black' }}>
                    <th style={{ border: '1px solid black' }}>First Name</th>
                    <th style={{ border: '1px solid black' }}>Second Name</th>
                    <th style={{ border: '1px solid black' }}>City</th>
                    <th style={{ border: '1px solid black' }}>Actions</th>
                </tr>
                {data?.state?.results?.map((dd: any, index: any) => {
                    return (
                        <tr key={index} style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black' }}>{dd.fname}</td>
                            <td style={{ border: '1px solid black' }}>{dd.lname}</td>
                            <td style={{ border: '1px solid black' }}>{dd.city}</td>
                            <td style={{ border: '1px solid black' }}><button onClick={() => data.dispatch({ type: DELETE, payload: dd })}>Delete</button>&nbsp;<button>Update</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table