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
    case MessageActionTypes.Remove_Message:
      state.MessageList = state.MessageList.filter(
        (n) => n.id !== action?.payload
      );
      return state;
    case MessageActionTypes.Exit_Room:
      state.MessageList = [];
      state.roomId = "";
      return state;
    default:
      return state;
  }
};
