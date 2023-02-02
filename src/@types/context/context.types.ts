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
  payload: K;
};

export type MessageState = {
  roomId: string;
  MessageList: MessageItems | [];
};

export type MessageItems = {
  isSentByOwner: boolean;
  value: string;
  id: number;
};

export enum MessageActionTypes {
  Get_Current_Messages = "Get_Current_Messages",
}

export type ContextAppState = {
  contacts: ContactListState;
  messages: MessageState;
};

export type ContactListState = {
  contactsList: ContactState[];
  searchList: ContactState[];
};
