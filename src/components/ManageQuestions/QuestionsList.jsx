import React from 'react';
import QuestionsListItem from './QuestionsListItem';
import { CustomBtn, CustomList } from '../../themes/customsComponents';
import { useNavigate } from 'react-router-dom';

export default function QuestionsList({onDeleteBtn, questions, onQuestionClick}) {
	const navigate = useNavigate();

	function backQuiz() {
		navigate('/');
	}

	function createQuestion() {
		navigate('/questions/create');
	}

	return (
		<>
			<CustomBtn 
				onClick={backQuiz}
				size="large" 
				variant="contained">
					Back to quiz
			</CustomBtn>
			<CustomBtn 
				onClick={createQuestion}
				size="large" 
				variant="contained">
					Add question
			</CustomBtn>
			<CustomList 
      	component="nav"
      	aria-labelledby="nested-list-subheader">
				{questions.map((question) => (
					<QuestionsListItem 
						key={question.id}
						question={question}
						onDeleteBtn={onDeleteBtn}
						onQuestionClick={onQuestionClick}
					/>
				))}
			</CustomList>
		</>
	);
}


