import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function QuizHead() {
	return (
		<AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography 
          variant="h1"  
          component="div" 
          sx={{ fontSize: '35px' }}>
					JavaScript Quiz
        </Typography>
      </Toolbar>
    </AppBar>
	)
}
