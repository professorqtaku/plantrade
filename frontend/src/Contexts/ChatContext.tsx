import { createContext, useContext, useState } from "react";
import { useNav } from "./NavigationContext";

type Props = {
  children?: JSX.Element;
};

const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

const ChatContextProvider = ({ children }: Props) => {
  const [chatId, setChatId] = useState();
  const [chats, setChats] = useState([]);
  const [chatTitle, setChatTitle] = useState('');
  const [unReadMsg, setUnReadMsg] = useState();
  const { setInvisibleMsgBadge } = useNav();

  const getChatsByCurrentUser = async () => {
    let res: Response = await fetch(`/api/chats`);
    if (res.status == 200) {
      const chatResponse = await res.json();
      setChats(chatResponse);
    } else {
      setChats([]);
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

  const checkReadMsg = async () => {
    console.log('inne')
    await fetch("/api/chats/checkReadMessages")
      .then((res) => res.json())
      .then((data) => {
        setUnReadMsg(data)
        data === 0 && setInvisibleMsgBadge(false);
      });
  }

  const values = {
    chatId,
    setChatId,
    chats,
    getChatsByCurrentUser,
    createChat,
    setChatTitle,
    chatTitle,
    checkReadMsg,
    unReadMsg,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
