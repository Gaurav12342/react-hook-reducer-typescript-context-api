import React, { FC, useContext } from 'react';
import { ADDITION, MULTIPLICATION, DIVISION, SUBSTRACTION } from '../action/actionsTypes';
import { couterContext } from '../component/index';


const ButtonComponent: FC = () => {
    const counterContext = useContext(couterContext);

    return <div>
        <button onClick={() => { counterContext.dispatch({ type: ADDITION }) }}>+</button>
        <button onClick={() => { counterContext.dispatch({ type: SUBSTRACTION }) }}>-</button>
        <button onClick={() => { counterContext.dispatch({ type: MULTIPLICATION }) }}>*</button>
        <button onClick={() => { counterContext.dispatch({ type: DIVISION }) }}>/</button>
    </div>;
};

export default ButtonComponent;
