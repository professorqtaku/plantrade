import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";
import { useSnackBar } from "./SnackBarContext";
import { useNotification } from "./NotificationContext";
import { Notification, BidUpdateSocket } from "../Interfaces/Interfaces";
import { useMessage } from "./MessageContext";
import { useDrawer } from "./DrawerContext";
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
  const [isConnected, setIsConnected] = useState(false);
  const { getHighestBid } = useBid();
  const { getAuctionsByOptions } = useSearch();
  const { whoAmI } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotificationsByCurrentUser } = useNotification();
  const { getAllChatMsg } = useMessage();
  const { chatId } = useChat();
  const [isRead, setIsRead] = useState(false);

  if (!isConnected) {
    socket.on("connect", () => {
      console.log("conneted to ws");
      setIsConnected(true);
    });
  }

  socket.on("bid", async function (data: BidUpdateSocket) {
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
  });

  socket.on("join", (data: number) => {
    console.log("Client joined the room");
    if (data === 2) {
      setIsRead(true);
    }
  });

  socket.on("leave", async (data: number) => {
    console.log("Client left room");
    if (data === 1) {
      await getAllChatMsg(chatId);
    }
    setIsRead(false);
  });

  socket.on("message", async (data: any) => {
    if (data.id === whoAmI.id) {
      return;
    }
    await getAllChatMsg(chatId);
  });

  socket.on("notification", (data: Notification) => {
    if (whoAmI?.id === data.user.id) {
      addSnackbar(data);
      getNotificationsByCurrentUser();
    }
  });

  const values = {
    socket,
    isRead,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;
