import React, { createContext, useState } from "react";

export const CounterShoppingList = createContext();

function CounterShoppingListProvider({ children }) {

  const [counter, setCounter] = useState(0);

  return (
    <CounterShoppingList.Provider value={{counter, setCounter}}>
      {children}
    </CounterShoppingList.Provider>
  );
}

export default CounterShoppingListProvider;
