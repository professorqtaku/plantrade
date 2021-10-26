import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModal } from "../../Contexts/ModalContext"

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 330,
  minHeight: 180,
  bgcolor: 'background.paper',
  boxShadow: 4,
  outline: 'none',
  p: 4,
};


export default function BasicModal({children}: Props){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => toggleLogin();
  const handleClose = () => setOpen(false);
  const { toggleLogin, showLogin } = useModal();
  return (
    <div>
      <Modal
        open={showLogin}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}