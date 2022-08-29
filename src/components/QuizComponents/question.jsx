import Typography from '@mui/material/Typography'
import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { QuestionBox } from '../../themes/customsComponents';

export default function Question({answeredCurrent, index, questions, onNextClick}) {
	return (
		<QuestionBox>
			<Typography 
				variant="h5" 
				component="div">
				{questions[index].question}
			</Typography>
			{answeredCurrent && index !== questions.length-1 ? 
				<Button 
					size="large" 
					onClick={onNextClick} 
					variant="contained" 
					endIcon={<SendIcon />}>Next
				</Button>  : 
				<></>}
			{answeredCurrent && index === questions.length-1 ? 
				<Button 
					size="large" 
					onClick={onNextClick} 
					variant="contained" 
					endIcon={<SendIcon />}>Result
				</Button> : 
				<></>
			}
		</QuestionBox>
	);
}
