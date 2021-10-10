import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const TodosContext = createContext();

export const TodosProvider = ({children, defaultState = initialState}) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            {children}
        </TodosContext.Provider>
    );
}