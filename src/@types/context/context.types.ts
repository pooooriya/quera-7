export type ContactState = {
  avatar: string;
  name: string;
  id: number;
  lastMessageSent: string;
  lastMessage: string;
  roomId: string;
};

export type AppContextIntialState = {
  contacts: ContactState[];
};

export enum ContactActionTypes {
  Get_All_Contact = "Get_All_Contact",
  Search_Contact = "Search_Contact",
}

export type ContextAction<T, K> = {
  type: T;
  payload?: K;
};

export type MessageState = {
  roomId: string;
  MessageList: MessageItems[];
};

export type MessageItems = {
  isSentByOwner: boolean;
  value: string;
  id: number;
};

export enum MessageActionTypes {
  Get_Current_Messages = "Get_Current_Messages",
  Send_New_Message = "Send_New_Message",
  Remove_Message = "Remove_Message",
  Exit_Room = "Exit_Room",
}

export type ContextAppState = {
  contacts: ContactListState;
  messages: MessageState;
  user: UserAppState;
};

export type UserAppState = {
  username: string;
  token: string;
};

export type ContactListState = {
  contactsList: ContactState[];
  searchList: ContactState[];
};

export enum UserActionTypes {
  Login_Success = "Login_Success",
}
