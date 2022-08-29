import  React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import DialogResult from '../components/QuizComponents/dialogResult';
import DialogWind from '../components/QuizComponents/dialogStart';
import QuizQuestionsItem from '../components/QuizComponents/quizQuestionsItem';
import { changeIndex, quizLoad, quizReady, showResult } from '../store/questions';
import QuizHead from '../components/QuizComponents/quizHead'; 

export default function HomePage() {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.open);
	const questions = useSelector((state) => state.questions);
	const index = useSelector((state) => state.index);
	const result = useSelector((state) => state.result);

	useEffect(() => {
		dispatch(quizLoad());
	},[]);

	function onNextClick() {
		if(index < questions.length-1) {
			dispatch(changeIndex(index + 1));
		} else {
			dispatch(showResult());
		}
	}

  const onReadyClick = () => {
    dispatch(quizReady());
  };

	return (
		<Box>
			<QuizHead/>
			<QuizQuestionsItem 
				questions={questions} 
				index={index} 
				onNextClick={onNextClick}
			/>
			<DialogWind 
				onReadyClick={onReadyClick} 
				open={open}
			/>
			<DialogResult 
				onReadyClick={onReadyClick} 
				open={result}
			/>
		</Box>
	);
}

