import React, { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent, SnackbarMessage } from "notistack";
import { Typography, IconButton } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import { StyledCard, StyledCardActions } from "./StyledSnackBar";
import { Notification } from "../../Interfaces/Interfaces";

const SnackMessage = forwardRef<
  HTMLDivElement,
  {
    id: string | number;
    message: string | Notification;
  }
>((props, ref) => {
  const { closeSnackbar } = useSnackbar();

  const variants: Record<string, string> = {
      success: "var(--status-green)",
      error: "var(--status-red)",
      warning: "var(--status-yellow)",
      info: "var(--dark-grey)",
  }

  const variant =
    typeof props.message === "object" && props.message.status
      ? variants[props.message.status]
      : variants["success"];

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <StyledCard background={variant}>
        <StyledCardActions>
          <Typography variant="subtitle2">
            {typeof props.message === "object"
              ? props.message.message
              : props.message}
          </Typography>
          <div>
            <IconButton onClick={handleDismiss}>
              <CloseIcon />
            </IconButton>
          </div>
        </StyledCardActions>
      </StyledCard>
    </SnackbarContent>
  );
});

export default SnackMessage;
