import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { StyledAddIcon } from "./StyledFloatingAddBtn";
import { useHistory } from "react-router";

const FloatingAddBtn = () => {
  const history = useHistory();

  return (
    <StyledAddIcon
      color="primary"
      aria-label="add"
      onClick={() => history.push("/createAuction")}
    >
      <AddIcon />
    </StyledAddIcon>
  );
};

export default FloatingAddBtn;
