import {
  ContextAction,
  UserAppState,
  UserActionTypes,
} from "./../../@types/context/context.types";
export const UserReducer = (
  state: UserAppState,
  action: ContextAction<UserActionTypes, any>
): UserAppState => {
  switch (action.type) {
    case UserActionTypes.Login_Success:
      state.token = action.payload.token;
      state.username = action.payload.username;
      return state;
    default:
      return state;
  }
};
