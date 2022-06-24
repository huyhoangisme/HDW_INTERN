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
function* handleGetStudentByID(action: PayloadAction<String>) {
	try {
		let student: Student = yield call(studentApi.getStudentById, `${action.payload}`);
		yield put(dashboardActions.getStudentByIDSuccess(student));
	} catch (e) {
		yield put(dashboardActions.getStudentByIdFailed());
	}
}
function* handleDeleteStudent(action: PayloadAction<String>) {
	// call api method to delete
	try {
		yield call(studentApi.removeStudent, `${action.payload}`);
		yield put(dashboardActions.deleteStudentSuccess(action.payload));
	} catch (e) {
		yield put(dashboardActions.deleteStudentFailed());
	}
}
function* handleUpdateStudentByID(action: PayloadAction<Student>) {
	try {
		let student: Student = yield call(studentApi.updateStudent, action.payload);
		yield put(dashboardActions.updateStudentByIDSuccess(student));
	} catch (e) {
		yield put(dashboardActions.updateStudentByIDFailed());
	}
}

function* handleDashBoardActions() {
	yield takeEvery(dashboardActions.getAllStudentStart.type, handleGetAllStudent);
	yield takeEvery(dashboardActions.deleteStudentStart.type, handleDeleteStudent);
	yield takeEvery(dashboardActions.getStudentByIDStart.type, handleGetStudentByID);
	yield takeEvery(dashboardActions.updateStudentByIDStart.type, handleUpdateStudentByID);
}
export default function* dashboardSaga() {
	yield call(handleDashBoardActions);
}
