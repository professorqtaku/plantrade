import { createContext, FC, useContext, useState } from "react";
import { Message } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const MessageContext = createContext<any>(null);

export const useMessage = () => useContext(MessageContext);

const MessageProvider: FC<Props> = ({ children }: Props) => {
  const [messages, setMessages] = useState([]);

  const getAllChatMsg = async (chatId: number) => {
    let res: Response = await fetch(`/api/messages/${chatId}`);
    if (res.status === 200) {
      let messages = await res.json();
      setMessages(messages);
    }
  };

  const createMsg = async (message: Message,chatId: number) => {
    let res: Response = await fetch(`/api/messages/${chatId}`, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      const msgResponse = await res.json();
      getAllChatMsg(chatId);
    }
  };

  const values = {
    messages,
    getAllChatMsg,
    createMsg,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export default MessageProvider;
