import { useDrawer } from "../../../Contexts/DrawerContext";
import { StyledContentWrapper } from "./StyledDrawerContent";
import DrawerItem from "../DrawerItem/DrawerItem";

interface Props {
  title: string;
  username: string;
  lastSender: string;
}

const DrawerContent = () => {
  const { content, setShowChatRoom } = useDrawer();

  return (
    <StyledContentWrapper>
      {content.map((item: Props) => (
        <DrawerItem key={item.title} content={item} />
      ))}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
