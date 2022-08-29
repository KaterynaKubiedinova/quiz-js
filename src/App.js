import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import QuestionsPage from './pages/Questions';
import CreateQuestionPage from './pages/CreateQuestion';
import UpdateQuestionPage from './pages/UpdateQuestion';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes/newThemes';
import ToggleTheme from './components/toggleTheme';
import { useSelector } from 'react-redux';
import { CustomContainer } from './themes/customsComponents';


function App() {
	const light = useSelector((state) => state.light);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CustomContainer>
        <ToggleTheme light={light}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/questions' element={<QuestionsPage/>}/>
          <Route path='/questions/create' element={<CreateQuestionPage/>}/>
          <Route path='/questions/:id' element={<UpdateQuestionPage/>}/>
        </Routes>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
