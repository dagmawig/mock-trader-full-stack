import React, { createContext, useContext, useReducer } from 'react';


export const StateContext = createContext();

export const StateWrap = ({reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    );
    
};

//used to send and receive from data layer
export const useStateValue = () => useContext(StateContext);