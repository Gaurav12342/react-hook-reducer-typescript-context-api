import React, { FC, useContext } from 'react';
import { couterContext } from '../component/index';

const FormComponent: FC = () => {
    const formValue = useContext(couterContext);

    return <div>
        <h4>Form</h4>
        <div>
            <label>Number 1</label>
            <input type="text" name='num1' onChange={formValue.handleChange} />
        </div>
        <div>
            <label>Number 2</label>
            <input type="text" name='num2' onChange={formValue.handleChange} />
        </div>
        <div></div>
    </div>;
};

export default FormComponent;
