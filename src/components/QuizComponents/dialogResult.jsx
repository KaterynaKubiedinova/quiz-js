import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { CustomBtn } from '../../themes/customsComponents';

export default function DialogResult({open}) {
	const newUser = useSelector((state) => state.newUser);
  const questions = useSelector((state) => state.questions);
  
  function handleClose() {
    window.location.reload();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Awesome!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {newUser.name} your result: {newUser.answers}/{questions.length} ( {Math.floor(newUser.answers * 100 / questions.length)}% )
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomBtn 
          variant="contained" 
          onClick={handleClose} 
          autoFocus>
          Play again
        </CustomBtn>
      </DialogActions>
    </Dialog>
  );
}