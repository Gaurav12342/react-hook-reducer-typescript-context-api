import { createContext } from "react";
import { ICreateContext } from "./counterInterface";

export const couterContext = createContext<ICreateContext>({});
