import {createContext, useReducer, useState} from "react";

const initialState = [
  {
    id: 1,
    text: "Car",
    amount: 3000,
  },
  {
    id: 1,
    text: "Loan",
    amount: -3000,
  },
];

export const GlobalContext = createContext(initialState);

export function GlobalProvider({children}) {
  const [state, setState] = useState(initialState);

  const addTransaction = (trans) => {
    let inistate = [
      ...state,
      {id: state.length + 1, text: trans.text, amount: trans.amount},
    ];
    setState(inistate);
  };

  const deleteTransaction = (id) => {
    let inistate = state.filter((val) => {
      return val.id !== id;
    });
    setState(inistate);
  };

  return (
    <GlobalContext.Provider value={{state, addTransaction, deleteTransaction}}>
      {children}
    </GlobalContext.Provider>
  );
}
