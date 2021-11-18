import { createContext, FC, useContext, useState, useEffect } from "react";
import { Notification } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const NotificationContext = createContext<any>(null);

export const useNotification = () => useContext(NotificationContext);

const NotificationContextProvider: FC<Props> = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

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
