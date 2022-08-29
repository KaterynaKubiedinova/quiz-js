import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  TextField  from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeSuccessFalse, changeSuccessTrue, enterName } from '../../store/questions';
import { useNavigate } from 'react-router-dom';
import isSuccess from '../../functions/isSuccess';
import { CustomBtn } from '../../themes/customsComponents';

export default function DialogWind({onReadyClick, open}) {
	const newUser = useSelector((state) => state.newUser);
  const isName = useSelector((state) => state.isName);
  const success = useSelector((state) => state.success);
	const dispatch = useDispatch();
  const navigate = useNavigate();
	
	function onChangeText(e) {
    dispatch(enterName());
		dispatch(changeName(e.target.value));
	}

	function onAdmin() {
    onReadyClick();
		navigate('/questions');
	}

  function onReady() {
    if (newUser.name !== '') {
      onReadyClick();
      dispatch(changeSuccessTrue());
    } else {
      dispatch(changeSuccessFalse());
    }
  }
  
  return (
		<Dialog
        open={open}
        onClose={onReady}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Welcome to JavaScript Quiz!"}
        </DialogTitle>
        <DialogContent>
          {isName ? 
            <DialogContentText 
              sx={{background: isSuccess(success), padding: '5px'}} 
              id="alert-dialog-description">
              Enter your name
            </DialogContentText> : 
            <></>
          }
          <TextField
            onChange={onChangeText}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <DialogContentText id="alert-dialog-description">
						Are you ready to start?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <CustomBtn 
              variant="contained" 
              onClick={onAdmin}>
            I'm admin
            </CustomBtn>
            <CustomBtn 
              variant="contained" 
              onClick={onReady} 
              autoFocus>
              I'm ready!
            </CustomBtn>
        </DialogActions>
      </Dialog>
	);
}

