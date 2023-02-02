import React, { useContext, useState, useEffect } from "react";
import { Input } from "../../../Base/Forms/Input";
import { FiSend } from "react-icons/fi";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AppContext } from "../../../../context/store";
import {
  MessageActionTypes,
  MessageItems,
} from "../../../../@types/context/context.types";
interface ChatSenderProps extends React.PropsWithChildren {}
export const ChatSender: React.FunctionComponent<ChatSenderProps> = (props) => {
  const {
    state: { messages },
    dispatch,
    editMessage,
    setEditMessage,
  } = useContext(AppContext);
  const [text, setText] = useState<string>("");
  const handleSendMessage = (e: any) => {
    setText(e.target.value);
  };

  let index = messages.MessageList.findIndex(
    (message) => message.id === editMessage.id
  );

  const handleOnClick = () => {
    // send request to server to send message to it !
    if (editMessage.edit) {
      messages.MessageList[index].value = text;
      setEditMessage({ edit: false, id: 0 });
      setText("");
    } else {
      const body: MessageItems = {
        isSentByOwner: false,
        id: Math.floor(Math.random() * 10000000000),
        value: text,
      };
      dispatch({
        type: MessageActionTypes.Send_New_Message,
        payload: body,
      });
      setText("");
    }

    // AXIOS.post(
    //   `${ApiRoutes.GetMessages}${messages.roomId}/MessageList`,
    //   body
    // ).then((res) => {
    //   console.log(res);
    //   setText("");
    // });
    // if server return success so we need to update context
    // =>
  };

  useEffect(() => {
    if (editMessage.edit) {
      setText(messages.MessageList[index].value);
    }
  }, [editMessage.edit]);

  return (
    <div className="p-3 flex">
      <div
        className="p-2 rounded-full flex justify-center items-center cursor-pointer duration-150 ease-out hover:text-blue-600"
        onClick={() => handleOnClick()}
      >
        <FiSend fontSize={30} />
      </div>
      <Input
        placeholder="پیام خود را بنویسید..."
        onChange={(e) => handleSendMessage(e)}
        value={text}
      />
    </div>
  );
};
