import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cursorAct from '../../functions/cursor';
import { addAnswerRes, backgroundLength, changeBackground, isAnswered } from '../../store/questions';
import { CustomListItemBtn } from '../../themes/customsComponents';

export default function Answer({answers, answeredCurrent, answer, i}) {
	const index = useSelector((state) => state.index);
	const background = useSelector((state) => state.background);
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.questions);

	useEffect(() => {
		if (answers[i].isCorrect) {
			
			if (background.length < questions.length) {
				dispatch(backgroundLength(questions.length));
			}

			dispatch(changeBackground({index, i, color:'#6de787'}));
		}
	},[])

	function onAnswerClick(e) {
		const current = e.target.id;
		
		if (!answeredCurrent) {
			dispatch(isAnswered(index));
			
			if (answers[current].isCorrect) {
				dispatch(changeBackground({index, i: current, color:'#6de787'}));
				dispatch(addAnswerRes());
			} else {
				dispatch(changeBackground({index, i: current, color:'#ec6b68'}));
			}
		}
	}

	const CustomListItemBtnW = styled(CustomListItemBtn) (
		({ theme }) => `
		background: ${background[index][i]};
		color: ${theme.palette.secondary.contrastText};
	`,
	);
	
	return (
		<>
			{answeredCurrent ? 
				<CustomListItemBtnW 
					id={i} 
					sx={{pl: 4, cursor: cursorAct(!answeredCurrent, true)}}  
					onClick={onAnswerClick}>
					{answer.answer}
				</CustomListItemBtnW> : 
				<CustomListItemBtn 
					id={i} 
					sx={{pl: 4, cursor: cursorAct(!answeredCurrent, true)}}  
					onClick={onAnswerClick}>
					{answer.answer}
				</CustomListItemBtn>}
		</>
	);
}
