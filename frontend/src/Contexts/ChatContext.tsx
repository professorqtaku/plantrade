import { createContext, FC, useContext } from "react";

type Props = {
  children?: JSX.Element;
};

const ChatContext = createContext<any>(null);

export const useChat = () => useContext(ChatContext);

const ChatProvider = ({ children }: Props) => {
  const values = {};

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
