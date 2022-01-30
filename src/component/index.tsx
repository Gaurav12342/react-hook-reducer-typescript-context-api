import React, { FC, createContext, useReducer } from 'react';
import FormComponent from '../component/FormComponent';
import ButtonComponent from '../component/ButtonComponent';
import AnswerComponent from '../component/AnswerComponent';
import { ADDITION, MULTIPLICATION, DIVISION, SUBSTRACTION, ASSIGNVALUE } from '../action/actionsTypes';

interface IInitialState {
    num1: number,
    num2: number,
    result: number
};

interface IAction {
    type: string,
    payload: () => void
}

interface ICreateContext {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    state?: any,
    dispatch?: any
}

export const couterContext = createContext<ICreateContext>({});

const RootComponent: FC = () => {

    const intialState: IInitialState = {
        num1: 0,
        num2: 0,
        result: 0
    }

    const reducer = (state: IInitialState, action: IAction) => {
        switch (action.type) {
            case ASSIGNVALUE:
                return {
                    ...state,
                    ...action.payload
                }
            case ADDITION:
                return {
                    ...state,
                    result: +state.num1 + +state.num2
                }
            case SUBSTRACTION:
                return {
                    ...state,
                    result: +state.num1 - +state.num2
                }

            case MULTIPLICATION:
                return {
                    ...state,
                    result: +state.num1 * +state.num2
                }

            case DIVISION:
                return {
                    ...state,
                    result: +state.num1 / +state.num2
                }
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
