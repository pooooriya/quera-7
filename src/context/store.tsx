import React, { createContext, useReducer, useState } from "react";
import { ContactsReducer } from "./contact/contact.reducer";
import {
  ContactState,
  ContextAction,
  ContextAppState,
} from "../@types/context/context.types";
import { MessageReducer } from "./messages/messages.reducer";

const IntialState: ContextAppState = {
  contacts: {
    searchList: [],
    contactsList: [],
  },
  messages: {
    MessageList: [],
    roomId: "",
  },
};
const AppContext = createContext<{
  state: ContextAppState;
  dispatch: React.Dispatch<ContextAction<any, any>>;
}>({
  state: IntialState,
  dispatch: () => null,
});

const combineReducer = (
  { contacts, messages }: ContextAppState,
  action: any
) => ({
  contacts: ContactsReducer(contacts, action),
  messages: MessageReducer(messages, action),
});
interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(combineReducer, IntialState); // flux
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
