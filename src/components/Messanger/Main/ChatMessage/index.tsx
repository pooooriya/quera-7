import React, {
  DetailedHTMLProps,
  LiHTMLAttributes,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { MessageItem } from "./MessageItem";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AppContext } from "../../../../context/store";
interface ChatMessageProps extends React.PropsWithChildren {}
export const ChatMessage: React.FunctionComponent<ChatMessageProps> = (
  props
): JSX.Element => {
  const {
    state: { messages },
  } = useContext(AppContext);
  const ref = useRef<any>();
  const handleScrollIntoBottom = () =>
    ref.current.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    handleScrollIntoBottom();
  }, [messages.MessageList.length]);

  useEffect(() => {
    handleScrollIntoBottom();
  }, [messages.roomId]);

  return (
    <ul
      className="w-full h-[calc(100%-48px)] bg-center bg-cover bg-no-repeat flex flex-col p-10 [&_li]:my-5 overflow-y-auto"
      style={{
        background: "url('https://wallpapercave.com/wp/wp4410743.png')",
      }}
    >
      {messages.MessageList.map((item) => (
        <MessageItem
          key={item.id}
          type={item.isSentByOwner ? "sender" : "reciever"}
          text={item.value}
          id={item.id}
        />
      ))}
      {/* Dummy Li */}
      <li ref={ref} />
    </ul>
  );
};
