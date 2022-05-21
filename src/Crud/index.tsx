import React, { createContext, FC, useReducer } from 'react'
import Form from './Form';
import { INSERT, INITILIZE_VALUE, UPDATE, DELETE, GET } from '../action/actionsTypes';
import Table from './Table';
export interface IInitialState {
    fname?: string;
    lname?: string;
    city?: string;
    results?: any;
}
export interface IAction {
    type?: string;
    payload?: any;
}

export interface IUserContext {
    state?: IInitialState,
    dispatch?: any,
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const userContext = createContext<IUserContext>({});

const Crud: FC = () => {

    const initialState: IInitialState = {
        fname: "",
        lname: "",
        city: "",
        results: []
    };

    const reducer = (state = initialState, action: IAction) => {
        switch (action.type) {
            case INITILIZE_VALUE:
                return { ...state, ...action.payload }
            case INSERT:
                return { ...state, results: state.results.concat({ ...state, ...action.payload }) }
            case DELETE:
                return { ...state, }
            default:
                return { ...state }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: INITILIZE_VALUE, payload: { ...state, [name]: value } });

    }
    return (
        <div>
            <h1>Crud</h1>
            <userContext.Provider value={{ state, dispatch, handleChange }}>
                <Form />
                <Table />
            </userContext.Provider>
        </div>
    )
}

export default Crud