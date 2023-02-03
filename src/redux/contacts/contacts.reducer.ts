import {
  ContactActionTypes,
  ContactListState,
} from "../../@types/context/context.types";

const IntialState: ContactListState = {
  searchList: [],
  contactsList: [],
};
export const ContactsReducer = (
  state: any = IntialState,
  action: any
): ContactListState => {
  switch (action.type) {
    case ContactActionTypes.Get_All_Contact:
      return { ...state, contactsList: action.contacts };
    case ContactActionTypes.Search_Contact:
      const filterContacts = state.contactsList.filter((n: any) =>
        n.name.includes(action.payload)
      );
      return { ...state, searchList: filterContacts };
    default:
      return state;
  }
};
