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
import { useDrawer } from "./DrawerContext";
import { useAuction } from "./AuctionContext";

const endpoint = "http://localhost:9092";
const socket = io(endpoint, { upgrade: false, transports: ["websocket"] });

type Props = {
  children?: JSX.Element;
};

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: Props) => {

  const { getHighestBid } = useBid();
  const { getAuctionsByOptions } = useSearch();
  const { whoAmI, setInvisibleMsgBadge, whoIsOnline } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotificationsByCurrentUser } = useNotification();
  const { getAllChatMsg } = useMessage();
  const { chatId, checkReadMsg } = useChat();
  const { showChatRoom } = useDrawer();
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("conneted to ws");
    });
  }, []);

  socket.on("bid", async function (data: BidUpdateSocket) {
    const isInDetailView = window.location.href.includes(
      `auctions/${data.auction.id}`
    );
    const isInListView = window.location.href.includes("auctions");
    if (isInDetailView) {
      await getHighestBid(data.auction.id);
    }
    else if (isInListView) {
      await getAuctionsByOptions();
    }
  });

  socket.on("join", (data: number) => {
    // console.log("Client joined the room");
    if (data === 2) {
      setIsRead(true);
    }
  });

  socket.on("leave", async (data: number) => {
    // console.log("Client left room");
    if (data === 1) {
      await getAllChatMsg(chatId);
    }
    setIsRead(false);
  });

  socket.on("message", async (data: any) => {
    if (data.id === whoAmI?.id) {
      return;
    }
    await getAllChatMsg(chatId);
  });

  socket.on("newMsg", async (data: any) => {
    if (whoAmI) {
      if (data === whoAmI.id + "" && !showChatRoom) {
        // console.log("Snälla...");
        const readMsg = await checkReadMsg();
        if (readMsg === 0) {
          setInvisibleMsgBadge(false);
        }
      }
    }
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
