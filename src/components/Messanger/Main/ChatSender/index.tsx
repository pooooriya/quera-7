import React from "react";
import { Input } from "../../../Base/Forms/Input";
import { FiSend } from "react-icons/fi";
interface ChatSenderProps extends React.PropsWithChildren {}
export const ChatSender: React.FunctionComponent<ChatSenderProps> = (props) => {
  return (
    <div className="p-3 flex">
      <div className="p-2 rounded-full flex justify-center items-center cursor-pointer duration-150 ease-out hover:text-blue-600">
        <FiSend fontSize={30} />
      </div>
      <Input placeholder="پیام خود را بنویسید..." />
    </div>
  );
};
