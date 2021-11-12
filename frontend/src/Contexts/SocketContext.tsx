import { createContext, useContext, useState } from "react";
import io from "socket.io-client";
import { useAuction } from "./AuctionContext";
import { useAuth } from "./AuthContext";
import { useSnackBar } from "./SnackBarContext";
import { useNotification } from "./NotificationContext";
import { Notification, BidUpdateSocket } from "../Interfaces/Interfaces";
import { useMessage } from "./MessageContext";
import { useDrawer } from "./DrawerContext";
import { useBid } from "./BidContext";


type Props = {
  children?: JSX.Element;
};



const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: Props) => {
  const endpoint = "http://localhost:9092";
  const socket = io(endpoint, { upgrade: false, transports: ["websocket"] });
  const [isConnected, setIsConnected] = useState(false);
  const { getAllAuctions } = useAuction();
  const { getHighestBid } = useBid();
  const { whoAmI } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotifications } = useNotification();
  const { getAllChatMsg } = useMessage();
  const { chatId } = useDrawer();

  if (!isConnected) {
    socket.on("connect", () => {
      console.log("conneted to ws");
      setIsConnected(true);
    });
  }
  // socket.on("bid", async function () {
  //   await getAllAuctions();
  // });

  socket.on("bid", async function (data: BidUpdateSocket) {
    console.log('Received bid', data);
    await getHighestBid(data.auction.id);
  });

  socket.on("join", (data: string) => {
    console.log(data);
  });

  socket.on("message", async (data: any) => {
    if (data.id === whoAmI.id) { return; }
    await getAllChatMsg(chatId);
  });

  socket.on("notification", (data: Notification) => {
    if (whoAmI?.id === data.user.id) {
      addSnackbar(data);
      getNotifications();
    }
  });

  const values = {
    socket,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;
