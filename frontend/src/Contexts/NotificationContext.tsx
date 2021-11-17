import { createContext, FC, useContext, useState, useEffect } from "react";
import { Notification } from "../Interfaces/Interfaces";
import { useAuth } from "./AuthContext";
import { useSnackBar } from "./SnackBarContext";
import { useSocket } from "./SocketContext";

type Props = {
  children?: JSX.Element;
};

const NotificationContext = createContext<any>(null);

export const useNotification = () => useContext(NotificationContext);

const NotificationContextProvider: FC<Props> = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<Array<Notification>>([]);
  const { socket } = useSocket();
  const { addSnackbar } = useSnackBar();
  const { whoAmI } = useAuth();

  useEffect(() => {
    console.log("---1. ON NOTIFICATION SOCKET---");
    socket.on("notification", onNotification);
    return () => {
      console.log("---2. OFF NOTIFICATION SOCKET---");
      socket.off("notification", onNotification);
    }
  }, [socket, whoAmI, notifications, setNotifications])

  const onNotification = (data: Notification) => {
    console.log("---3. HANDLE NOTIFICATION---");
    console.log("Who am I? : ", whoAmI);
    console.log(data);
    
    // console.log("Who is it to?: ", data.user?.id);
    console.log(whoAmI?.id === data.user?.id);
    
    
    if (whoAmI?.id === data.user.id) {
      addSnackbar(data);
      getNotificationsByCurrentUser();
    }
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const getNotificationsByCurrentUser = async () => {
    let res: Response = await fetch("/api/notifications");
    if (res.ok && res.status == 200) {
      let newNotifications: Array<Notification> = await res.json();
      setNotifications(newNotifications);
    }
  };

  const values = {
    notifications,
    getNotificationsByCurrentUser,
    clearNotifications,
  };

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
