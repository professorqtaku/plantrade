import { createContext, FC, useContext, useState } from "react";

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

  const createMsg = async (chatId: number) => {
    let res: Response = await fetch(`/api/messages/${chatId}`, {
      method: "POST",
    });
    const msgResponse = await res.json();
    if (msgResponse.status === 200) {
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
