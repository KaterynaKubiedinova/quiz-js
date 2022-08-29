import React from 'react';
import { changeIndex } from '../../store/questions';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import cursorAct from '../../functions/cursor';
import { CustomIcon, CustomIconBtn, NewPaper } from '../../themes/customsComponents';

export default function PrevNextQuestion({questions, index, answeredCurrent}) {
	const dispath = useDispatch();
	
	function prevQuestion() {
		if (index) {
			dispath(changeIndex(index - 1));
		}
	}

	function nextQuestion() {
		const condition = index !== questions.length - 1 && answeredCurrent;
		
		if (condition) {
			dispath(changeIndex(index + 1));
		}
	}
	
	return (
		<NewPaper 
			variant="outlined" 
			square color='primary'>
			<CustomIconBtn
				onClick={prevQuestion} 
				aria-label="prev" 
				sx={{cursor: cursorAct(index, true)}}>
				<CustomIcon 
					baseClassName='fas' 
					className='fa-arrow-left-long' 
					fontSize="small" 
					color="primary"
				/>
			</CustomIconBtn>
			<Typography 
				variant="h5" 
				component="div">
				| {index + 1}/{questions.length} |
			</Typography>
			<CustomIconBtn 
				onClick={nextQuestion}  
				aria-label="next" 
				sx={{cursor: cursorAct(true, answeredCurrent)}}>
      	<CustomIcon 
					baseClassName='fas' 
					className='fa-arrow-right-long' 
					fontSize="small" 
					color="primary"
				/>
      </CustomIconBtn>
		</NewPaper>
	);
}
