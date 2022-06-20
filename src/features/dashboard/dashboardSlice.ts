import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface dashboardStatics {
	maleCount: number;
	femaleCount: number;
}

export interface dashboardState {
	loading: boolean;
	studentList: Student[];
}
const intialState: dashboardState = {
	loading: false,
	studentList: [],
};
const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: intialState,
	reducers: {
		getAllStudentStart(state) {
			state.loading = true;
		},
		getAllStudentSuccess(state, action: PayloadAction<Student[]>) {
			state.studentList = action.payload;
		},
		getAllStudentFailed(state) {
			state.loading = false;
		},

		deleteStudentStart(state, action: PayloadAction<String>) {
			state.loading = true;
		},
		deleteStudentSuccess(state, action: PayloadAction<String>) {
			state.loading = false;
			state.studentList = state.studentList.filter((student) => {
				return student.id !== action.payload;
			});
		},
		deleteStudentFailed(state) {
			state.loading = false;
		},
	},
});

// actions
export const dashboardActions = dashboardSlice.actions;

// selector
export const selectorSetStudentList = (state: dashboardState) => state.studentList;

// reducer
export const dashboardReducer = dashboardSlice.reducer;
