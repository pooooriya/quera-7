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
    case MessageActionTypes.Send_New_Message:
      state.MessageList.push(action.payload);
      return state;
    case MessageActionTypes.Change_Messages:
      state.MessageList = action.payload;
      return state;
    default:
      return state;
  }
};
