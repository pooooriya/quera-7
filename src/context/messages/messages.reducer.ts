import {
  MessageState,
  ContextAction,
  MessageActionTypes,
} from "./../../@types/context/context.types";
export const MessageReducer = (
  state: MessageState,
  action: ContextAction<MessageActionTypes, any>
): MessageState => {
  switch (action.type) {
    case MessageActionTypes.Get_Current_Messages:
      state.roomId = action.payload.roomId;
      state.MessageList = action.payload.MessageList;
      return state;
    default:
      return state;
  }
};
