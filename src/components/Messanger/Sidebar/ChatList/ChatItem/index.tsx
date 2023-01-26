import React from "react";

interface ChatItemProps extends React.PropsWithChildren {}
export const ChatItem: React.FunctionComponent<ChatItemProps> = (props) => {
  return (
    <div className="flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h6 className="text-sm font-semibold">7:15 عصر</h6>
          <h4 className="text-md font-bold ml-2">پوریا باباعلی</h4>
        </div>
        <h5 className="text-xs mt-1">پوریا سلام کجایی؟</h5>
      </div>
      <img
        className="rounded-full w-[50px] h-[50px] bg-black overflow-hidden"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19EaFNNE8RqQ8HeB4ld93gq_4z8EoXkbOUT4YUcqZqHZaixy803NACsEQnPU4d_6O8HA&usqp=CAU"
        alt=""
      />
    </div>
  );
};
