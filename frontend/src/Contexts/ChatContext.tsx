import { createContext, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

const ChatContextProvider = ({ children }: Props) => {
  const [chatId, setChatId] = useState();
  const [chats, setChats] = useState([]);
  const [chatTitle, setChatTitle] = useState('');

  const getChatsByCurrentUser = async () => {
    let res: Response = await fetch(`/api/chats`);
    if (res.status == 200) {
      const chatResponse = await res.json();
      setChats(chatResponse);
      return chatResponse;
    } else {
      setChats([]);
      return null;
    }
  };

  const getUnreadMsg = async () => {
     let res: Response = await fetch(`/api/chats/unreadMsg`);
     if (res.status == 200) {
       const chatResponse = await res.json();
       return chatResponse;
     } else {
       return 0;
     }
  };

  const createChat = async (auctionId: any) => {
    let res: Response = await fetch(`/api/chats`, {
      method: "POST",
      body: JSON.stringify(auctionId),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      getChatsByCurrentUser();
      return true;
    }
    return false;
  };

  const values = {
    chatId,
    setChatId,
    chats,
    getChatsByCurrentUser,
    createChat,
    setChatTitle,
    chatTitle,
    getUnreadMsg,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
