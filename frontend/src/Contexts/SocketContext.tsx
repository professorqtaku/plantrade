import { createContext, useContext } from "react";
import io from "socket.io-client";
import { useAuction } from "./AuctionContext";

type Props = {
  children?: JSX.Element;
};

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }: Props) => {
  const endpoint = "http://localhost:9092";
  const socket = io(endpoint, { transports: ["websocket"] });
  const { getAllAuctions } = useAuction();

  socket.on("connect", () => {
    console.log("conneted");
  });

  socket.on("bid", async function () {
    await getAllAuctions();
  });

  socket.on("reconnect_attempt", () => {
    console.log("Reconnecting");
  });

   socket.on("join", (data:any) => {
     console.log("Connected to room", data);
   });

  const values = {
    socket,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
