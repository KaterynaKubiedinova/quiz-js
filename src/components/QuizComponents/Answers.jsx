import React from 'react';
import { AnswerBox } from '../../themes/customsComponents';
import Answer from './Answer';

export default function Answers({answeredCurrent, answers}) {
	return (
		<AnswerBox>
			{answers.map((answer, i) => (
				<Answer 
					key={answer.id}
					answers={answers} 
					answeredCurrent={answeredCurrent} 
					i={i} 
					answer={answer} 
				/>
			))}
		</AnswerBox>
	);
}
