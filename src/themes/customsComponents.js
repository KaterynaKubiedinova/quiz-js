import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';

export const NewTextField = styled(TextField)({
	margin: 10,
	width: '70%'
});

export const CustomAnswFormBox = styled(Box) ({
	display: 'flex',
	alignItems: 'center'
	
})

export const CustomListBox = styled(Box)({
	fontFamily: 'Arial',
	marginTop: 8,
	marginRight: 20,
	padding: 10,
	marginLeft: 100, 
},
({ theme }) => `
background: ${theme.palette.background.paper};
color: ${theme.palette.secondary.contrastText};
`,)

export const CustomListBoxGreen = styled(Box)({
	fontFamily: 'Arial',
	marginTop: 8,
	marginRight: 20,
	padding: 10,
	marginLeft: 100,
	background: '#6de787',
},
({ theme }) => `
color: ${theme.palette.secondary.contrastText};
`,)

export const CustomBox = styled(Box) ({
	margin: 35,
	padding: 20
	},
	({ theme }) => `
  background: ${theme.palette.secondary.main};
	color: ${theme.palette.secondary.contrastText};
`,
	);

export const CustomContainer = styled(Container) ({
  minHeight: 720,
  minWidth: '100%',
  margin: 0,
  padding: 20
},
  ({ theme }) => `
  background: ${theme.palette.background.default};
	color: ${theme.palette.secondary.contrastText};
`,
);

export const CustomIconBtn = styled(IconButton) ({
  margin: 7,
  borederRadius: 'none'
},
);

export const CustomBtn = styled(Button) ({
  margin: 10,
  },
  ({ theme }) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.secondary.contrastText};
  `,
);

export const NewPaper = styled(Paper) ({
	display:'flex',
	margin: 'auto',
	alignItems: 'center'
});

export const CustomIcon = styled(Icon) (
  ({ theme }) => `
color: ${theme.palette.text.primary};
`,
);

export const QuestionBox = styled(Box) ({
	margin: 20,
	display: 'flex',
	alignItems: 'center',
  justifyContent: 'space-around',
	padding: 15
});

export const CustomListItemBtn = styled(ListItemButton) ({
	display: 'flex',
	justifyContent: 'start',
	margin: 5,
  padding: 15,
	fontFamily: 'Arial',
		fontSize: 20
	},
	({ theme }) => `
  background: ${theme.palette.background.default};
	color: ${theme.palette.secondary.contrastText};
`,
)

export const AnswerBox = styled(Box) ({
	padding: 0
});

export const CustomList = styled(List) ({
	padding: 25,
	margin: 'auto'
},
	({ theme }) => `
  background: ${theme.palette.secondary.main};
	color: ${theme.palette.text.secondary};
`,
)