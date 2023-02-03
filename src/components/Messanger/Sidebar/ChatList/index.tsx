import React, { useCallback, useContext, useEffect } from "react";
import { ChatItem } from "./ChatItem";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AxiosResponse } from "axios";
import { AppContext } from "../../../../context/store";
import { Contacts } from "../../../../@types/api.types";
import {
  ContactActionTypes,
  ContactListState,
} from "../../../../@types/context/context.types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { GetAllContactsAsync } from "../../../../redux/feature/contacts/contacts.middleware";
interface ChatListProps extends React.PropsWithChildren {}
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<RootState>(
    (state) => state.contacts
  ) as ContactListState;
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
    dispatch(GetAllContactsAsync());
  }, []);

  return (
    <>
      {state.searchList.length === 0 ? (
        state.contactsList.length === 0 ? (
          <div>فعلا پیامی وجود ندارد ...</div>
        ) : (
          state.contactsList.map((item) => (
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
        state.searchList.map((item) => (
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
