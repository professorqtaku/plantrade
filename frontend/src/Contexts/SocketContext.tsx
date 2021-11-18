import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";
import { useSnackBar } from "./SnackBarContext";
import { useNotification } from "./NotificationContext";
import { Notification, BidUpdateSocket } from "../Interfaces/Interfaces";
import { useMessage } from "./MessageContext";
import { useBid } from "./BidContext";

import { useSearch } from "./SearchContext";
import { useChat } from "./ChatContext";

type Props = {
  children?: JSX.Element;
};

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: Props) => {
  const endpoint = "http://localhost:9092";
  const socket = io(endpoint, { upgrade: false, transports: ["websocket"] });
  const { getHighestBid } = useBid();
  const { getAuctionsByOptions } = useSearch();
  const { whoAmI } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotificationsByCurrentUser } = useNotification();
  const { getAllChatMsg } = useMessage();
  const { chatId } = useChat();
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    socket.on("connect", async () => {
      console.log("conneted to ws");
    });
  }, []);

  useEffect(() => {
    socket.on("notification", onNotification);
    return () => {
      socket.off("notification", onNotification);
    };
  }, [socket, whoAmI]);

  const onNotification = (data: Notification) => {
    console.log(whoAmI);

    if (whoAmI?.id === data.user.id) {
      addSnackbar(data);
      getNotificationsByCurrentUser();
    }
  };

  useEffect(() => {
    socket.on("bid", onBid);
    return () => {
      socket.off("bid", onBid);
    };
  }, [socket]);

  const onBid = async (data: BidUpdateSocket) => {
    const isInDetailView = window.location.href.includes(
      `auctions/${data.auction.id}`
    );
    const isInListView = window.location.href.includes("auctions");
    if (isInDetailView) {
      await getHighestBid(data.auction.id);
      // await getAuctionsByOptions();
    } else if (isInListView) {
      await getAuctionsByOptions();
    }
  };

  useEffect(() => {

    socket.on("join", onJoin);
    return () => {

      socket.off("join", onJoin);
    };
  }, [socket]);

  const onJoin = (data: number) => {

    if (data === 2) {
      setIsRead(true);
    }
  };

  useEffect(() => {

    socket.on("leave", onLeave);
    return () => {

      socket.off("leave", onLeave);
    };
  }, [socket, chatId, getAllChatMsg]);

  const onLeave = async (data: number) => {

    if (data === 1) {
      await getAllChatMsg(chatId);
    }
    setIsRead(false);
  };

  useEffect(() => {
    socket.on("message", onMessage);
    return () => {
      socket.off("message", onMessage);
    };
  }, [socket, chatId, getAllChatMsg]);

  const onMessage = async (data: any) => {
    
    if (data.id === whoAmI.id) {
      return;
    }
    await getAllChatMsg(chatId);
  };

  const values = {
    socket,
    isRead,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;
