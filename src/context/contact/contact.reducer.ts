import {
  ContactActionTypes,
  ContactListState,
  ContextAction,
} from "../../@types/context/context.types";

export const ContactsReducer = (
  state: ContactListState,
  action: ContextAction<ContactActionTypes, any>
): ContactListState => {
  switch (action.type) {
    case ContactActionTypes.Get_All_Contact:
      state.contactsList = action.payload;
      return state;
    case ContactActionTypes.Search_Contact:
      const filterContacts = state.contactsList.filter((n) =>
        n.name.includes(action.payload)
      );
      state.searchList = filterContacts;
      return state;
    default:
      return state;
  }
};
