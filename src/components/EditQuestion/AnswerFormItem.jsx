import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import { CustomAnswFormBox, NewTextField } from '../../themes/customsComponents';
import { useDispatch } from 'react-redux';
import { changeQuestionAnswer, changeQuestionAnswerCorrect } from '../../store/questions';
import { trueFalse } from '../../functions/switchLabel';

export default function AnswerFormItem({answer, i}) {
	const dispatch = useDispatch();

	function onChangeText(e) {
		dispatch(changeQuestionAnswer({i, answer: e.target.value}));
	}

	function onChangeSwitch() {
		dispatch(changeQuestionAnswerCorrect(i));
	}

	return (
		<CustomAnswFormBox>
			<NewTextField
				onChange={onChangeText} 
				name='answer' 
				value={answer.answer} 
				id="outlined-basic" 
				label='Answer' 
				variant="outlined" 
			/>
			<FormControlLabel
      	sx={{display: 'block'}}
      	control={
      		<Switch
          	checked={answer.isCorrect}
          	onChange={onChangeSwitch}
          	name="theme"
          	color="primary"
  				/>
      	}
      	label={trueFalse(answer.isCorrect)}
    	/>
		</CustomAnswFormBox>
	);
}
