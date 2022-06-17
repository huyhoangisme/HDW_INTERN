import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface dashboardStatics {
	maleCount: number;
	femaleCount: number;
}

export interface dashboardState {
	loading: boolean;
	statics: dashboardStatics;
	highestStudentList: Student[];
	studentList: Student[];
}
const intialState: dashboardState = {
	loading: false,
	statics: {
		maleCount: 0,
		femaleCount: 0,
	},
	highestStudentList: [],
	studentList: [],
};
const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: intialState,
	reducers: {
		fetchData(state) {
			state.loading = true;
		},
		fetchDataSuccess(state) {
			state.loading = false;
		},
		fetchDataFailded(state) {
			state.loading = false;
		},
		setStatics(state, action: PayloadAction<dashboardStatics>) {
			state.statics = action.payload;
		},
		setHighestStudentList(state, action: PayloadAction<Student[]>) {
			state.highestStudentList = action.payload;
		},
		setStudentList(state, action: PayloadAction<Student[]>) {
			state.studentList = action.payload;
		},
		deleteStudentList(state, action: PayloadAction<Student>) {
			let studentListCopy = state.studentList;
			studentListCopy = studentListCopy.filter((student) => {
				return student.id !== action.payload.id;
			});
			state.studentList = studentListCopy;
		},
		
	},
});

// actions
export const dashboardActions = dashboardSlice.actions;

// selector
export const selectorSetStudentList = (state: dashboardState) => state.studentList;

// reducer
export const dashboardReducer = dashboardSlice.reducer;
