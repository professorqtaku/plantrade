import React, { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent } from "notistack";
import { Typography, IconButton } from '@mui/material'
import CloseIcon from "@material-ui/icons/Close";
import { StyledCard, StyledCardActions } from "./StyledSnackBar";

interface Notification {
  message: string;
  id: string | number;
}


const SnackMessage = forwardRef<
  HTMLDivElement,
  { id: string | number; message: string | React.ReactNode }
>((props, ref) => {
  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <StyledCard>
        <StyledCardActions>
          <Typography variant="subtitle2">{props.message}</Typography>
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
