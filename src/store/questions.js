import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QUESTION_URI } from "../constants";
import { getItemsList } from "../services/itemsServices";

const initialState = {
	questions: [],
	index: 0,
	newUser: {
		name: '',
		answers: 0,
	},
	isName: true,
	open: true,
	result: false,
	success: true,
	light: true,
	answered: [],
	background: [],
	currentQuestion: {},
	toggleCorrect: true,
};

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	open: false,
	reducers: {
		changeToggleCorrect: (state, action) => {
			state.toggleCorrect =  false;
		},
		changeToggleTrue: (state, action) => {
			state.toggleCorrect =  true;
		},
		changeQuestionAnswer: (state, {type, payload}) => {
			const {i, answer} = payload;
			state.currentQuestion.answers[i].answer = answer;
		},
		changeQuestionAnswerCorrect: (state, {type, payload}) => {
			state.currentQuestion.answers[payload].isCorrect = !state.currentQuestion.answers[payload].isCorrect;
		},
		changeCurrentQuestion: (state, {type, payload}) => {
			state.currentQuestion =  {...payload};
		},
		backgroundLength: (state, {type, payload}) => {
			if (state.background.length < payload) {
				while (payload) {
					state.background.push([]);
					payload--;
				}
			}
		},
		changeBackground: (state, {type, payload}) => {
			const {i, index, color} = payload;
			state.background[index][i] =  color;
		},
		isAnswered: (state, {type, payload}) => {
			state.answered[payload] =  true;
		},
		addAnswerRes: (state, action) => {
			state.newUser.answers +=  1;
		},
		changeLight: (state, action) => {
			state.light = !state.light;
		},
		questionClick: (state, {type, payload}) => {
			const questionToEdit = state.questions.find(question => question.id === payload);
			questionToEdit.open = !questionToEdit.open;
		},
		changeName: (state, {type, payload}) => {
			state.newUser.name = payload;
		},
		quizLoad: (state, action) => {
			state.open = true;
		},
		quizReady: (state, action) => {
			state.open = false;
		},
		enterName: (state, action) => {
			state.isName = false;
		},
		changeIndex: (state, {type, payload}) => {
			state.index = payload;
		},
		showResult: (state, action) => {
			state.result = !state.result;
		},
		changeSuccessFalse: (state, action) => {
			state.success = false;
		},
		changeSuccessTrue: (state, action) => {
			state.success = true;
		},
		editAllQuestions: (state, {type, payload}) => {
			state.questions = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllQuestions.fulfilled, (state, action) => {
				state.questions = action.payload;
			})
	}
})
export const { editAllQuestions, backgroundLength, changeToggleTrue, changeToggleCorrect, changeQuestionAnswerCorrect, changeQuestionAnswer, changeCurrentQuestion, addAnswerRes, changeBackground, isAnswered, changeLight,  changeSuccessTrue, changeSuccessFalse, showResult, questionClick, changeName, quizLoad, quizReady, enterName, changeIndex } = questionsSlice.actions;

export default questionsSlice.reducer;

export const getAllQuestions = createAsyncThunk(
	'questions/getAllQuestions',
	async () => {
		const response = await getItemsList(QUESTION_URI);
		return response;
	}
);
