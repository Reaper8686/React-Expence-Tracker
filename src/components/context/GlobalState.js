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

// const appReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TRANSACTION":
//       return [
//         ...state,
//         {
//           id: state.length + 1,
//           text: action.payload.text,
//           amount: action.payload.amount,
//         },
//       ];
//     case "DELETE_TRANSACTION":
//       return state.filter((val) => {
//         return val.id !== action.payload.id;
//       });

//     default:
//       return state;
//   }
// };

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
