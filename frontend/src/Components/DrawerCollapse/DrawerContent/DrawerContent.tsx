import { useDrawer } from "../../../Contexts/DrawerContext";
import {StyledContentWrapper} from "./StyledDrawerContent"


const DrawerContent = () => {
  const { content } = useDrawer();

  return (
    <StyledContentWrapper>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
    </StyledContentWrapper>
  );
};

export default DrawerContent;
