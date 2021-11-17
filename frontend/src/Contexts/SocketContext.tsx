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
    console.log("---1.0 ON SOCKET NOTIFICATION ---");
    socket.on("notification", onNotification);
    return () => {
      console.log("---1.1 OFF SOCKET NOTIFICATION ---");
      socket.off("notification", onNotification);
    };
  }, [socket, whoAmI]);

  const onNotification = (data: Notification) => {
    console.log("---1.2 NOTIFICATION HAPPENED---");
    console.log(whoAmI);

    if (whoAmI?.id === data.user.id) {
      addSnackbar(data);
      getNotificationsByCurrentUser();
    }
  };

  useEffect(() => {
    console.log("---2.0 ON SOCKET NOTIFICATION ---");
    socket.on("bid", onBid);
    return () => {
      console.log("---2.1 OFF SOCKET NOTIFICATION ---");
      socket.off("bid", onBid);
    };
  }, [socket]);

  const onBid = async (data: BidUpdateSocket) => {
    console.log("---2.2 BID HAPPENED---");
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
    console.log("---3.0 ON SOCKET NOTIFICATION ---");
    socket.on("join", onJoin);
    return () => {
      console.log("---3.1 OFF SOCKET NOTIFICATION ---");
      socket.off("join", onJoin);
    };
  }, [socket]);

  const onJoin = (data: number) => {
    console.log("---3.2 JOIN HAPPENED---");
    console.log("Client joined the room");
    if (data === 2) {
      setIsRead(true);
    }
  };

  useEffect(() => {
    console.log("---4.0 ON SOCKET NOTIFICATION ---");
    socket.on("leave", onLeave);
    return () => {
      console.log("---4.1 OFF SOCKET NOTIFICATION ---");
      socket.off("leave", onLeave);
    };
  }, [socket, chatId, getAllChatMsg]);

  const onLeave = async (data: number) => {
    console.log("---4.2 LEAVE HAPPENED---");
    console.log("Client left room");
    if (data === 1) {
      await getAllChatMsg(chatId);
    }
    setIsRead(false);
  };

  useEffect(() => {
    console.log("---5.0 ON SOCKET NOTIFICATION ---");
    socket.on("message", onMessage);
    return () => {
      console.log("---5.1 OFF SOCKET NOTIFICATION ---");
      socket.off("message", onMessage);
    };
  }, [socket, chatId, getAllChatMsg]);

  const onMessage = async (data: any) => {
    console.log("---5.2 MESSAGE HAPPENED---");
    
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
