import { createContext, FC, useContext, useState } from "react";
import { Message } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const MessageContext = createContext<any>(null);

export const useMessage = () => useContext(MessageContext);

const MessageContextProvider: FC<Props> = ({ children }: Props) => {
  console.log("---12. MESSAGE CONTEXT----");

  const [messages, setMessages] = useState <Message[] | undefined>([]);


  const getAllChatMsg = async (chatId: number) => {
    let res: Response = await fetch(`/api/messages/${chatId}`);
    if (res.status === 200) {
      let newMessages = await res.json();
      setMessages(newMessages);
    } else {
      setMessages([]);
    }
  };

  const createMsg = async (message: Message, chatId: number) => {
    let res: Response = await fetch(`/api/messages/${chatId}`, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      let newMessages = await res.json();
      if (messages) setMessages([...messages, newMessages]);
      else setMessages([newMessages]);
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

export default MessageContextProvider;
