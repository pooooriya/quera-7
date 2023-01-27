import React, { createContext, useReducer, useState } from "react";

const AppContext = createContext({}); //store
const IntialState = {
  Contacts: {
    List: [],
  },
};

// const ContactsReducer = (state, action) => {
//   console.log(state, action);
//   return state;
// };

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  //   const [state, dispatch] = useReducer(ContactsReducer, IntialState);
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export { AppContext, AppContextProvider };
