import React, { useCallback, useContext, useEffect } from "react";
import { ChatItem } from "./ChatItem";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AxiosResponse } from "axios";
import { AppContext } from "../../../../context/store";
import { Contacts } from "../../../../@types/api.types";
import { ContactActionTypes } from "../../../../@types/context/context.types";

interface ChatListProps extends React.PropsWithChildren {}
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  const dispatch = useContext(AppContext).dispatch;
  const { state } = useContext(AppContext);

  const fetchContacts = useCallback(async () => {
    const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
      ApiRoutes.GetContacts
    );
    if (response.status === 200) {
      dispatch({
        type: ContactActionTypes.Get_All_Contact,
        payload: response.data,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      {state.contacts.searchList.length === 0 ? (
        state.contacts.contactsList.length === 0 ? (
          <div>فعلا پیامی وجود ندارد ...</div>
        ) : (
          state.contacts.contactsList.map((item) => (
            <ChatItem
              avatar={item.avatar}
              lastmessage={item.lastMessage}
              time={item.lastMessageSent}
              name={item.name}
              key={item.id}
              roomId={item.roomId}
            />
          ))
        )
      ) : (
        state.contacts.searchList.map((item) => (
          <ChatItem
            avatar={item.avatar}
            lastmessage={item.lastMessage}
            time={item.lastMessageSent}
            name={item.name}
            key={item.id}
            roomId={item.roomId}
          />
        ))
      )}
    </>
  );
};
