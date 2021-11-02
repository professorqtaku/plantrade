import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

type Props = {
  isOpen: boolean;
  handleClose: Function;
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


export default function BasicModal({children, isOpen, handleClose}: Props){
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={(e:React.BaseSyntheticEvent) => handleClose(e)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}