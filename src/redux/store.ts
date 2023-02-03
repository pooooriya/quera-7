import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./feature/contacts/contacts.slice";

export const ReduxStore = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});

export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppDispatch = typeof ReduxStore.dispatch;
