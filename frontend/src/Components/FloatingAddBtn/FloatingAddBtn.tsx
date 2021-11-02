import AddIcon from "@mui/icons-material/Add";
import { StyledAddIcon } from "./StyledFloatingAddBtn";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const FloatingAddBtn = () => {
  const history = useHistory();
  const location = useLocation();
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/createAuction" ||
      location.pathname === "/my-page"
    ) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }, [location]);

  return (
    <>
      {isShown && (
        <StyledAddIcon
          color="primary"
          aria-label="add"
          onClick={() => history.push("/createAuction")}
        >
          <AddIcon />
        </StyledAddIcon>
      )}
    </>
  );
};

export default FloatingAddBtn;
