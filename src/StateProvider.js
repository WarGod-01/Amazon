import React,{createContext,useContext,useReducer} from "react";

export const StateContext= createContext();//prepare the data Layer

//wrapper
export const StatePovider=({reducer,intialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from datalayer
export const useStateValue=()=>useContext(StateContext);
