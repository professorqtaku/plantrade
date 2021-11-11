import React, { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent } from "notistack";
import { Typography, IconButton } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import { StyledCard, StyledCardActions } from "./StyledSnackBar";
import { Notification } from "../../Interfaces/Interfaces";

const SnackMessage = forwardRef<
  HTMLDivElement,
  { id: string | number; message: string | Notification; variant?: "success" | "error" | "warning" | "info"; }
>((props, ref) => {
  const { closeSnackbar } = useSnackbar();


const variants: Record<string, string> = {
    success: "var(--status-green)",
    error: "var(--status-red)",
    warning: "var(--status-yellow)",
    info: "var(--dark-grey)",
  }

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <StyledCard colour={props.variant ? variants[props.variant] : variants.succeed }>
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
