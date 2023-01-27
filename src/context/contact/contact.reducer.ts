import {
  ContactActionTypes,
  ContactState,
  ContextAction,
} from "../../@types/context/context.types";

export const ContactsReducer = (
  state: ContactState[],
  action: ContextAction<ContactActionTypes, any>
): ContactState[] => {
  switch (action.type) {
    case ContactActionTypes.Get_All_Contact:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
