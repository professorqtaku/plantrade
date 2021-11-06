import { createContext, FC, useContext, useState } from "react";
import io from "socket.io-client";


type Props = {
  children?: JSX.Element;
};


const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children}: Props) => {
  const endpoint = "http://localhost:9092";
  const socket = io(endpoint, { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("conneted");
  });

   socket.on("connect_error", console.error);

  socket.on("reconnect_attempt", () => {
    //console.log("updated");
  });



  const values = {
    socket,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
