import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateQuestionForm from '../components/EditQuestion/UpdateQuestionForm.jsx';
import { CustomBox } from '../themes/customsComponents';
import { useParams } from 'react-router-dom';
import { changeCurrentQuestion } from '../store/questions';

export default function UpdateQuestionPage() {
	const questions = useSelector((state) => state.questions);
	const dispatch = useDispatch();
	const {id} = useParams();
	const currentQuestion = useSelector((state) => state.currentQuestion);

	useEffect(() => {
		const current = questions.find((question) => (`:${question.id}` === id));
		dispatch(changeCurrentQuestion(current));
	},[questions]);


	return (
		<CustomBox>
			<UpdateQuestionForm questions={questions} currentQuestion={currentQuestion}/>
		</CustomBox>
	);
}

