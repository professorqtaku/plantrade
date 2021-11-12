import { createContext, useContext } from "react";
import io from "socket.io-client";
import { useAuction } from "./AuctionContext";
import { useAuth } from './AuthContext';
import { useSnackBar } from './SnackBarContext';
import { useNotification } from "./NotificationContext";
import { Notification } from "../Interfaces/Interfaces"

type Props = {
  children?: JSX.Element;
};

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }: Props) => {
  const endpoint = "http://localhost:9092";
  const socket = io(endpoint, { transports: ["websocket"] });
  const { getAllAuctions } = useAuction();
  const { whoAmI } = useAuth();
  const { addSnackbar } = useSnackBar();
  const { getNotifications } = useNotification();

  socket.on("connect", () => {
    console.log("conneted");
  });

  // socket.on("bid", async function () {
  //   await getAllAuctions();
  // });

  socket.on("reconnect_attempt", () => {
    console.log("Reconnecting");
  });

  socket.on("join", (data: any) => {
    console.log("Connected to room", data);
  });

  socket.on("auctionUpdate", (data: any) => {
    console.log(data);
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
