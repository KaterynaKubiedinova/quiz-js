import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { changeLight } from '../store/questions';
import { useDispatch } from 'react-redux';
import { lightDark } from '../functions/switchLabel';

export default function ToggleTheme({light}) {
  const dispatch = useDispatch();

  function change() {
    dispatch(changeLight());
  }

	return (
		<FormControlLabel
      sx={{display: 'block', width: '165px'}}
      control={
      	<Switch
          checked={!light}
          onChange={change}
          name="theme"
          color="primary"
        />
      }
      label={lightDark(light)}
    />
	);
}
