import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { CustomBtn } from '../../themes/customsComponents';
import { useNavigate } from 'react-router-dom';
import AnswersListItem from './AnswersListItem';

export default function QuestionsListItem({onDeleteBtn, question, onQuestionClick}) {
	const {id, open, answers} = question;
	const navigate = useNavigate();

	function onQuestion(e) {
		e.stopPropagation();
		onQuestionClick(id);
	}

	function onEdit(e) {
		e.stopPropagation();
		navigate(`/questions/:${id}`);
	}

	function onDelete(e) {
		e.stopPropagation();
		onDeleteBtn(id);
	}

	return (
		<>
			<ListItemButton onClick={onQuestion}>
				<CustomBtn 
					onClick={onDelete} 
					variant="contained"
					size='small'>Delete
				</CustomBtn>
				<CustomBtn 
					onClick={onEdit} 
					variant="contained"
					size='small'>Edit
				</CustomBtn>
				<ListItemText primary={question.question} />
					{open ?
						<ExpandLess /> : 
						<ExpandMore />
					}
			</ListItemButton>
			<Collapse 
				in={open} 
				timeout="auto" 
				unmountOnExit>
				<List 
					component="div" 
					disablePadding>
					{answers.map((answer, i) => (
						<AnswersListItem 
							key={answer.id} 
							i={i} 
							answer={answer}
						/>
					))}
				</List>
			</Collapse>
		</>		
	);
}

