import React, { useContext } from "react";
import cs from "classnames";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AppContext } from "../../../../../context/store";

interface MessageItemProps extends React.PropsWithChildren {
  type?: "sender" | "reciever";
  text: string;
  id: number;
}
export const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  type = "sender",
  text,
  id,
}) => {
  const { state, dispatch, editMessage, setEditMessage } =
    useContext(AppContext);

  const removeHandler = (id: number) => {
    let newMessages = state.messages.MessageList.filter(
      (message) => message.id !== id
    );
    dispatch({ type: "Change_Messages", payload: newMessages });
  };

  const changeMessage = (id: number) => {
    setEditMessage({ edit: true, id: id });
  };

  switch (type) {
    case "sender":
      return (
        <li className="flex justify-start">
          <img
            className="rounded-full  w-[50px] h-[50px]  overflow-hidden"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19EaFNNE8RqQ8HeB4ld93gq_4z8EoXkbOUT4YUcqZqHZaixy803NACsEQnPU4d_6O8HA&usqp=CAU"
            alt=""
          />
          <div className={"p-2 w-[250px] rounded-lg shadow-md mr-2 bg-white"}>
            <div className="flex justify-between cursor-pointer">
              <h4 className="font-bold text-sm">پوریا باباعلی</h4>
              <div className="flex gap-2">
                <AiFillDelete onClick={() => removeHandler(id)} />
                <AiFillEdit
                  onClick={() => !editMessage.edit && changeMessage(id)}
                />
              </div>
            </div>
            <p className="text-xs">{text}</p>
          </div>
        </li>
      );
    case "reciever":
      return (
        <li className="flex justify-end">
          <div
            className={"p-2 w-[250px] rounded-lg shadow-md ml-2 bg-blue-400"}
          >
            <div className="flex justify-between cursor-pointer">
              <h4 className="font-bold text-sm">پوریا باباعلی</h4>
              <div className="flex gap-2">
                <AiFillDelete onClick={() => removeHandler(id)} />
                <AiFillEdit
                  onClick={() => !editMessage.edit && changeMessage(id)}
                />
              </div>
            </div>
            <p className="text-xs">{text}</p>
          </div>
          <img
            className="rounded-full  w-[50px] h-[50px]  overflow-hidden"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19EaFNNE8RqQ8HeB4ld93gq_4z8EoXkbOUT4YUcqZqHZaixy803NACsEQnPU4d_6O8HA&usqp=CAU"
            alt=""
          />
        </li>
      );
  }
};
