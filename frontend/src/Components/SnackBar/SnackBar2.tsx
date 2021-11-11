import React, { useCallback } from "react";
import { Card, CardActions, Typography, IconButton } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close'
import { SnackbarContent, useSnackbar } from "notistack";

interface Props {
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // isOpen: boolean;
  id: string | number
  text: string | any;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({ text, id }: Props) => {
  // const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setIsOpen(false);
  // };

  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);
  
  return (
    <SnackbarContent>
      <Card>
        <CardActions>
          <Typography variant="subtitle2">
            {text}
          </Typography>
          <div>
            <IconButton onClick={handleDismiss}>
              <CloseIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </SnackbarContent>
  );
};
export default SnackBar;
