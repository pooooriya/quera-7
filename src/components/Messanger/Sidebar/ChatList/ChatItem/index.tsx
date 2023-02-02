import React, { useContext } from "react";
import { AXIOS } from "../../../../../config/axios.config";
import { ApiRoutes } from "../../../../../constants/api.route";
import { AppContext } from "../../../../../context/store";
import { MessageActionTypes } from "../../../../../@types/context/context.types";
import classNames from "classnames";

interface ChatItemProps extends React.PropsWithChildren {
  name: string;
  time: string;
  lastmessage: string;
  avatar: string;
  roomId: string;
}
export const ChatItem: React.FunctionComponent<ChatItemProps> = ({
  name,
  time,
  lastmessage,
  avatar,
  roomId,
}) => {
  const {
    state: { messages },
    dispatch,
  } = useContext(AppContext);
  const handleClickItem = (roomId: string) => {
    // 1.request to the server to get last chat messages by roomId
    AXIOS.get(`${ApiRoutes.GetMessages}${roomId}`)
      .then((res) => {
        if (res?.data?.length > 0) {
          // dispatch data to context
          dispatch({
            type: MessageActionTypes.Get_Current_Messages,
            payload: res?.data[0],
          });
        }
      })
      .catch((err) => {
        // notification raise
      });
  };

  return (
    <div
      className={classNames(
        "flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2",
        messages.roomId === roomId && "bg-blue-300"
      )}
      onClick={() => handleClickItem(roomId)}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h6 className="text-sm font-semibold">
            {new Date(time).toLocaleDateString("fa-IR")}
          </h6>
          <h4 className="text-md font-bold ml-2">{name}</h4>
        </div>
        <h5 className="text-xs mt-1">{lastmessage}</h5>
      </div>
      <img
        className="rounded-full w-[50px] h-[50px] bg-black overflow-hidden"
        src={avatar}
        alt=""
      />
    </div>
  );
};
