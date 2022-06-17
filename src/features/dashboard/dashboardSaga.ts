import studentApi from 'api/studentApi';
import { ListParams, ListResponse, Student } from 'models';
import { call, put, takeEvery } from 'redux-saga/effects';
import { dashboardActions, dashboardStatics } from './dashboardSlice';

const params: ListParams = {
	_page: 1,
	_limit: 10,
};
let handleGetAllStudent = () => {
	return studentApi.getAllStudent(params);
};
let handleCountGenders = (students: Student[]) => {
	let statics: dashboardStatics = { maleCount: 0, femaleCount: 0 };
	if (students && students.length > 0) {
		students.map((student) => {
			if (student.gender === 'male') {
				statics.maleCount++;
			} else statics.femaleCount++;
			return {
				statics,
			};
		});
	}
	return statics;
};
function* handleFetchData() {
	try {
		// call api
		let allStudent: ListResponse<Student> = yield call(handleGetAllStudent);
		let statics = handleCountGenders(allStudent.data);
		yield put(dashboardActions.setStatics(statics));
		yield put(dashboardActions.setStudentList(allStudent.data));
		yield put(dashboardActions.fetchDataSuccess());
	} catch (e) {
		yield put(dashboardActions.fetchDataFailded());
	}
}


function* handleDeleteStudent() {
	try {
		let allStudent: ListResponse<Student> = yield call(handleGetAllStudent);
		yield put(dashboardActions.setStudentList(allStudent.data));
		// deleteStudent()
	} catch (e) {
		yield put(dashboardActions.fetchDataFailded());
	}
}
function* handleDashBoardActions() {
	yield takeEvery(dashboardActions.fetchData.type, handleFetchData);
}
export default function* dashboardSaga() {
	yield call(handleDashBoardActions);
	yield call(handleDeleteStudent);
}
