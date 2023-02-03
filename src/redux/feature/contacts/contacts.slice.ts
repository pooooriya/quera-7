import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactListState } from "../../../@types/context/context.types";
import { GetAllContactsAsync } from "./contacts.middleware";

const IntialState: ContactListState = {
  searchList: [],
  contactsList: [],
  isLoading: false,
};

const contactSlice = createSlice({
  initialState: IntialState,
  name: "contacts",
  reducers: {
    GetAllContacts: (state, action) => {
      state.contactsList = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllContactsAsync.pending, (state, action: any) => {
        state.isLoading = true;
      })
      .addCase(GetAllContactsAsync.fulfilled, (state, action: any) => {
        state.contactsList = action.payload;
        state.isLoading = false;
      })
      .addCase(GetAllContactsAsync.rejected, (state, action: any) => {
        state.isLoading = false;
      });
  },
});

export const { GetAllContacts } = contactSlice.actions;

export default contactSlice.reducer;
