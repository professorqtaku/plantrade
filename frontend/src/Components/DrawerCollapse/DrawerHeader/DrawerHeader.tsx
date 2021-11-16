import { useNav } from "../../../Contexts/NavigationContext";
import ChatDrawerHeader from './ChatDrawerHeader/ChatDrawerHeader'
import NoticeDrawerHeader from "./NoticeDrawerHeader/NoticeDrawerHeader";

interface Props {
  toggle: Function;
}

const DrawerHeader = () => {
  const { message } = useNav();

  return (
    <>
      {message
        ? <ChatDrawerHeader />
        : <NoticeDrawerHeader />
      }
    </>
  );
};

export default DrawerHeader;
