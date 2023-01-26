import React from "react";
import PropTypes from "prop-types";
import { Searchbar } from "../Sidebar/Searchbar";
import { ChatList } from "../Sidebar/ChatList";
import { ChatHeader } from "../Main/ChatHeader";
import { ChatMessage } from "../Main/ChatMessage";
import { ChatSender } from "../Main/ChatSender";

interface MessangerLayoutProps extends React.PropsWithChildren {}
export const MessangerLayout: React.FunctionComponent<MessangerLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-row bg-white h-full rounded-lg max-w-7xl mx-auto">
      {/* Main Bar */}
      <div className="flex-1">
        <div className="flex flex-col h-full">
          <ChatHeader />
          <ChatMessage />
          <ChatSender />
        </div>
      </div>
      {/* Side Bar */}
      <div className="flex-[0_0_350px] flex-col">
        <Searchbar />
        <div className="flex flex-col overflow-y-auto h-[calc(100%-48px)]  border-l-[1px] border-r-[1px] border-gray-100">
          <ChatList />
        </div>
      </div>
    </div>
  );
};
