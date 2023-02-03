import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { combineReducers } from "redux";
import { ContactsReducer } from "./contacts/contacts.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const ReduxStore = () => {
  return createStore(
    combineReducers({
      contacts: ContactsReducer,
    }),
    composeWithDevTools(applyMiddleware(Thunk))
  );
};
