import React from "react";
import PropTypes from "prop-types";
import { ChatItem } from "./ChatItem";

interface ChatListProps extends React.PropsWithChildren {}
export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  return (
    <>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </>
  );
};
