import React, { useContext, useState } from "react";
import { Searchbar } from "../Sidebar/Searchbar";
import { ChatList } from "../Sidebar/ChatList";
import { ChatHeader } from "../Main/ChatHeader";
import { ChatMessage } from "../Main/ChatMessage";
import { ChatSender } from "../Main/ChatSender";
import { ChatPreview } from "../Main/ChatPreview";
import { AppContext } from "../../../context/store";
import classNames from "classnames";

interface MessangerLayoutProps extends React.PropsWithChildren {}
export const MessangerLayout: React.FunctionComponent<MessangerLayoutProps> = ({
  children,
}) => {
  const {
    state: { messages },
  } = useContext(AppContext);
  return (
    <div className="flex flex-row bg-white h-full rounded-lg w-full mx-auto">
      {/* Main Bar */}
      <div
        className={classNames(
          messages.roomId ? "flex" : "hidden",
          "sm:flex sm:flex-1 flex-col  flex-[1_1_auto]"
        )}
      >
        <div className="flex flex-col h-full">
          {messages.roomId ? (
            <>
              <ChatHeader />
              <ChatMessage />
              <ChatSender />
            </>
          ) : (
            <ChatPreview />
          )}
        </div>
      </div>
      {/* Side Bar */}
      <div
        className={classNames(
          "sm:flex-[0_0_350px] flex-col  flex-[1_1_auto]",
          messages.roomId ? "hidden sm:flex" : "flex"
        )}
      >
        <Searchbar />
        <div className="flex flex-col overflow-y-auto h-[calc(100%-48px)]  border-l-[1px] border-r-[1px] border-gray-100">
          <ChatList />
        </div>
      </div>
    </div>
  );
};
