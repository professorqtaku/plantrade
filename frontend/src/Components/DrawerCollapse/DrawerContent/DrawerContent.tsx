import { useDrawer } from "../../../Contexts/DrawerContext";
import { StyledContentWrapper } from "./StyledDrawerContent";

const DrawerContent = () => {
  const { content, setShowChatRoom } = useDrawer();

  return (
    <StyledContentWrapper>
      {content.map((item: string) => (
        <p key={item} onClick={() => setShowChatRoom(true)}>
          {item}
        </p>
      ))}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
