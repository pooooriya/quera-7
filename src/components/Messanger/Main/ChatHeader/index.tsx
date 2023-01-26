import React from "react";
interface ChatHeaderProps extends React.PropsWithChildren {}
export const ChatHeader: React.FunctionComponent<ChatHeaderProps> = (props) => {
  return (
    <div className=" flex flex-col pr-3 py-2">
      <h1 className="font-bold">گروه فرانت آموزان کئورا</h1>
      <h3 className="text-xs">230 نفر ، 28 نفر آنلاین</h3>
    </div>
  );
};
