import React, { createContext, useReducer, useState } from "react";
import { ContactsReducer } from "./contact/contact.reducer";
import {
  ContactState,
  ContextAction,
  ContextAppState,
} from "../@types/context/context.types";
import { MessageReducer } from "./messages/messages.reducer";

const IntialState: ContextAppState = {
  contacts: [],
  messages: {
    MessageList: [],
    roomId: "",
  },
};
const AppContext = createContext<{
  state: ContextAppState;
  search: ContactState[];
  dispatch: React.Dispatch<ContextAction<any, any>>;
  setSearch: React.Dispatch<React.SetStateAction<ContactState[]>>;
}>({
  state: IntialState,
  search: [],
  dispatch: () => null,
  setSearch: () => null,
}); //store

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
  const [search, setSearch] = useState<ContactState[]>([]);
  return (
    <AppContext.Provider value={{ state, dispatch, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
