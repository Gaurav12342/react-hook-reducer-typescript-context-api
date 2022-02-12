import React, { FC, useReducer } from 'react';
import FormComponent from '../component/FormComponent';
import ButtonComponent from '../component/ButtonComponent';
import AnswerComponent from '../component/AnswerComponent';
import { useCounter } from './useCounter';
import { ADDITION, MULTIPLICATION, DIVISION, SUBSTRACTION, ASSIGNVALUE } from '../action/actionsTypes';
import { IInitialState, IAction } from './counterInterface';
import { couterContext } from './context';

const RootComponent: FC = () => {

    const intialState: IInitialState = {
        num1: 0,
        num2: 0,
        result: 0
    }

    const { valuInitilization, addition, substraction, multiplication, division } = useCounter();

    const reducer = (state: IInitialState, action: IAction) => {
        switch (action.type) {
            case ASSIGNVALUE:
                return valuInitilization(state, action);
            case ADDITION:
                return addition(state);
            case SUBSTRACTION:
                return substraction(state);

            case MULTIPLICATION:
                return multiplication(state);

            case DIVISION:
                return division(state);
            default:
                return { ...state }
        }
    }

    const [state, dispatch]: any = useReducer<any>(reducer, intialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch({ type: ASSIGNVALUE, payload: { ...state, [name]: value } });
    }

    return <div>
        <couterContext.Provider value={{ handleChange, state, dispatch }}>
            <FormComponent />
            <AnswerComponent />
            <ButtonComponent />
        </couterContext.Provider>

    </div>;
};

export default RootComponent;
