import React from "react";
import PropTypes from "prop-types";
import { BsChatDots } from "react-icons/bs";
interface ChatPreviewProps extends React.PropsWithChildren {}
export const ChatPreview: React.FunctionComponent<ChatPreviewProps> = (
  props
) => {
  return (
    <div className="hidden sm:flex h-full sm:flex-col justify-center items-center">
      <BsChatDots size={30} />
      <h1 className="text-sm font-medium text-center mt-1">
        به پیام رسان ما خوش آمدید لطفا برای شروع یکی از چت ها را انتخاب کنید
      </h1>
    </div>
  );
};
