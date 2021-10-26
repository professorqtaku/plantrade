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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal({children}: Props){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => toggleLogin();
  const handleClose = () => setOpen(false);
  const { toggleLogin, showLogin } = useModal();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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