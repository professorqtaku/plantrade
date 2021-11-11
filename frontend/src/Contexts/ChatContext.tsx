import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider = ({ children }: Props) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChatsByCurrentUser();
  }, []);

  const getChatsByCurrentUser = async () => {
    let res: Response = await fetch(`/api/chats`);
    if (res.status == 200) {
      const chatResponse = await res.json();
      setChats(chatResponse);
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
  };

  const values = {
    chats,
    getChatsByCurrentUser,
    createChat,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
