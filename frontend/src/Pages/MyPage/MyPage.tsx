import Avatar from "@mui/material/Avatar";
import {
  StyledWrapper,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledEditWrapper,
  StyledBoldText,
  StyledText,
} from "./StyledMyPage";
import Button from "../../Components/Button/ButtonComp";
import EditIcon from "@mui/icons-material/Edit";

const MyPage = () => {
  return (
    <StyledWrapper>
      <StyledAvatarWrapper>
        <StyledAvatar>N</StyledAvatar>
        <Button label="logga ut" />
      </StyledAvatarWrapper>
      <StyledEditWrapper>
        <StyledText>
          <StyledBoldText>Username: </StyledBoldText>
          Oscar
        </StyledText>
        <EditIcon />
      </StyledEditWrapper>
    </StyledWrapper>
  );
};

export default MyPage;
