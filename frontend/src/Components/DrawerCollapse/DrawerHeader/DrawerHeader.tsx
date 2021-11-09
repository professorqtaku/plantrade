import { StyledHeader } from "./StyledDrawerHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  toggle: Function
}

const DrawerHeader = ({toggle} : Props) => {
  return (
    <StyledHeader>
      <div onClick={() => toggle()}>
        <ExpandMoreIcon />
      </div>
    </StyledHeader>
  );
};

export default DrawerHeader;
