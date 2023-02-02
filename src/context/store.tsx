import React, { createContext, useReducer, useState } from "react";
import { ContactsReducer } from "./contact/contact.reducer";
import {
  ContextAction,
  ContextAppState,
} from "../@types/context/context.types";
import { MessageReducer } from "./messages/messages.reducer";
import { UserReducer } from "./user/user.reducer";

const IntialState: ContextAppState = {
  contacts: {
    searchList: [],
    contactsList: [],
  },
  messages: {
    MessageList: [],
    roomId: "",
  },
  user: {
    token: "",
    username: "",
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
  { contacts, messages, user }: ContextAppState,
  action: any
) => ({
  contacts: ContactsReducer(contacts, action),
  messages: MessageReducer(messages, action),
  user: UserReducer(user, action),
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
