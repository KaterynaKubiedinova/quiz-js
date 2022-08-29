import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBtn } from '../../themes/customsComponents';
import { changeCurrentQuestion, changeToggleCorrect, changeToggleTrue, getAllQuestions } from '../../store/questions';
import AnswerFormItem from './AnswerFormItem';
import  Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import  Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { createItem, updateItem } from '../../services/itemsServices';
import { QUESTION_URI } from '../../constants';

export default function UpdateQuestionForm({currentQuestion}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toggleCorrect = useSelector((state) => state.toggleCorrect);

	useEffect(() => {
		dispatch(getAllQuestions());
	},[]);
	
	function onChangeTextQ(e) {
		dispatch(changeCurrentQuestion({...currentQuestion, question: e.target.value}));
	}

	function onSave() {
		const condition = currentQuestion.answers.filter((answer) => answer.isCorrect === true).length !== 1;
		
		if (condition) {
			dispatch(changeToggleCorrect());
		} else {

			if (currentQuestion.id) {
				updateItem(QUESTION_URI, currentQuestion);
			} else {
				createItem(QUESTION_URI, currentQuestion);
			}
			
			dispatch(changeToggleTrue());
			navigate('/questions');
		}
	}

	return (
		<>
			{currentQuestion.answers ?
				<Box sx={{padding: '10px'}}>
					<TextField
						fullWidth 
						label="Question" 
						id="fullWidth" 
						onChange={onChangeTextQ} 
						name='question' 
						value={currentQuestion.question}/>
					<Box sx={{padding: '10px'}}>
						{currentQuestion.answers.map((answer, i) => (
							<AnswerFormItem 
								key={answer.id} 
								answer={answer}
								i={i}
							/>))}
					</Box>
					{!toggleCorrect ? 
						<Typography sx={{
							background: '#f59693', 
							padding: '10px'
							}}>Error! You chose more than one correct answer or you chose none!
						</Typography> : 
						<></>}
					<CustomBtn 
						variant="contained"
						size='large'
						onClick={onSave}>SAVE
					</CustomBtn>
				</Box> : 
				<></>
			}
		</>	
	);
}

