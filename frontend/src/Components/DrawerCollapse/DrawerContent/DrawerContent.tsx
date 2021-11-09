import { useDrawer } from "../../../Contexts/DrawerContext";
import {StyledContentWrapper} from "./StyledDrawerContent"


const DrawerContent = () => {
  const { content } = useDrawer();

  return (
    <StyledContentWrapper>
      {content}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
