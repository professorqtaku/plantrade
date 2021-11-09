import { createContext, FC, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const MessageContext = createContext<any>(null);

export const useMessage = () => useContext(MessageContext);

const MessageProvider: FC<Props> = ({ children }: Props) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Tjena",
    },
    {
      id: "2",
      text: "Halloj!",
    },
    {
      id: "1",
      text: "Snygg blomma",
    },
    {
      id: "2",
      text: "Jag vet, köp den då?",
    },
    {
      id: "1",
      text: "Nej inte idäg, behöver social",
    },
  ]);

  const values = {
    messages,
    setMessages,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export default MessageProvider;
