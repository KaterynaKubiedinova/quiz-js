import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateQuestionForm from '../components/EditQuestion/UpdateQuestionForm.jsx';
import { changeCurrentQuestion } from '../store/questions';
import { CustomContainer } from '../themes/customsComponents';

const current = {
	question: '', 
  open: false,
  answers: [
  {
    answer: "",
    isCorrect: false,
    id: '1'
  },
  {
    answer: "",
    isCorrect: false,
    id: '2'
  },
  {
    answer: "",
    isCorrect: false,
    id: '3'
  },
	{
    answer: "",
    isCorrect: false,
    id: '4'
  }
  ],
}
export default function CreateQuestionPage() {
	const dispatch = useDispatch();
	const currentQuestion = useSelector((state) => state.currentQuestion);
	
	useEffect(() => {
		dispatch(changeCurrentQuestion(current));
	},[]);
	
	return (
		<CustomContainer>
			<UpdateQuestionForm currentQuestion={currentQuestion}/>
		</CustomContainer>
	);
}
