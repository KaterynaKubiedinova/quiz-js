import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  editAllQuestions, getAllQuestions, questionClick } from '../store/questions';
import QuestionsList from '../components/ManageQuestions/QuestionsList';
import { CustomContainer } from '../themes/customsComponents';
import { deleteItem } from '../services/itemsServices';
import { QUESTION_URI } from '../constants';

export default function QuestionsPage() {
	const questions = useSelector((state) => state.questions);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getAllQuestions());
	},[])

	function onDeleteBtn(id) {
		deleteItem(QUESTION_URI, id).then(() => {
			const newQuestions = questions.filter((question) => question.id !== id);
			dispatch(editAllQuestions(newQuestions));
		})
	}
	function onQuestionClick(id) {
		dispatch(questionClick(id));
	}
	
	return (
		<CustomContainer>
			<QuestionsList 
				questions={questions} 
				onQuestionClick={onQuestionClick}
				onDeleteBtn={onDeleteBtn}
			/>
		</CustomContainer>
	);
}

