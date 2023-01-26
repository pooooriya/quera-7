import React from "react";
import { MessageItem } from "./MessageItem";
interface ChatMessageProps extends React.PropsWithChildren {}
export const ChatMessage: React.FunctionComponent<ChatMessageProps> = (
  props
) => {
  return (
    <ul
      className="w-full h-[calc(100%-48px)] bg-center bg-cover bg-no-repeat flex flex-col p-10 [&_li]:my-5 overflow-y-auto"
      style={{
        background: "url('https://wallpapercave.com/wp/wp4410743.png')",
      }}
    >
      <MessageItem type="sender" />
      <MessageItem type="reciever" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </ul>
  );
};
