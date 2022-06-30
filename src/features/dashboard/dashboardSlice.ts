import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationValues, Students } from 'models';

export interface dashboardState {
	loading: boolean;
	studentList: Students[];
	student?: Students;
	pagination: PaginationValues;
}
const intialState: dashboardState = {
	loading: true,
	studentList: [],
	student: {
		id: '',
		name: '',
		age: 0,
		mark: 0,
		city: '',
	},
	pagination: {
		_limit: 10,
		_page: 1,
		_totalRows: 1,
	},
};
const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: intialState,
	reducers: {
		getAllStudentStart(state, action: PayloadAction<ListParams>) {
			state.loading = true;
		},
		getAllStudentSuccess(state, action: PayloadAction<ListResponse<Students>>) {
			const { data, pagination } = action.payload;
			if (!data) state.studentList = data;
			else state.studentList = data;
			state.pagination = pagination!;
			state.loading = false;
		},
		getAllStudentFailed(state) {
			state.loading = false;
		},

		deleteStudentStart(state, action: PayloadAction<string>) {
			state.loading = true;
		},
		deleteStudentSuccess(state, action: PayloadAction<string>) {
			state.loading = false;
			state.studentList = state.studentList.filter((student) => {
				return student.id !== action.payload;
			});
		},
		deleteStudentFailed(state) {
			state.loading = false;
		},

		getStudentByID(state, action: PayloadAction<string>) {
			if (action.payload && !state.loading) {
				state.student = state.studentList?.find((s) => s.id === action.payload);
			} else state.student = undefined;
		},
		updateStudentByIDStart(state, action: PayloadAction<Students>) {
			state.loading = true;
		},
		updateStudentByIDSuccess(state, action: PayloadAction<Students>) {
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
export const selectorStudentList = (state: RootState) => state.dashboard.studentList;
export const selectorLoading = (state: RootState) => state.dashboard.loading;
export const selectorStudentById = (state: RootState) => state.dashboard.student;
export const selectorPagination = (state: RootState) => state.dashboard.pagination;

// reducer
export const dashboardReducer = dashboardSlice.reducer;
