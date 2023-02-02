import React from "react";
import cs from "classnames";
interface MessageItemProps extends React.PropsWithChildren {
  type?: "sender" | "reciever";
  text: string;
}
export const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  type = "sender",
  text,
}) => {
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
            <h4 className="font-bold text-sm">پوریا باباعلی</h4>
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
            <h4 className="font-bold text-sm">پوریا باباعلی</h4>
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
