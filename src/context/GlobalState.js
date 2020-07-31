import React, {createContext, useReducer} from 'react';
import AppReducer from './appreducer'

//initial state 

const initialState  = {
    transactions:[ 
        {id: 1, 
         text: 'Rent',
         amount: -200
        },

        {id: 2, 
         text: 'Games',
         amount: -20
        },

        {id: 2, 
         text: 'Payment',
         amount: 300
        },
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
        </GlobalContext.Provider>)
}