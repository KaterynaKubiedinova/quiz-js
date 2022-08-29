import Typography from '@mui/material/Typography'
import React from 'react'
import { CustomListBox, CustomListBoxGreen } from '../../themes/customsComponents'

export default function AnswersListItem({i, answer}) {
	return (
	<>
		{answer.isCorrect ? 
			<CustomListBoxGreen>
				<Typography 
					variant="span">
						{i + 1}. {answer.answer}
				</Typography>
			</CustomListBoxGreen> :
			<CustomListBox>
				<Typography 
					variant="span">
						{i + 1}. {answer.answer}
				</Typography>
			</CustomListBox>
		}
	</>
	);
}
