import { createContext, FC, useContext, useState } from "react";
import { Notification } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const NotificationContext = createContext<any>(null);

export const useNotification = () => useContext(NotificationContext);

const NotificationProvider: FC<Props> = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

  const getNotifications = async () => {
    let res: Response = await fetch("/api/notifications");
    if (res.ok) {
      let newNotifications: Array<Notification> = await res.json();
      setNotifications(newNotifications);
    }
  };

  const values = {
    notifications,
    getNotifications,
  };

  return (
    <NotificationContext.Provider value={values}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
