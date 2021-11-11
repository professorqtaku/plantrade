import { createContext, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};


const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider = ({ children }: Props) => {

  const [chats, setChats] = useState([]);

  const getChatsByCurrentUser = async () => {
    let res: Response = await fetch(`/api/chats`);
    const chatResponse = await res.json();
    if (chatResponse.status === 200) {
      setChats(chatResponse);
    }
  }

  const createChat = async (auctionId: any) => {
    let res: Response = await fetch(`/api/chats`, {
      method: "POST",
      body: JSON.stringify(auctionId),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const chatResponse = await res.json();
    if (chatResponse.status === 200) {
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
