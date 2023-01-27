import React, { useCallback, useEffect, useState } from "react";
import { ChatItem } from "./ChatItem";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AxiosResponse } from "axios";

interface ChatListProps extends React.PropsWithChildren {}
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const fetchContacts = useCallback(async () => {
    const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
      ApiRoutes.GetContacts
    );
    if (response.status === 200) {
      setContacts(response.data);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
    return () => {
      console.log("من از اینجا رفتم دیگم نیستم");
    };
  }, [fetchContacts]);
  return (
    <>
      {contacts.length === 0 ? (
        <div>فعلا پیامی وجود ندارد ...</div>
      ) : (
        contacts.map((item) => (
          <ChatItem
            avatar={item.avatar}
            lastmessage={item.lastMessage}
            time={item.lastMessageSent}
            name={item.name}
            key={item.id}
          />
        ))
      )}
    </>
  );
};
