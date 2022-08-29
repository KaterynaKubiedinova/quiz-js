import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../../store/questions';
import { CustomBox } from '../../themes/customsComponents';
import Answers from './Answers';
import PrevNextQuestion from './prevNextQuestion';
import Question from './question';


export default function QuizQuestionsItem({questions, index, onNextClick}) {
	const dispatch = useDispatch();
	const question = questions[index];
	const answered = useSelector((state) => state.answered);

	useEffect(() => {
		dispatch(getAllQuestions());
	},[]);
	
	return (
		<CustomBox>
			{questions.length > 0 ?
				<>
					<PrevNextQuestion 
						index={index} 
						questions={questions}
						answeredCurrent={answered[index]}
					/>
					<Question 
						answeredCurrent={answered[index]} 
						index={index} 
						questions={questions} 
						onNextClick={onNextClick}
					/>
					<Answers 
						answers={question.answers} 
						answeredCurrent={answered[index]}
					/>
				</> : 
				<></>
			}
		</CustomBox>
	);
}
