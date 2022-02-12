export interface IInitialState {
  num1: number;
  num2: number;
  result: number;
}

export interface IAction {
  type: string;
  payload: () => void;
}

export interface ICreateContext {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: IInitialState | undefined;
  dispatch?: any;
}
