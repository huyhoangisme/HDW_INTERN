import { PayloadAction } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';
import { ListParams, ListResponse, Student } from 'models';
import { call, put, takeEvery } from 'redux-saga/effects';
import { dashboardActions } from './dashboardSlice';

const params: ListParams = {
	_page: 1,
	_limit: 10,
};

function* handleGetAllStudent() {
	try {
		let allStudent: ListResponse<Student> = yield call(studentApi.getAllStudent, params);
		yield put(dashboardActions.getAllStudentSuccess(allStudent.data));
	} catch (e) {
		yield put(dashboardActions.getAllStudentFailed);
	}
}

function* handleDeleteStudent(action: PayloadAction<String>) {
	// call api method to delete
	try {
		yield call(studentApi.removeStudent, `${action.payload}`);
		yield put(dashboardActions.deleteStudentSuccess(action.payload));
	} catch (e) {
		yield put(dashboardActions.deleteStudentFailed);
	}
}

function* handleDashBoardActions() {
	yield takeEvery(dashboardActions.getAllStudentStart.type, handleGetAllStudent);
	yield takeEvery(dashboardActions.deleteStudentStart.type, handleDeleteStudent);
}
export default function* dashboardSaga() {
	yield call(handleDashBoardActions);
}
