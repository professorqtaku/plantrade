import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useSnackBar } from "./SnackBarContext";
import { useNotification } from "./NotificationContext";
import { Notification, BidUpdateSocket } from "../Interfaces/Interfaces";
import { useMessage } from "./MessageContext";
import { useBid } from "./BidContext";
import { useSearch } from "./SearchContext";
import { useChat } from "./ChatContext";
// @ts-ignore
import io from "socket.io-client";

const endpoint = "http://localhost:9092";
export const socket = io(endpoint, {
  upgrade: false,
  transports: ["websocket"],
});

type Props = {
  children?: JSX.Element;
};

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: Props) => {
  const { getHighestBid } = useBid();
  const { getAuctionsByOptions } = useSearch();
  const { whoAmI, setHasReadMsg } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotificationsByCurrentUser } = useNotification();
  const { getAllChatMsg } = useMessage();
  const { chatId } = useChat();

  useEffect(() => {
    socket.on("connect", async () => {
      console.log("conneted to ws");
    });
  }, []);

  useEffect(() => {
    whoAmI && socket.emit("updateClientId", whoAmI.id);
  }, [whoAmI]);

  useEffect(() => {
    socket.on("notification", onNotification);
    return () => {
      socket.off("notification");
    };
  }, [socket, whoAmI]);

  const onNotification = (data: Notification) => {
    if (whoAmI && data.user.id === whoAmI.id) {
      addSnackbar(data);
      getNotificationsByCurrentUser();
    }
  };

  useEffect(() => {
    socket.on("bid", onBid);
    return () => {
      socket.off("bid");
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
    socket.on("message", (data: any) => onMessage(data));
    return () => { socket.off("message"); }
  }, [whoAmI, chatId, socket]);

  const onMessage = async (data: any) => {
    if (data && whoAmI) {
      if (data.writer.id === whoAmI.id) {
        return;
      }
      chatId && await getAllChatMsg(chatId);
      if (data.isRead === false) {
        setHasReadMsg(false);
      } else {
        setHasReadMsg(true);
      }
    }
  };

  const values = {
    socket,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;
