import React, { useCallback, useContext, useEffect } from "react";
import { ChatItem } from "./ChatItem";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AxiosResponse } from "axios";
import { AppContext } from "../../../../context/store";
import { Contacts } from "../../../../@types/api.types";
import { ContactActionTypes } from "../../../../@types/context/context.types";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { GetAllContactsAsync } from "../../../../redux/contacts/contacts.action";

interface ChatListProps extends React.PropsWithChildren {}
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  const state = useSelector((state) => state) as any;
  const dispatch = useDispatch();
  // const dispatch = useContext(AppContext).dispatch;
  // const { state } = useContext(AppContext);
  // const fetchContacts = useCallback(async () => {
  //   const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
  //     ApiRoutes.GetContacts
  //   );
  //   if (response.status === 200) {
  //     dispatch({
  //       type: ContactActionTypes.Get_All_Contact,
  //       payload: response.data,
  //     });
  //   }
  // }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllContactsAsync() as any);
  }, []);

  return (
    <>
      {state.contacts.searchList.length === 0 ? (
        state.contacts.contactsList.length === 0 ? (
          <div>فعلا پیامی وجود ندارد ...</div>
        ) : (
          state.contacts.contactsList.map((item: any) => (
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
        state.contacts.searchList.map((item: any) => (
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
