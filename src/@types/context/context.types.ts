export type ContactState = {
  avatar: string;
  name: string;
  id: number;
  lastMessageSent: string;
  lastMessage: string;
};

export type AppContextIntialState = {
  contacts: ContactState[];
};

export enum ContactActionTypes {
  Get_All_Contact = "Get_All_Contact",
}

export type ContextAction<T, K> = {
  type: T;
  payload: K;
};

export type CreateContext = {
  state: ContactState[];
  dispatch: React.Dispatch<ContextAction<any, any>>;
};
