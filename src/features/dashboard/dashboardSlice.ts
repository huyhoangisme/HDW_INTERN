import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface dashboardStatics {
	maleCount: number;
	femaleCount: number;
}

export interface dashboardState {
	loading: boolean;
	studentList: Student[];
	student: Student;
}
const intialState: dashboardState = {
	loading: false,
	studentList: [],
	student: {
		id: '',
		name: '',
		age: 0,
		mark: 0,
		city: '',
	},
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
		getStudentByIDStart(state, action: PayloadAction<String>) {
			state.loading = true;
		},
		getStudentByIDSuccess(state, action: PayloadAction<Student>) {
			state.loading = false;
			state.student = action.payload;
		},
		getStudentByIdFailed(state) {
			state.loading = false;
		},
		updateStudentByIDStart(state, action: PayloadAction<Student>) {
			state.loading = true;
		},
		updateStudentByIDSuccess(state, action: PayloadAction<Student>) {
			state.loading = false;
		},
		updateStudentByIDFailed(state) {
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
