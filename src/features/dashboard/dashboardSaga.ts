import { PayloadAction } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';
import { ListParams, ListResponse, Students } from 'models';
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import { dashboardActions } from './dashboardSlice';


function* handleGetAllStudent(action: PayloadAction<ListParams>) {
	try {
		let allStudent: ListResponse<Students> = yield call(studentApi.getAllStudent, action.payload);
		yield put(dashboardActions.getAllStudentSuccess(allStudent));
	} catch (e) {
		yield put(dashboardActions.getAllStudentFailed);
	}
}

function* handleDeleteStudent(action: PayloadAction<string>) {
	// call api method to delete
	try {
		yield call(studentApi.removeStudent, `${action.payload}`);
		yield put(dashboardActions.deleteStudentSuccess(action.payload as string));
	} catch (e) {
		yield put(dashboardActions.deleteStudentFailed());
	}
}
function* handleUpdateStudentByID(action: PayloadAction<Students>) {
	try {
		const student: Students = yield call(studentApi.updateStudent, action.payload);
		if (student) yield put(dashboardActions.updateStudentByIDSuccess(student));
	} catch (e) {
		yield put(dashboardActions.updateStudentByIDFailed());
	}
}

function* handleDashBoardActions() {
	yield takeLeading(dashboardActions.getAllStudentStart.type, handleGetAllStudent);
	yield takeEvery(dashboardActions.deleteStudentStart.type, handleDeleteStudent);
	yield takeEvery(dashboardActions.updateStudentByIDStart.type, handleUpdateStudentByID);
}
export default function* dashboardSaga() {
	yield call(handleDashBoardActions);
}
