import { IAction, IInitialState } from "./counterInterface";
export const useCounter = () => {
  const valuInitilization = (state: IInitialState, action: IAction) => {
    return {
      ...state,
      ...action.payload,
    };
  };
  const addition = (state: IInitialState) => {
    return {
      ...state,
      result: +state.num1 + +state.num2,
    };
  };

  const substraction = (state: IInitialState) => {
    return {
      ...state,
      result: +state.num1 - +state.num2,
    };
  };

  const multiplication = (state: IInitialState) => {
    return {
      ...state,
      result: +state.num1 * +state.num2,
    };
  };

  const division = (state: IInitialState) => {
    return {
      ...state,
      result: +state.num1 / +state.num2,
    };
  };
  return {
    valuInitilization,
    addition,
    substraction,
    multiplication,
    division,
  };
};
