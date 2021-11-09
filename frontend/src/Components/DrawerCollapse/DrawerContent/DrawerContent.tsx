import { useDrawer } from "../../../Contexts/DrawerContext";


const DrawerContent = () => {
  const { content } = useDrawer();

  return (
    <div>
      {content}
    </div>
  );
};

export default DrawerContent;
