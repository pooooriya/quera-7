import React, { createContext, useReducer, useState } from "react";
import { ContactsReducer } from "./contact/contact.reducer";
import { ContactState, CreateContext } from "../@types/context/context.types";

const IntialState: ContactState[] = [];
const AppContext = createContext<CreateContext>({
  state: [],
  dispatch: () => null,
}); //store

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(ContactsReducer, IntialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
